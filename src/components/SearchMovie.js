import React, {useState} from 'react';
import '../styles/movie.css';
import { Icon, Input, Combobox} from '@innovaccer/design-system';
import "@innovaccer/design-system/css";
import { useNavigate } from 'react-router-dom';

const SearchMovie = () => {

    const navigate = useNavigate();
    const [searchItem, setSearchItem] = useState('');

    const handleKeyDown = (e) => {

        if(e.key === 'Enter'){
            
            
            navigate(`/search/${searchItem.trim()}`);
        }

        // console.log("Event e : ",e.key);
        
    };

    // console.log("Enter Pressed, Value: ", searchItem);
    
    return (
        
        <div className="search_wrapper" >
            
            <div className="search_content" onKeyDown={handleKeyDown}>
                <Icon size={33} name='search' className="searchMDS"/> 
                 {/* <input
                    autoComplete="off"
                    type="text"
                    placeholder="Search Movie"
                    name="searchStr"
                    className="infocustom"
                    onChange ={(e) => {setSearchItem(e.target.value); console.log("E.key: ", e.key); console.log("e.target: ", e.target.value); console.log("E:" ,e);}}
                    // onKeyDown={handleKeyDown}
                /> */}
                 <Input 
                    className="searchBar" 
                    autoComplete = "off"
                    name="input" 
                    placeholder="Search"  
                    onChange={(e) => setSearchItem(e.target.value)}
                    
                   
                 >
                 </Input>
            </div>
           
         </div>
    );
};

export default SearchMovie;
