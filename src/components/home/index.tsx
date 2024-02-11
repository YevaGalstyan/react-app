import React, {FC, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../store';
import {useSelector} from 'react-redux';
import {usersSelector} from '../../store/home-slice/selector';
import {User} from '../../types';
import {Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {PenFill, TrashFill} from 'react-bootstrap-icons';
import {deleteUser, getUsers} from '../../store/home-slice/api';

export const Home: FC = () => {


    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const users: User[] = useSelector(usersSelector);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const onCLick = (userId: string) => {
        navigate('/edit/' + userId);
    };

    const handleDeleteUser = (userId: string) => {
        dispatch(deleteUser(userId))
            .then(() => dispatch(getUsers()));
    };

    const handleCreateUser = () => {
        navigate('/create');
    }

    return (
        <div className="Table-container">
            <div className="Table-content">
                <h3> Users List</h3>
                <div className="Table-data">
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td onClick={() => onCLick(user.id)}><PenFill/></td>
                                <td onClick={() => handleDeleteUser(user.id)}><TrashFill/></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
                <Button variant="primary" onClick={handleCreateUser}>Create new</Button>
            </div>
        </div>

    );
};