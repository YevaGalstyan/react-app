import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../index';

const todoSelector = (state: RootState) => state.todo

export const listSelector = createSelector(todoSelector, (todo) => todo.list)
