import {createAction} from '@reduxjs/toolkit';
import {GET_USERS} from './types';

export const getUsers = createAction(GET_USERS)