import React, {FC, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import {Form, ListGroup} from 'react-bootstrap';
import {useAppDispatch} from '../../store';
import {fetchData} from '../../store/todo-slice/todo-slice';
import {useDispatch, useSelector} from 'react-redux';
import {listSelector} from '../../store/todo-slice/todo-selector';
import {userSelector} from '../../store/login/login-selector';

const Todo: FC = () => {

    const listDispatch = useAppDispatch();
    const list = useSelector(listSelector)

    useEffect(() => {
        listDispatch(fetchData());
    }, []);

    return (
        <div className="To-do-list">
            <div className="To-do-list-container">
                <h2>To-do list</h2>
                <ListGroup className="List-group_container">
                    {list.map((item, index) => (
                        <ListGroup.Item key={index}>
                            <Form>
                                <Form.Check
                                    type="checkbox"
                                    id={`checkbox-${index}`}>
                                    <Form.Check.Input type="checkbox" defaultChecked={item.completed}/>
                                    <Form.Check.Label>
                                        <h5>{item.title}</h5>
                                    </Form.Check.Label>
                                </Form.Check>
                            </Form>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        </div>

    )
}

export default Todo