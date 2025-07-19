import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import '../../../App.css';

function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [postEmployee, setPostEmployee] = useState({
        name: '',
        email: '',
        department: ''
    });

    useEffect(() => {
        fetch(`http://localhost:8080/employees/${id}`)
            .then(response => response.json())
            .then(data => setPostEmployee(data))
            .catch(error => console.error('Error fetching employee:', error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostEmployee(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/employees/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postEmployee)
            });

            if (response.ok) {
                navigate('/employee', {
                    state: {
                        toast: {
                            message: "Employee updated successfully!",
                            variant: "success",
                            isSuccess: true,
                        }
                    }
                });
            } else {
                console.error("Failed to update employee");
                navigate('/employee', {
                    state: {
                        toast: {
                            message: "Employee not updated!",
                            variant: "danger",
                            isSuccess: false,
                        }
                    }
                });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleClose = () => {
        navigate('/');
    };

    return (
        <div className="container mt-5 d-flex flex-column align-items-center justify-content-center">
            <h4 className="text-center mb-5">Update Employee</h4>
            <Form onSubmit={handleSubmit} className="form p-4 rounded shadow">
                <Form.Group controlId="formName" className='mb-3'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={postEmployee.name}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formEmail" className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={postEmployee.email}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formDepartment" className='mb-3'>
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                        type="text"
                        name="department"
                        placeholder="Enter department"
                        value={postEmployee.department}
                        onChange={handleChange}
                    />
                </Form.Group>

                <div className="d-flex justify-content-end gap-3">
                    <Button variant="primary" type="submit" className="mt-3">
                        Submit
                    </Button>
                    <Button variant="secondary" className="ms-2 mt-3" onClick={handleClose}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default Edit;
