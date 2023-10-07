import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { usePrompt } from "use-prompt"; // Import the usePrompt hook

const Register = () => {
  const [state, setState] = useState({
    user: {
      username: "",
      password: "",
      email: "",
    },
  });

  const [isEntering, setIsEntering] = useState(false);

  const updatedInput = (e) => {
    setState({
      ...state,
      user: {
        ...state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  const registered = () => {
    console.log(state);
  };

  const onFocusHandler = () => {
    setIsEntering(true);
  };

  // Use the usePrompt hook
  usePrompt(
    isEntering ,
    "Are you sure you want to leave?"
  );

  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col md={3}>
            <Card className="shadow-lg">
              <Card.Header
                className="p-3"
                style={{ background: "#FFC107" }}
              >
                <h1>Register</h1>
              </Card.Header>
              <Card.Body style={{ backgroundColor: "#FFE8A9" }}>
                <Form onFocus={onFocusHandler}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="username"
                      onChange={updatedInput}
                      type="text"
                      placeholder="username"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="email"
                      onChange={updatedInput}
                      type="email"
                      placeholder="email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="password"
                      onChange={updatedInput}
                      type="password"
                      placeholder="password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Button onClick={registered} variant="warning">
                      Submit
                    </Button>
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
