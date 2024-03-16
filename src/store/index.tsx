import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware  from 'redux-saga'
import {rootSaga} from './sagas';
import homeReducer from './home/slice';
import {useDispatch} from 'react-redux';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        home: homeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
