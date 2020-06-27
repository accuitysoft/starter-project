import React, { useState } from 'react'
import { Form, FormGroup, Col, Input, Label, Button, Container } from 'reactstrap'



const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [content, setContent] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const formSubmit = async event => {
        var responseMessage = ""
        event.preventDefault()

        // Clears any existing message (if the form submitted twice)
        setSuccessMessage("");
        setErrorMessage("");

        // Post data
        const response = await fetch('http://localhost:4000/contact_form/entries', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phoneNumber, content })
        })
        const payload = await response.json()

        // Depending on response, send message
        if (response.status >= 400) {
            responseMessage = `Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`
            setErrorMessage(responseMessage)
        } else {
            responseMessage = `Your message has been submitted.`
            setSuccessMessage(responseMessage)
            // Clears content on success
            setName("");
            setEmail("");
            setPhoneNumber("")
            setContent("")
        }
    }

    return (
        <section>
            <div className="contact">
                <Container>
                    <h1>Contact Me</h1>
                    <div className="success">{successMessage}</div>
                    <div className="error">{errorMessage}</div>
                    <Form className="my-5" onSubmit={formSubmit}>
                        <FormGroup row>
                            <Label for="emailEntry" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="emailEntry" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="phoneEntry" sm={2}>Phone Number</Label>
                            <Col sm={10}>
                                <Input type="phone" name="phone" id="phoneEntry" placeholder="Phone number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="nameEntry" sm={2}>Full Name</Label>
                            <Col sm={10}>
                                <Input type="name" name="name" id="nameEntry" placeholder="Enter your full name" required value={name} onChange={e => setName(e.target.value)} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="messageEntry" sm={2}>Message</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="text" id="messageEntry" required value={content} onChange={e => setContent(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button color="success" type="submit">Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Container>
            </div>
        </section>
    )
}

export default Contact