import {createSlice} from '@reduxjs/toolkit';
import {LoginSlice} from '../../constants/user';

const initialState: LoginSlice = {
    user: {
        userName: '',
        password: ''
    },
    isAuthenticated: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserName: (initialState: LoginSlice, action) => {
            initialState.user.userName = action.payload
        },
        setPassword: (initialState: LoginSlice, action) => {
            initialState.user.password = action.payload
        },
        loginUser: (initialState: LoginSlice, action) => {
            localStorage.setItem('userName', initialState.user.userName)
            initialState.isAuthenticated = action.payload
        },
        validateUser: (initialState: LoginSlice) => {
            initialState.isAuthenticated = !!localStorage.getItem('userName')
        }
    }
})

export const {
    setUserName,
    setPassword,
    loginUser,
    validateUser
} = loginSlice.actions

export default loginSlice.reducer