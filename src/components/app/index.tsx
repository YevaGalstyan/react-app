import React, {FC, useEffect} from 'react';
import {useAppDispatch} from '../../store';
import {getUsers} from '../../store/sagas/home/actions';


const App: FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUsers())
    }, []);

    return (
        <div></div>
    )
}

export default App;