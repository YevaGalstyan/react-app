import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import homeReducer from './home-slice/slice';

export const store = configureStore({
    reducer: {
        home: homeReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
