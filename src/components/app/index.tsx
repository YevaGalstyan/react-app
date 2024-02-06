import React, {FC, useEffect} from 'react';
import {isAuthenticated} from '../../store/login/login-selector';
import Todo from '../todo';
import Login from '../login';
import {useDispatch, useSelector} from 'react-redux';
import {validateUser} from '../../store/login/login-slice';

;

const App: FC = () => {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector(isAuthenticated)

    useEffect(() => {
        dispatch(validateUser())
    })

    return (
        <div>
            {isLoggedIn ? <Todo/> : <Login/>}
        </div>
        // {isLoggedIn}
        // {/*<Routes>*/}
        // {/*    {isLoggedIn ? (*/}
        // {/*        <Route path="/" element={<Navigate to="/todo"/>}/>*/}
        // {/*    ) : (*/}
        // {/*        <Route path="/" element={<Navigate to="/login"/>}/>*/}
        // {/*    )}*/}
        //
        // {/*    <Route path="/todo" element={<Todo/>}/>*/}
        // {/*    <Route path="/login" element={<Login/>}/>*/}
        // {/*</Routes>*/}
    )
}

export default App;