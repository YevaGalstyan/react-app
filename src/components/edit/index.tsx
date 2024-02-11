import React, {FC, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {useAppDispatch} from '../../store';
import {useNavigate, useParams} from 'react-router-dom';
import {User} from '../../types';
import {useSelector} from 'react-redux';
import {userSelector} from '../../store/home-slice/selector';
import {createUser, editUser, getUser} from '../../store/home-slice/api';
import {editUserAge, editUserName, emptyUser} from '../../store/home-slice/slice';

export const Edit: FC = () => {

    const dispatch = useAppDispatch();
    const paramName = useParams();
    const user: User | null = useSelector(userSelector);
    const navigate = useNavigate();


    useEffect(() => {
        if (!paramName?.userId) {
            dispatch(emptyUser())
            return
        }

        dispatch(getUser(paramName?.userId));
    }, [paramName]);

    const handleEditUser = (user: User | null) => {
        if (!user) {
            return
        }

        dispatch(editUser(user))
            .then(() => navigate('/'))
    };

    const handleCreateUser = (user: User | null) => {
        if (!user) {
            return
        }

        dispatch(createUser(user))
            .then(() => navigate('/'))
    };

    const handleNameChange = (e: any) => {
        dispatch(editUserName(e.target.value))
    };

    const handleAgeChange = (e: any) => {
        dispatch(editUserAge(e.target.value))
    };

    const handleBackNavigate = () => {
        navigate('/');
    }

    return (
        <div className="Edit-form">
            <div className="Edit-form-container">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>User Name</Form.Label>
                        {paramName?.userId ?

                            // Edit user
                            <Form.Control type="text"
                                          placeholder="Enter user name"

                                          value={user?.name || ''}
                                          onChange={handleNameChange}/>

                            :

                            // Create user
                            <Form.Control type="text"
                                          placeholder="Enter user name"
                                          onChange={handleNameChange}/>

                        }

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label>Age</Form.Label>
                        {paramName?.userId ?
                            // Edit user
                            <Form.Control type="text"
                                          placeholder="Enter age"

                                          value={user?.age || ''}
                                          onChange={handleAgeChange}/>

                            :

                            // Create user
                            <Form.Control type="text"
                                          placeholder="Enter age"
                                          onChange={handleAgeChange}/>

                        }
                    </Form.Group>

                    <Button onClick={handleBackNavigate} variant="secondary" type="button">
                        Back
                    </Button>{' '}

                    {paramName?.userId ?
                        <Button onClick={() => handleEditUser(user)} variant="primary" type="button">
                            Edit
                        </Button>
                        :
                        <Button onClick={() => handleCreateUser(user)} variant="primary" type="button">
                            Create
                        </Button>
                    }
                </Form>
            </div>
        </div>
    );
};

export default Edit