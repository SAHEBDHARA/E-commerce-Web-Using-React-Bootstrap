import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";

const Register = () => {

    const [state, setState] = useState({
        user: {
            username: '',
            password: '',
            email: ''

        }
    })

    const updatedInput =(e)=>{
        setState({
            ...state,
            user:{
                ...state.user, 
                [e.target.name] : e.target.value
            }
        })
    }

    const registered =()=>{
        console.log(state)
    }


  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col md={3}>
            <Card className="shadow-lg">
              <Card.Header className="p-3" style={{ background: "#FFC107" }}>
                <h1>Register</h1>
              </Card.Header>
              <Card.Body style={{backgroundColor: '#FFE8A9'}}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control name="username" onChange={updatedInput} type="text" placeholder="username"/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control name="email" onChange={updatedInput} type="email" placeholder="email"/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control name="password" onChange={updatedInput} type="password" placeholder="password"/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Button onClick={registered} variant="warning">Submit</Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;

