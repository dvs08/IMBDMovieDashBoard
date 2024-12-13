import React, {useState, useEffect} from 'react';
import axios from 'axios';


const useExplore = (movieType) =>{

    let apiUrl = '';

    switch (movieType) {
        case 'trending-movies':
            apiUrl = 'https://api.themoviedb.org/3/trending/movie/day?api_key=b4a0d0614148a4642609ef1707262164';
            break;
        case 'top-rated-movies':
            apiUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=b4a0d0614148a4642609ef1707262164';
            break;
        case 'popular-movies':
            apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=b4a0d0614148a4642609ef1707262164';
            break;
        case 'upcoming-movies':
            apiUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=b4a0d0614148a4642609ef1707262164';
            break;
        default:
           apiUrl = '';
            break;
    }

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await axios.get(apiUrl);
                console.log("Explore Response",response);
                const responseData = response.data.results.map(movie => ({
                    title: movie.title,
                    backdrop: movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : `https://the-movie-database-application.netlify.app/assets/no_image.jpg`,
                    rating: movie.vote_average,
                    year: new Date(movie.release_date).getFullYear(),
                    id: movie.id
                }));
                console.log(responseData);
                setMovies(responseData);
            } catch (err) {
                console.error("Error:", err);
                setError("Error");
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };
        fetchData();
    }, [apiUrl]);

    return {movies, loading, error};



};

export default useExplore;