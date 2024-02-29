import React, {FC} from 'react';
import './style.css'
import MovieList from './movie-list';
import {Movie} from '../../types/main-types';
import {useSelector} from 'react-redux';
import {movieSelector} from '../../store/movie-slice/selector';
import MovieItem from './movie-item';

const Movies: FC = () => {

    const movie: Movie = useSelector(movieSelector);

    return (
        <div className="movies_container">
            {movie ? <MovieItem></MovieItem> : <MovieList></MovieList>}
        </div>
    )
}

export default Movies