import React, {useEffect , useState} from 'react';
import MenuListTab from './MenuBar';
import BackDrop from './BackDrop';
import SearchMovie from './SearchMovie';
import MovieType from './MovieType';
import '../styles/movie.css';
import Footer from '../components/Footer';
import { Atom } from 'react-loading-indicators';
import useMovieIMBD from '../hooks/useMovieIMBD';

const MovieImbd = () => {

  const movieTypes = ['Trending Movies','Top-Rated Movies', 'Popular Movies', 'Upcoming Movies'];

  const { movies: trend, loading: trendLoading, error: trendError } = useMovieIMBD('now_playing');
  const { movies: toprate, loading: toprateLoading, error: toprateError } = useMovieIMBD('top_rated');
  const { movies: popular, loading: popularLoading, error: popularError } = useMovieIMBD('popular');
  const { movies: upcoming, loading: upcomingLoading, error: upcomingError } = useMovieIMBD('upcoming');

  const loading = trendLoading || toprateLoading || popularLoading || upcomingLoading; 

  if (trendError || toprateError || popularError || upcomingError) {
    return <div>Error loading data.</div>;
  }

  const movieDataMap = {

    'Trending Movies': trend,
    'Top-Rated Movies': toprate,
    'Popular Movies': popular,
    'Upcoming Movies': upcoming
  };

  return (
    <div>
        <MenuListTab/>
        <BackDrop/>
        <SearchMovie/>
        {loading ? (

            <div className='indic'> <Atom color="#3176cc" size="large" text="" textColor="#b70eb7"/></div>
        ):(

          movieTypes.map((type,index) => {

            const movies = movieDataMap[type];
            const images = movies.map(movie => movie.backdrop);
            const ids = movies.map(movie => movie.movieId);
  
            return(
                <MovieType 
                  key ={index} 
                  movieType={type} 
                  movieImages={images}
                  movieIds = {ids}
                  />
            );
          })
        )};
        <Footer/>
        
    </div>
  );
};

export default MovieImbd;
