import React, {FC} from 'react';
import './style.css'
import {Button, Form} from 'react-bootstrap';

const Admin: FC = () => {

    return (
        <div className="admin_container">
            <h5>Add new movie</h5>
            <div className="form_container">
                <Form className="admin_form">
                    {/*Title*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>

                    {/*Description*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={2}/>
                    </Form.Group>

                    {/*Year*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="number"/>
                    </Form.Group>

                    {/*Country*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>

                    {/*Rating*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="number"/>
                    </Form.Group>
                </Form>
                <Form className="admin_form">

                    {/*Genres*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Rating</Form.Label>
                        <Form.Check
                            type='checkbox'
                            id={`default-1`}
                            label={`dd`}
                        />
                    </Form.Group>

                    {/*Actors*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Actors</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>

                    {/*Image*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>

                    {/*Video URL*/}
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Video URL</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>

                    <Button variant="primary" type="button">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Admin