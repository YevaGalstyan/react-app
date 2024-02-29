import React, {FC, useState} from 'react';
import './style.css'
import {Button, Form} from 'react-bootstrap';
import {Movie, movieGenres} from '../../types/main-types';
import {useAppDispatch} from '../../store';
import {createMovie, getMovies} from '../../store/movie-slice/api';
import {PlusCircle} from 'react-bootstrap-icons';

const Admin: FC = ({changeTab}) => {
    const possibleGenres = movieGenres
    const dispatch = useAppDispatch();

    const initialState: Movie = {
        id: 0,
        title: '',
        description: '',
        year: new Date().getFullYear(),
        country: '',
        rating: 0,
        genres: [],
        actors: [],
        imageUrl: '',
        videoUrl: ''
    }

    const [movie, setMovie] = useState(initialState);
    const [actorName, setActorName] = useState('');

    const handleMovieChange = (e: any, key: string) => {
        const value = e.target.value;
        setMovie({
            ...movie,
            [key]: value,
        });
    }

    const handleAddActor = () => {
        if (actorName.trim() !== '' && !movie.actors.includes(actorName.trim())) {
            setMovie({
                ...movie,
                actors: [...movie.actors, actorName.trim()],
            });
        }
        setActorName('');
    };

    const addGenre = (genre: string, isChecked: boolean) => {
        if (isChecked) {
            if (!movie.genres.includes(genre)) {
                setMovie({
                    ...movie,
                    genres: [...movie.genres, genre],
                });
            }
        } else {
            if (movie.genres.includes(genre)) {
                setMovie({
                    ...movie,
                    genres: movie.genres.filter(g => g !== genre),
                });
            }
        }
    }

    const addMovie = () => {
        dispatch(createMovie(movie)).then(() => {
            dispatch(getMovies());
            changeTab('movies');
            setMovie(initialState);
            setActorName('')
        })
    }

    const isFormFilled = () => {
        for (const key in movie) {
            if (movie.hasOwnProperty(key)) {
                const value = movie[key];
                if (typeof value === 'string' && value.trim() === '') {
                    return false;
                } else if (Array.isArray(value) && value.length === 0) {
                    return false;
                }
            }
        }
        return true;
    };

    return (
        <div className="admin_container">
            <h5>Add new movie</h5>
            <div className="form_container">
                <Form className="admin_form">
                    {/*Title*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={movie.title}
                                      onChange={(event) => handleMovieChange(event, 'title')}
                                      type="text"/>
                    </Form.Group>

                    {/*Description*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={movie.description}
                                      onChange={(event) => handleMovieChange(event, 'description')}
                                      as="textarea" rows={2}/>
                    </Form.Group>

                    {/*Year*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="number"
                                      value={movie.year}
                                      onChange={(event) => handleMovieChange(event, 'year')}/>
                    </Form.Group>

                    {/*Country*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text"
                                      value={movie.country}
                                      onChange={(event) => handleMovieChange(event, 'country')}/>
                    </Form.Group>

                    {/*Rating*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="number"
                                      value={movie.rating}
                                      onChange={(event) => handleMovieChange(event, 'rating')}/>
                    </Form.Group>

                    {/*Actors*/}
                    <div>
                        <Form.Group className="mb-3" controlId="actorInput">
                            <Form.Label>Actor's name</Form.Label>
                            <div className="actor_group">
                                <Form.Control
                                    type="text"
                                    value={actorName}
                                    onChange={(e) => setActorName(e.target.value)}/>
                                <PlusCircle className="Plus_icon" onClick={handleAddActor}/>
                            </div>
                        </Form.Group>

                        {movie.actors.length > 0 && (
                            <span key={movie.actors}>{movie.actors.join(', ')}</span>
                        )}
                    </div>
                </Form>

                <Form className="admin_form">

                    {/*Genres*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Rating</Form.Label>
                        <div className="genres_container">
                            {possibleGenres.map(genre => (
                                <Form.Check
                                    key={genre}
                                    type="checkbox"
                                    id={`genre-${genre}`}
                                    label={genre}
                                    checked={movie.genres.includes(genre)}
                                    onChange={(e) => addGenre(genre, e.target.checked)}
                                />
                            ))}
                        </div>
                    </Form.Group>

                    {/*Image*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type="text"
                                      value={movie.imageUrl}
                                      onChange={(event) => handleMovieChange(event, 'imageUrl')}/>
                    </Form.Group>

                    {/*Video URL*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Video URL</Form.Label>
                        <Form.Control type="text"
                                      value={movie.videoUrl}
                                      onChange={(event) => handleMovieChange(event, 'videoUrl')}/>
                    </Form.Group>

                    <Button variant="primary"
                            onClick={addMovie}
                            type="button" disabled={!isFormFilled()}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Admin