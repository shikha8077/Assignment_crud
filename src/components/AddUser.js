import React,{useState} from 'react';
import {Form,Button,Row,Col} from 'react-bootstrap'
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';



function AddUser() {
    const [name, setName] = useState('');
    const[email, setEmail] = useState('')
    const[gender, setGender] = useState('')
    const[status, setStatus] = useState('')

    const history = useHistory()

    const updateGender = (e) => {
        if(e.target.value === 'male'){
            setGender('male')
        }else{
            setGender('female')
        }
    }

    const updateStatus = (e) => {
        if(e.target.value === 'active'){
            setStatus('active')
        }else{
            setStatus('inactive')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            name,
            email,
            gender,
            status
        }
        console.log(data, '===')
        axios.post('http://localhost:8000/users', data)
            .then(response => {
                console.log("Status: ", response.status);
                history.push("/home")
                console.log("Data: ", response.data);
            }).catch(error => {
                console.error('Something went wrong!', error);
            });

    }

    return (
        <div className="container">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <Form onSubmit={(e) => handleSubmit(e)}>
               
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name:</Form.Label>

                <Form.Control type="Name" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <Form.Label>Email address:</Form.Label>

                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />

               
            </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                                Gender
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                            type="radio"
                            label="Male"
                            name="gender"
                            value="male"
                            id="formHorizontalRadios1"
                            onChange={(e)=> updateGender(e)}
                            />
                            <Form.Check
                            type="radio"
                            label="Female"
                            name="gender"
                            value="female"
                            id="formHorizontalRadios2"
                            onChange={(e)=> updateGender(e)}

                            />
                        
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Status
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Active"
          name="status"
          value='active'
          id="formHorizontalRadios3"
          onChange={(e)=> updateStatus(e)}
        />
        <Form.Check
          type="radio"
          label="InActive"
          name="status"
          value='inactive'
          id="formHorizontalRadios4"
          onChange={(e)=> updateStatus(e)}
        />
       
      </Col>
    </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default AddUser
