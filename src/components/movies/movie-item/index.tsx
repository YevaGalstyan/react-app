import React, {FC} from 'react';
import {Movie} from '../../../types/main-types';
import {useSelector} from 'react-redux';
import {movieSelector} from '../../../store/movie-slice/selector';
import './style.css'
import {Button} from 'react-bootstrap';
import {useAppDispatch} from '../../../store';
import {deselectMovie} from '../../../store/movie-slice/slice';

const MovieItem: FC = () => {

    const movie: Movie = useSelector(movieSelector);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(deselectMovie())
    }

    return (
        <div className="movie_card">
            <Button onClick={handleClick} variant="secondary" style={{width: 200, marginBottom: 20}}>Back to list</Button>
            <h5>{movie.title}</h5>
            <span>{movie.description}</span>
            <span>Rating: <span className="movie_rating">{movie.rating}</span></span>
            <span>Year: <span>{movie.year}</span></span>
            <span>Actors: <span>{movie.actors.join(', ')}</span></span>
            <span>Genres: <span>{movie.genres.join(', ')}</span></span>
            <video controls className="video_component" src={movie.videoUrl}></video>
        </div>
    )
}

export default MovieItem