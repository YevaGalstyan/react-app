import {createAsyncThunk} from '@reduxjs/toolkit';
import {User} from '../../types';
import {useSelector} from 'react-redux';
import {usersSelector} from './selector';
import {RootState} from '../index';

// Get users list
export const getUsers = createAsyncThunk(
    'home/getUsers',
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch(' http://localhost:8080/users');
            return await res.json();
        } catch (e) {
            return rejectWithValue('Something');
        }
    }
);

// Get specific user by id
export const getUser = createAsyncThunk(
    'home/getUser',
    async (userId: string, { rejectWithValue }) => {
        try {
            const res = await fetch(`http://localhost:8080/users/${userId}`, {
                method: 'GET'
            });
            return await res.json();
        } catch (e) {
            return rejectWithValue('Something');
        }
    }
);

// Delete User
export const deleteUser = createAsyncThunk(
    'home/deleteUser',
    async (userId: string, { rejectWithValue }) => {
        try {
            const res = await fetch(`http://localhost:8080/users/${userId}`, {
                method: 'DELETE',
            });
        } catch (error) {
            return rejectWithValue('Something went wrong');
        }
    }
);

// Edit User
export const editUser = createAsyncThunk(
    'home/editUser',
    async (user: User, { rejectWithValue }) => {
        try {
            const res = await fetch(`http://localhost:8080/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
        } catch (error) {
            return rejectWithValue('Something went wrong');
        }
    }
);

// Create User
export const createUser = createAsyncThunk(
    'home/createUser',
    async (user: User, { rejectWithValue, dispatch, getState }) => {
        try {

            await dispatch(getUsers())
            const state = getState() as RootState; // Cast to RootState
            const users = state.home.users;

            const lastId = users.length > 0 ? parseInt(users[users.length - 1].id) : 0;
            const newId = lastId + 1;
            const newUser = { ...user, id: newId.toString() };

            // Create the new user
            const res = await fetch('http://localhost:8080/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });
        } catch (error) {
            return rejectWithValue('Something went wrong');
        }
    }
);