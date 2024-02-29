import { createSelector } from '@reduxjs/toolkit';
import {RootState} from '../index';

export const selector = (state: RootState) => state.movie;

export const moviesSelector = createSelector(selector, (movie) => movie.movies);
export const movieSelector = createSelector(selector, (movie) => movie.movie);