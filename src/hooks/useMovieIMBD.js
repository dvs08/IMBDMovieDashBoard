import React , {useState , useEffect} from 'react';
import axios from 'axios';


const useMovieIMBD = (apiName) =>{

    const apiLink = `https://api.themoviedb.org/3/movie/${apiName}?api_key=b4a0d0614148a4642609ef1707262164`;

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{
       
        const fetchMovies = async () => {

            try{

                setLoading(true);
                setError(null);
    
                const response = await axios.get(apiLink);
                const movieData = response.data.results.map((movie) =>({
                    title: movie.title,
                    backdrop: movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : `https://the-movie-database-application.netlify.app/assets/no_image.jpg`,
                    movieId: movie.id
                }));

                setMovies(movieData);
    
            }catch(err){
                console.log("Error is,:", err);

    
            }finally{
                setLoading(false);
    
            }
    
        }
        fetchMovies();

    }, [apiName]);                                  //Will re run if Api name changes. Therefore for every type it will run 

    return {movies, loading, error};
};

export default useMovieIMBD;