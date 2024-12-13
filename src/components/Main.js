import React  from 'react';
import {BrowserRouter as Router, Route, Routes, useNavigate, RouterProvider} from 'react-router-dom';  //3rd party library
import MovieImbd from './MovieImbd';
import MoviePage from './MoviePage';
import ExploreAll from './ExploreAll';
import Actors from './Actors';
import Genre from './Genre';
import SearchAll from './SearchAll';

const Main = () =>{

    return(
        <Router>
            <Routes>
                <Route path = "/" element ={<MovieImbd/>} ></Route>
                <Route path ="/movie/:id" element={<MoviePage/>}></Route>
                <Route path ="/explore/:movieType" element={<ExploreAll/>}></Route>
                <Route path="/cast/:idActor" element={<Actors/>}></Route>
                <Route path="/genres/:menuname/:idTab" element={<Genre/>}></Route>
                <Route path="/search/:query" element={<SearchAll/>}></Route>
            </Routes>
        </Router>
    );

};

export default Main;


/*

React Router DOM: 
Links vs Navlink: Link is used instead of anchor tag, because in anchor tag the page reloads/refresh but in Link the new nodes are just inserted in the DOM.
Navlink provides extra features than Link. 


 */
