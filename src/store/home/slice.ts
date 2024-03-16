import {Users} from '../../types';
import {createSlice} from '@reduxjs/toolkit';

type AppStat = {
    users: Users[]
}

const initialState = {
    users: []
}

const appSlice = createSlice({
    name: 'home',
    initialState: initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        }
    }
})

export const {
    setUsers
} = appSlice.actions;

export default appSlice.reducer;