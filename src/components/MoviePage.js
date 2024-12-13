
import React, { useEffect, useState } from 'react';
import bannerImage from '../images/MovieTest.jpg'; // Fallback image
import '../styles/movie.css';
import { Icon, Button, Modal, Heading, Text, Paragraph } from '@innovaccer/design-system';
import MenuBar from './MenuBar';
import Carousel from './Carousel';
import CarouselActor from './CarouselActor';
import Reviews from './Reviews';
import Footer from './Footer';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import CustomModal from './CustomModal';
import { Atom } from 'react-loading-indicators';
import "@innovaccer/design-system/css";
import useMoviePage from '../hooks/useMoviePage';

const MoviePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [trailerUrl, setTrailerUrl] = useState("");
    const {movieDetails, cast , recomMovie , review , youTube, loading} = useMoviePage(id);

    if (!id) return;

    const handleWatchTrailer = () => {

        if(youTube.length > 0){
        
        setTrailerUrl(`https://www.youtube.com/embed/${youTube[0].key}?si=Tjac6J5E8fU63R0v`);
        setModalOpen(true);
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    console.log("Cast[] length: ", cast.length);
    console.log("RecMov[]: ", recomMovie.length);
    return (
        <div>
            <MenuBar />
            <section>
                <div className="content">
                    <span>
                        <a className="home_link" onClick={() => navigate('/')}>HOME</a>
                    </span>
                    <span style={{ fontSize: "30px", marginLeft: "5px" }}>|</span>
                    <span style={{ marginLeft: "8px" }}>{movieDetails.title}</span>
                </div>
            </section>
            {loading ? ( 
                
                <div className='indic'> <Atom color="#3176cc" size="large" text="" textColor="#b70eb7"/></div>
            ) : (
                <div>
                    <div className="hero">
                        <div className="backdrop">
                            <div className="text-content">
                                <div className="name">{movieDetails.title}</div>
                                <div className="meta">
                                    <div className="info">
                                        <Icon size={23} name='star' appearance="warning" />
                                        <span className="rate2" style={{ color: "gold" }}>{movieDetails.vote}</span>
                                        <span>{movieDetails.voteCount} Reviews | {movieDetails.playtime}</span>
                                    </div>
                                </div>
                                <Paragraph color="white" className="desc" style={{ lineHeight: "2rem", marginTop:"2.5rem" }}>{movieDetails.overview}</Paragraph>
                                <br />
                                <Button size="regular" className="playTrailer" onClick={handleWatchTrailer}>Watch Trailer</Button>
                            </div>
                            <img
                                src={movieDetails.backdrop || bannerImage}
                                alt="Backdrop"
                                className="image"
                            />
                            <div className="overlay" />
                        </div>
                    </div>
                    <Heading size="xxl" className="text-center" style={{marginTop: "50px"}}>Overview</Heading>
                    <div className="main-container">
                        <div className="overview-container">
                            <div className="poster">
                                <img src={movieDetails.poster} width="350" height="500" alt="Poster" />
                            </div>
                            <div className="details">
                                <ul>
                                    <li><strong>Released:</strong> {movieDetails.releaseDate}</li>
                                    <li><strong>Runtime:</strong> {movieDetails.playtime}</li>
                                    <li><strong>Budget:</strong> ${movieDetails.budget}</li>
                                    <li><strong>Revenue:</strong> ${movieDetails.revenue}</li>
                                    <li><strong>Status:</strong> {movieDetails.relStatus}</li>
                                    <li><strong>Language:</strong> {movieDetails.languages}</li>
                                    <li><strong>Genre:</strong> {movieDetails.genres}</li>
                                </ul>
                            </div>
                        </div>

                        <Heading size="xxl"  style={{marginTop: "50px"}}className="text-center">Cast</Heading>
                        {
                            cast.length > 0 ? (

                                <CarouselActor images={cast.map(actor => actor.profile)} castIds={cast.map(cas => cas.id)} />

                            ) : (
                                <h2>No Cast Available</h2>
                            )
                        }
                       
                        <Heading size="xxl" style={{marginTop: "50px"}} className="text-center">Recommended Movies</Heading>
                        <Carousel images={recomMovie.map(rec => rec.poster)} movieIds={recomMovie.map(rec => rec.id)} />

                        <Heading size="xxl" style={{marginTop: "50px"}} className="text-center">Reviews</Heading>
                        {
                            review.length > 0 ? (
                                review.map((rev, index) => (
                                    <Reviews
                                        key={index}
                                        author={rev.author}
                                        revText={rev.revText}
                                        date={rev.date}
                                    />
                                ))
                            ) : (
                                <h2>No Reviews Available</h2>
                            )
                        }
                    </div>
                    <Footer />
                    <CustomModal isOpen={modalOpen} onClose={closeModal} videoUrl={trailerUrl} />
                </div>
            )}
        </div>
    );
};

export default MoviePage;




