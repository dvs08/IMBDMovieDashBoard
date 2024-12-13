import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useGenre = () => {

    const apiLink = 'https://api.themoviedb.org/3/genre/movie/list?api_key=b4a0d0614148a4642609ef1707262164';

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{

        const fetchGenres = async () => {
            try {
              const response = await axios.get(apiLink);
              
              const genres = response.data.genres.map(genre => ({
                name: genre.name.toLowerCase().replace(/\s+/g, '_'), 
                label: genre.name,
                id: genre.id
              }));
        
              setData([{name: 'home', label: 'Home', id:'home'}, ...genres]);
              
              console.log("Genres: " , genres);
        
            } catch (error) {
                setError('Error fetching genres');
            } finally{
                setLoading(false);
            }
          };
          fetchGenres();
    }, []);


    return {data, loading, error};

};

export default useGenre;