import React, { useState } from 'react'
import { Container, Button, Form, FormGroup, Label, Col, Input } from 'reactstrap'



const Users = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const createUser = async event => {

        // reset error message if displayed
        setErrorMessage("");
        setSuccessMessage("");

        // create response message
        let responseMessage = ""
        event.preventDefault()

        // post name, password and email to server
        const response = await fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, password, email })
        })
        const payload = await response.json();
        if (response.status >= 400) {
            responseMessage = `Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`
            setErrorMessage(responseMessage)
        } else {
            responseMessage = `User Created.`;
            setSuccessMessage(responseMessage)
            // Clears content on success
            setName("");
            setEmail("");
            setPassword("");

        }
    }



    return (
        <section>
            <div className="createUser">
                <Container>
                    <h2>Create User</h2>
                    <div className="success">{successMessage}</div>
                    <div className="error">{errorMessage}</div>
                    <Form className="my-5" onSubmit={createUser}>
                        <FormGroup row>
                            <Label for="nameEntry" sm={2}>Full Name</Label>
                            <Col sm={10}>
                                <Input type="name" name="name" id="nameEntry" placeholder="Enter user's full name" required value={name} onChange={e => setName(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="emailEntry" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="emailEntry" placeholder="User Email" required value={email} onChange={e => setEmail(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input type="password" name="password" id="password" placeholder="User Password" value={password} onChange={e => setPassword(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <Button color="success" type="submit">Submit</Button>
                    </Form>
                </Container>
            </div>
        </section>
    )
}

export default Users