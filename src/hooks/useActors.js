import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useActors = (idActor) =>{

    const apiUrl = `https://api.themoviedb.org/3/person/${idActor}?api_key=b4a0d0614148a4642609ef1707262164`;
    const [actor, setActor] = useState(['']);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{

        const fetchActors = async () =>{

            try {
                // Fetch movie details
                const actorResponse = await axios.get(apiUrl);
                console.log("ActorResponse: ",actorResponse);
                console.log("ActorResponse.data: ", actorResponse.data);

                const actorData = {

                    name: actorResponse.data.name,
                    biography: actorResponse.data.biography,
                    profile:actorResponse.data.profile_path ? `https://image.tmdb.org/t/p/w500${actorResponse.data.profile_path}`: `https://the-movie-database-application.netlify.app/assets/no_image.jpg`
                }

                // console.log("ActorData: ", actorData);
                
                setActor(actorData);
                // console.log("Actor: ", actor);
                
            } catch (err) {
                console.log("Error:", err);
                setError("Error");
            } finally {
                setLoading(false); // Set loading to false after fetching
            }



        }

        fetchActors();


    }, [apiUrl] );

    return {actor , loading , error};

}

export default useActors;