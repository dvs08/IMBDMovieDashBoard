import React from 'react';
import bannerImage from '../images/How-to-Install-TheMovieDB-Helper-Kodi.jpg';
import { Text } from '@innovaccer/design-system';
import "@innovaccer/design-system/css";
import '../styles/movie.css';

const BackDrop = () => {
    return (
        <div className="hero">
            <div className="backdrop">
                <div className="text-content">
                    {/* <div className="name">  */}
                        <Text color="white" style={{fontSize:"2.8rem" , letterSpacing: "0.4px", lineHeight: "1.1"}}>
                        THE MOVIE DATABASE <br />
                        APPLICATION </Text>
                    {/* </div> */}
                    {/* <div className="desc">  */}
                       <Text color="white"  style={{marginTop: "2.5rem" , fontSize: "1.5rem",  }}> A complete movies web app </Text>
                    {/* </div> */}
                </div>
                <img 
                    src={bannerImage}
                    alt="Backdrop"
                    className="image"
                />
                <div className="overlay" />
            </div>
        </div>
    );
};

export default BackDrop;
