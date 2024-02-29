import React, {FC, useEffect, useState} from 'react';
import '../style.css'
import {Button, Card, Form, Modal} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../../store';
import {Filter, Movie} from '../../../types/main-types';
import {moviesSelector} from '../../../store/movie-slice/selector';
import {getMovies} from '../../../store/movie-slice/api';
import {clearFilters, handleFilterChange, selectMovie, sortMovies} from '../../../store/movie-slice/slice';

const MovieList: FC = () => {

    const dispatch = useAppDispatch();
    const moviesList: Movie[] = useSelector(moviesSelector);

    const initialFilters: Filter = {
        country: '',
        genre: '',
        actor: '',
        yearStart: 1980,
        yearEnd: new Date().getFullYear(),
        ratingStart: 0,
        ratingEnd: 10
    }

    // Filter modal
    const [show, setShow] = useState(false);
    const [filters, setFilters] = useState(initialFilters);

    const handleClear = () => {
        setFilters(initialFilters)
        setShow(false);
        dispatch(clearFilters());
    }

    const handleMovie = (movie) => {
        dispatch(selectMovie(movie))
    }

    const handleFilter = (e: any, filterName: string) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [filterName]: value,
        });
    }

    const handleSave = () => {
        dispatch(handleFilterChange(filters))
        setShow(false);
    }

    const handleChange = (id) => {
        dispatch(sortMovies(id))
    }

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    return (
        <div className="Table-content">
            <div className="Table_header">
                <h3>Available movies</h3>
                <div className="Table_toolbar">
                    {JSON.stringify(filters) !== JSON.stringify(initialFilters) && (
                        <Button onClick={() => handleClear(initialFilters)}
                                style={{height: 38}} variant="secondary">Clear Filters</Button>
                    )}
                    <Button onClick={() => setShow(true)} style={{height: 38}} variant="primary">Filters</Button>
                    <Form>
                        <Form.Select onChange={(e) => handleChange(e.target.value)} aria-label="Default select example">
                            <option>Sort by</option>
                            <option value="1">Year Ascending</option>
                            <option value="2">Year Descending</option>
                            <option value="3">Rate Ascending</option>
                            <option value="4">Rate Descending</option>
                        </Form.Select>
                    </Form>
                </div>
            </div>
            <div className="Table-data">
                {moviesList.map(movie => (
                    <Card key={movie.id} className="card_item">
                        <Card.Img variant="top" src={movie.imageUrl}/>
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text className="movie_information">
                                <span>{movie.year}</span>
                                <span>{movie.country}</span>
                                <span style={{color: '#0d6efd'}}>{movie.genres?.join(', ')}</span>
                                <span style={{marginTop: 10}}>{movie.actors?.join(', ')}</span>
                                <span className="movie_rating">{movie.rating}</span>
                            </Card.Text>
                            <Button onClick={() => handleMovie(movie)} variant="outline-success">Watch</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Filters</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*Year*/}
                    <div className="Number_range_container">
                        <Form.Label>Year</Form.Label>
                        <Form.Group className="Number_range">
                            <Form.Control
                                value={filters.yearStart}
                                onChange={(event) => handleFilter(event, 'yearStart')}
                                type="number"></Form.Control>
                            <span>-</span>
                            <Form.Control
                                value={filters.yearEnd}
                                onChange={(event) => handleFilter(event, 'yearEnd')}
                                type="number"></Form.Control>
                        </Form.Group>
                    </div>

                    {/*Country*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Country</Form.Label>
                        <Form.Control value={filters.country}
                                      onChange={(event) => handleFilter(event, 'country')}
                                      type="text"/>
                    </Form.Group>

                    {/*Rating*/}
                    <div className="Number_range_container">
                        <Form.Label>Rating</Form.Label>
                        <Form.Group className="Number_range">
                            <Form.Control
                                value={filters.ratingStart}
                                onChange={(event) => handleFilter(event, 'ratingStart')}
                                type="number"></Form.Control>
                            <span>-</span>
                            <Form.Control
                                value={filters.ratingEnd}
                                onChange={(event) => handleFilter(event, 'ratingEnd')}
                                type="number"></Form.Control>
                        </Form.Group>
                    </div>

                    {/*Genre*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Genre</Form.Label>
                        <Form.Control value={filters.genre}
                                      onChange={(event) => handleFilter(event, 'genre')}
                                      type="text"/>
                    </Form.Group>

                    {/*Actor*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Actor</Form.Label>
                        <Form.Control value={filters.actor}
                                      onChange={(event) => handleFilter(event, 'actor')}
                                      type="text"/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClear}>
                        Clear
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Set
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MovieList