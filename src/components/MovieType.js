import React from 'react';
import '../styles/movie.css'
import Carousel from './Carousel';
import { useNavigate } from 'react-router-dom';
import { Heading, Text, Subheading } from '@innovaccer/design-system';
import "@innovaccer/design-system/css";

const MovieType = ({movieType , movieImages , movieIds}) => {

    const navigate = useNavigate();
    return(

        <div className = "wrapper" style={{marginBottom: '100px', marginTop:'50px'}}>
            <Heading size="l">{movieType}</Heading>
            <a className="listing__explore" 
            onClick={() => navigate(`/explore/${movieType.toLowerCase().replace(/ /g, '-')}`)}
            >
                <Subheading>Explore All</Subheading>
            </a>
                <div className="carousel-cont">   
                    <Carousel images={movieImages} movieIds={movieIds}/>
                </div>
        </div>

    );
};

export default MovieType;