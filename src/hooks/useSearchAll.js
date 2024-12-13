import React, {useState, useEffect} from 'react';
import axios from 'axios';


const useSearchAll = (query) =>{

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const allAPI = `https://api.themoviedb.org/3/search/movie?api_key=b4a0d0614148a4642609ef1707262164&query=${query}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(allAPI);
                console.log("Hello Search: ", response);
                
                const responseData = response.data.results.map(movie => ({
                    title: movie.title,
                    backdrop: movie.backdrop_path 
                        ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` 
                        : `https://the-movie-database-application.netlify.app/assets/no_image.jpg`, 
                    rating: movie.vote_average,
                    year: new Date(movie.release_date).getFullYear(),
                    id: movie.id
                }));
                
                setMovies(responseData);
            } catch (err) {
                console.error("Error:", err);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };
        fetchData();
    }, [query]);

    return {movies , loading};


}

export default useSearchAll;