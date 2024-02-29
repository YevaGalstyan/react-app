// Get users list
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Movie} from '../../types/main-types';
import {RootState} from '../index';

export const getMovies = createAsyncThunk(
    'home/getMovies',
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch('http://localhost:8080/movies');
            return await res.json();
        } catch (e) {
            return rejectWithValue('Something');
        }
    }
);

export const createMovie = createAsyncThunk(
    'home/createUser',
    async (movie: Movie, { rejectWithValue, dispatch, getState }) => {
        try {

            await dispatch(getMovies())
            const state = getState() as RootState; // Cast to RootState
            const movies = state.movie.movies;

            const lastId = movies.length > 0 ? parseInt(movies[movies.length - 1].id) : 0;
            const newId = lastId + 1;
            const newMovie = { ...movie, id: newId };

            // Create the new user
            const res = await fetch('http://localhost:8080/movies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMovie),
            });
        } catch (error) {
            return rejectWithValue('Something went wrong');
        }
    }
);