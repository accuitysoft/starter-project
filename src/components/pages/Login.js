import React, { useState } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, Card, CardBody, CardText, CardHeader } from 'reactstrap'
import { useHistory, useLocation } from 'react-router-dom'

const Login = (props) => {
  let history = useHistory();
  let location = useLocation();

  //Note that original FS1020 course project used "email" for authentication, the req.body.email has been changed to req.body.username.
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [auth, setAuth] = useState(true)

  const loginSubmit = async event => {

    event.preventDefault()
    const response = await fetch('http://localhost:4000/auth', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    const payload = await response.json()
    if (response.status >= 400) {
      setAuth(false)
    } else {
      sessionStorage.setItem('token', payload.token)
      let { from } = location.state || { from: { pathname: "/submissions" } };
      props.setLoggedIn(true);
      history.replace(from);
    }
  }

  return (
    <section>
      <div className="login">
        
          <Card>
            <CardHeader>
              <h2>Login</h2>
            </CardHeader>
            <CardBody>
              <CardText>
                {!auth &&
                  <div className="error">
                    Invalid credentials, please try again
            </div>
                }
                <Form className="my-5" onSubmit={loginSubmit}>

                  <Col>
                    <FormGroup>
                      <Label for="usernameEntry">Username</Label>
                      <Input type="text" name="username" id="usernameEntry" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                    </FormGroup>
                  </Col>
                  <Col >
                    <FormGroup>
                      <Label for="passwordEntry">Password</Label>
                      <Input type="password" name="password" id="passwordEntry" placeholder="Valid password" onChange={e => setPassword(e.target.value)} />
                    </FormGroup>
                  </Col>
                  <Button color="success">Sign in</Button>
                </Form>
              </CardText>
            </CardBody>
          </Card>
        
      </div>
    </section>
  )
}

export default Login