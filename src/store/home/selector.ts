import {RootState} from '../index';
import {createSelector} from '@reduxjs/toolkit';

export const selector = (state: RootState) => state.home;
export const usersSelector = createSelector(selector, (home) => home.users);
