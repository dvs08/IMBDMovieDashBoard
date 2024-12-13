import React, {useState, useEffect} from 'react';
import axios from 'axios';


const useMovieGenre = (idTab) => {

    const [currData, setCurrData] = useState([]);
    const [loading, setLoading] = useState(true);



    const APIURL = `https://api.themoviedb.org/3/genre/${idTab}/movies?api_key=b4a0d0614148a4642609ef1707262164`;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(APIURL);
                
                const responseData = response.data.results.map(dat => ({
                    backdrop: dat.backdrop_path ? `https://image.tmdb.org/t/p/w500${dat.backdrop_path}` : `https://the-movie-database-application.netlify.app/assets/no_image.jpg`,
                    title: dat.title,
                    rating: dat.vote_average,
                    year: new Date(dat.release_date).getFullYear(),
                    id: dat.id, 
                }));

                setCurrData(responseData);
            } catch (err) {
                console.error("Error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [idTab]); 

    return {currData , loading};

}

export default useMovieGenre;