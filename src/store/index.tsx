import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './login/login-slice'
import todoSlice from './todo-slice/todo-slice';
import {useDispatch} from 'react-redux';
export const store = configureStore({
    reducer: {
        login: loginReducer,
        todo: todoSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
