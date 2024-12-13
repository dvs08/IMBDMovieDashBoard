import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/allMovies.css';
import '../styles/movie.css';
import { Icon, Pagination } from '@innovaccer/design-system';
import MenuBar from './MenuBar';
import Footer from './Footer';
import { useParams, useNavigate } from 'react-router-dom';
import { Atom } from 'react-loading-indicators';
import useMovieGenre from '../hooks/useMovieGenre';

const ITEMS_PER_PAGE = 8;

const GenreAll = () => {
    const {menuname , idTab } = useParams();
    const navigate = useNavigate();
    const {currData , loading}  = useMovieGenre(idTab);
    const [currentPage, setCurrentPage] = useState(1);



    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = currData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(currData.length / ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <MenuBar />
            <section>
                <div className="content">
                    <span>
                        <a className="home_link" onClick={() => navigate('/')}>HOME</a>
                    </span>
                    <span style={{ fontSize: "30px", marginLeft: "5px" }}>|</span>
                    <span style={{ marginLeft: "8px" }}>{menuname.charAt(0).toUpperCase() + menuname.slice(1)}</span>
                </div>
            </section>
            <div className="container-fluid">
                <div className="row">
                    {loading ? (
                        <div className='indic'> <Atom color="#3176cc" size="large" text="" textColor="#b70eb7"/></div>
                    ) : (
                        currentItems.map(movie => (
                            <div key={movie.id} className="col-md-3">
                                <div className="listing-item-style" onClick={() => navigate(`/movie/${movie.id}`)}>
                                    <img src={movie.backdrop} alt={movie.title} />
                                    <div className="movie-info">
                                        <p className="rate">
                                            <Icon size={18} name='star' type="outlined" appearance="warning" />
                                            <span>{movie.rating.toFixed(1)}</span>
                                        </p>
                                        <p className="year">{movie.year}</p>
                                        <h6>{movie.title}</h6>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className="pagination">
                <Pagination
                    type="basic"
                    page={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
            <Footer />
        </div>
    );
}

export default GenreAll;



