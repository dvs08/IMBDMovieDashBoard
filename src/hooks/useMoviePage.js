import React , {useState, useEffect} from 'react';
import axios from 'axios';

const useMoviePage = (id) =>{

    const [movieDetails, setMovieDetails] = useState({});
    const [cast, setCast] = useState([]);
    const [recomMovie, setRecomMovie] = useState([]);
    const [review, setReview] = useState([]);
    const [youTube, setYoutube] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    const castAPI = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=b4a0d0614148a4642609ef1707262164`;
    const recomMovieAPI = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=b4a0d0614148a4642609ef1707262164`;
    const reviewAPI = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=b4a0d0614148a4642609ef1707262164`;
    const movieDetailAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=b4a0d0614148a4642609ef1707262164`;
    const youtubeAPI = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=b4a0d0614148a4642609ef1707262164`;

    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            setLoading(true); // Set loading to true when starting to fetch
            try {
                // Fetch movie details
                const movieResponse = await axios.get(movieDetailAPI);

                const movieItems = {
                    title: movieResponse.data.title,
                    backdrop: movieResponse.data.backdrop_path? `https://image.tmdb.org/t/p/w500${movieResponse.data.backdrop_path}` : `https://the-movie-database-application.netlify.app/assets/no_image.jpg`,
                    releaseDate: new Date(movieResponse.data.release_date).toLocaleDateString(),
                    budget: movieResponse.data.budget.toLocaleString(),
                    revenue: movieResponse.data.revenue.toLocaleString(),
                    languages: movieResponse.data.spoken_languages.map(lang => lang.name).join(', '),
                    genres: movieResponse.data.genres.map(genre => genre.name).join(', '),
                    overview: movieResponse.data.overview,
                    vote: movieResponse.data.vote_average,
                    voteCount: movieResponse.data.vote_count,
                    playtime: `${Math.floor(movieResponse.data.runtime / 60)}h ${Math.floor((movieResponse.data.runtime) % 60)}m`,
                    poster: movieResponse.data.poster_path ? `https://image.tmdb.org/t/p/w500${movieResponse.data.poster_path}` : 'https://the-movie-database-application.netlify.app/assets/no_image.jpg',
                    relStatus: movieResponse.data.status,
                };
                setMovieDetails(movieItems);

                //fetch YouTube Details

                const youtubeResponse = await axios.get(youtubeAPI);
                console.log("YT: ",youtubeResponse);
                const youTubedata = youtubeResponse.data.results.map(vid => ({
                    // name:vid.name,
                    key: vid.key
                }))

                
                setYoutube(youTubedata);
                console.log("YTDATA",youTubedata);
            
                // Fetch cast details
                const castResponse = await axios.get(castAPI);
                console.log(castResponse);
                const castProfiles = castResponse.data.cast.map(actor => ({
                    name: actor.name,
                    profile: actor.profile_path ?`https://image.tmdb.org/t/p/w500${actor.profile_path}` : `https://the-movie-database-application.netlify.app/assets/no_image.jpg`,
                    id: actor.id
                }));
                setCast(castProfiles);
                console.log("Cast Profile",castProfiles);

                // Fetch recommended movies
                const recommenResponse = await axios.get(recomMovieAPI);
                const recommendations = recommenResponse.data.results.map(rec => ({
                    name: rec.title,
                    poster: rec.poster_path ? `https://image.tmdb.org/t/p/w500${rec.poster_path}` : `https://the-movie-database-application.netlify.app/assets/no_image.jpg`,
                    id: rec.id
                }));
                setRecomMovie(recommendations);

                // Fetch reviews
                const reviewResponse = await axios.get(reviewAPI);
                const reviewData = reviewResponse.data.results.map(rev => ({
                    revText: rev.content,
                    author: rev.author,
                    date: new Date(rev.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                    })
                }));
                setReview(reviewData);
            } catch (err) {
                console.log("Error:", err);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchData();
    }, [id]);


    return {movieDetails, cast , recomMovie , review , youTube, loading};


}


export default useMoviePage;