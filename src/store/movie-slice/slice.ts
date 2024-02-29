import {createSlice} from '@reduxjs/toolkit';
import {AppState, Filter} from '../../types/main-types';
import {getMovies} from './api';

const initialState: AppState = {
    defaultMovies: [],
    movies: [],
    movie: null,
};

const appSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        selectMovie: (state, action) => {
            state.movie = action.payload
        },
        deselectMovie: (state) => {
            state.movie = null
        },
        sortMovies: (state, action) => {
            switch (action.payload) {
                case '1':
                    state.movies = state.movies.sort((a, b) => a.year - b.year);
                    break;
                case '2':
                    state.movies = state.movies.sort((a, b) => b.year - a.year);
                    break;
                case '3':
                    state.movies = state.movies.sort((a, b) => a.rating - b.rating);
                    break;
                case '4':
                    state.movies = state.movies.sort((a, b) => b.rating - a.rating);
                    break;
                default:
                    state.movies = state.defaultMovies
                    break;
            }
        },
        handleFilterChange: (state, action)=>  {
            state.movies = state.defaultMovies
            state.movies = state.movies.filter((movie: Filter) => {
                const countryMatch = action.payload.country === '' || movie.country === action.payload.country;
                const genreMatch = action.payload.genre === '' || movie.genres.includes(action.payload.genre);
                const actorMatch = action.payload.actor === '' || movie.actors.includes(action.payload.actor);
                const yearStartMatch = action.payload.yearStart === 0 || movie.year >= action.payload.yearStart;
                const yearEndMatch = action.payload.yearEnd === 0 || movie.year <= action.payload.yearEnd;
                const ratingStartMatch = action.payload.ratingStart === 0 || movie.rating >= action.payload.ratingStart;
                const ratingEndMatch = action.payload.ratingEnd === 0 || movie.rating <= action.payload.ratingEnd;
                return countryMatch && genreMatch && actorMatch && yearStartMatch && yearEndMatch && ratingStartMatch && ratingEndMatch;
            });
        },
        clearFilters: (state) => {
            state.movies = state.defaultMovies
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
            state.defaultMovies = action.payload
        });
    }
});

export const {
    sortMovies,
    deselectMovie,
    selectMovie,
    handleFilterChange,
    clearFilters,
} = appSlice.actions;

export default appSlice.reducer;