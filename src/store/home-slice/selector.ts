import { createSelector } from '@reduxjs/toolkit';
import {RootState} from '../index';

export const selector = (state: RootState) => state.home;

export const usersSelector = createSelector(selector, (home) => home.users);
export const userSelector = createSelector(selector, (home) => home.user);
