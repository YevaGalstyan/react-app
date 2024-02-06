import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../index';

const loginSelector = (state: RootState) => state.login

export const userSelector = createSelector(loginSelector, (login) => login.user)

export const isAuthenticated = createSelector(loginSelector, (login) => login.isAuthenticated)