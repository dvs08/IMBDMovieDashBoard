import React, { useEffect, useState } from 'react';
import '../styles/movie.css';
import { HorizontalNav } from '@innovaccer/design-system';
import "@innovaccer/design-system/css";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import useGenre from '../hooks/useGenres';

//Re-rendering happens on unmout when Nagivation changes. in setState only state updates.
//Read about Lifecycle and useState rendering.

const Menubar = () => {

  const navigate = useNavigate();
  const [active, setActive] = useState();
  const {data, loading, error} = useGenre();
  const {menuname } = useParams();


  useEffect(()=>{
    setActive( {name: menuname || 'home'})

  },[menuname])

  const onClickHandler = ({name, ...rest}) => {
      console.log('menu-clicked: ', name);
      setActive({name});
      console.log("menu name Set",name);
      if(name === 'home'){
        navigate('/');
      } else {
      navigate(`/genres/${name}/${rest.id}`);
      }
  };

  if(loading){
    return <div>Loading...</div>;
  }

  if(error){
    return <div>Error Loading genres...</div>
  }


  // console.log("Data.id: ", active.id);
  console.log("Data: ", data);
  console.log("Active:", active);
  return (
    <div className="d-flex justify-content-end py-6 bg-secondary-lightest navBackground" id='navBackground'>
      <HorizontalNav
        className="w-100 justify-content-end"
        menus={data}
        active={active}
        onClick={onClickHandler}
      />
    </div>
  );
};

export default Menubar;
