import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import {useDispatch, useSelector} from 'react-redux';
import {loginUser, setPassword, setUserName} from '../../store/login/login-slice';
import {userSelector} from '../../store/login/login-selector';

const Login:  any = () => {

    const dispatch = useDispatch()
    const user = useSelector(userSelector)

    const onUserName = (value: string) => {
        dispatch(setUserName(value))
    }

    const onPassword = (value: string) => {
        dispatch(setPassword(value))
    }

    const onSubmit = () => {
        dispatch(loginUser(true))
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>User name</label>
                        <input
                            autoFocus
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter name"
                            onChange={(e) => onUserName(e.target.value)}/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={(e) => onPassword(e.target.value)}/>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button
                            type="button"
                            className="btn btn-primary"
                            disabled={!user.userName || !user.password}
                            onClick={(e) => onSubmit()}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login