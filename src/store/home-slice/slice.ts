import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../types';
import {getUser, getUsers} from './api';

type AppState = {
    users: User[];
    user: User | null
}

const initialState: AppState = {
    users: [],
    user: null
};

const appSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        editUserName: (state, action) => {
            if(state.user) {
                state.user.name = action.payload
            }
        },
        editUserAge: (state, action) => {
            if(state.user) {
                state.user.age = action.payload
            }
        },
        emptyUser: (state) => {
            state.user = {
                name: '',
                id: '0',
                age: null
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload;
        });
    }
});

export const {
    emptyUser,
    editUserName,
    editUserAge
} = appSlice.actions;

export default appSlice.reducer;