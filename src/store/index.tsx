import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import movieReducer from './movie-slice/slice'

export const store = configureStore({
    reducer: {
        movie: movieReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch