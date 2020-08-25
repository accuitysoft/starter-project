import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faGraduationCap, faBalanceScale, faPlane, faReply, faHandshake, faWrench, faUsers } from '@fortawesome/free-solid-svg-icons'




const EditAbout = () => {

    const [experience, setExperience] = useState([])
    const [categories, setCategories] = useState([])
    const [formExp, setFormExp] = useState('')
    const [formCat, setFormCat] = useState('')
    const [submitMessage, setSubmitMessage] = useState('')
    const [experienceID, setExperienceID] = useState('')
    const [editExp, setEditExp] = useState('')
    const [editCat, setEditCat] = useState('')
    const [editMessage, setEditMessage] = useState('')
    const token = sessionStorage.getItem('token')

    useEffect(() => {
        const getCategories = async () => {
            const catResponse = await fetch('http://localhost:4000/experience/categories', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const data = await catResponse.json()
            console.log(data)
            setCategories(data)
        }

        const getExperience = async () => {
            const expResponse = await fetch('http://localhost:4000/experience', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const expData = await expResponse.json()
            //console.log(expData)
            setExperience(expData)
        }


        getCategories();
        getExperience();

    }, [])

    const deleteButton = async (e) => {

        let response = await fetch(`http://localhost:4000/experience/${e.target.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
        'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const payload = await response.json()
        if (response.status == 201) {
            setExperience(experience.filter(item => item.experience !== payload[0].experience))
        }

    }

    const addExperience = async (e) => {
        e.preventDefault();
        console.log(formExp)
        console.log(formCat)
        const response = await fetch('http://localhost:4000/experience', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
        'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ formExp, formCat })
        })
        const payload = await response.json()
        console.log(payload)

        if (response.status == 201) {
            setSubmitMessage('New entry added')
            setExperience(experience => [...experience, payload])
        } else {
            setSubmitMessage('Error with entry - Entry not added')
        }
        setFormCat('')
        setFormExp('')
    }

    const updateEdit = async (e) => {
        e.preventDefault();
        let response = await fetch(`http://localhost:4000/experience/search/${e.target.id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const payload = await response.json()
        setExperienceID(payload[0].experienceID)
        setEditCat(payload[0].category)
        setEditExp(payload[0].experience)
    }

    const editExperience = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/experience', {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
        'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ experienceID, editCat, editExp })
        })
        if(response.status == 201){
            let temp = experience
            temp.forEach(item => {
                if(item.experienceID == experienceID){
                    item.category = editCat
                    item.experience = editExp
                }
            })
            setExperience(temp)
            setEditMessage('Successfully Modified')
        } else {
            setEditMessage('Modification Error')
        }
    }

    return (
        <section>
            <div className="about-me-background">
                <Container>
                    <h1>Edit About Page</h1>
                    <h2 className="font-weight-bold">Add Experience</h2>
                    <Form onSubmit={addExperience}>
                        <FormGroup>
                            <Label for="category">Category</Label>
                            <Input type="text" name="category" id="category" placeholder="Enter category" onChange={e => setFormCat(e.target.value)} value={formCat} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="experience">Experience</Label>
                            <Input type="text" name="experience" id="experience" placeholder="Enter experience" onChange={e => setFormExp(e.target.value)} value={formExp} />
                        </FormGroup>
                        <Button>Submit</Button>
                        {submitMessage !== '' &&
                            <div className="submit-message">{submitMessage}</div>
                        }
                    </Form>
                    <div className="about-me-page">
                        <Row>
                            <Col lg="5" >
                                {
                                    categories.length > 0 &&
                                    categories.map(catName => (
                                        <div key={catName.category}>
                                            <h2 className="font-weight-bold" >{catName.category}</h2>

                                            {experience.map(expItem => (
                                                <div className="experience--div" key={expItem.experienceID}>
                                                    {catName.category === expItem.category && <span id={expItem.experienceID} className="experience-span" onClick={updateEdit}>{expItem.experience}<div className="deleteExperienceButton" id={expItem.experienceID} onClick={deleteButton} title="delete">X</div></span>}
                                                </div>
                                            ))}
                                        </div>
                                    ))
                                }

                            </Col>
                            <Col lg="5">
                                <h2>Edit</h2>
                            Click on experience to edit. Click on x to delete.
                            <Form onSubmit={editExperience}>
                                    <FormGroup>
                                        <Label for="experienceID">ID</Label>
                                        <Input className="read-only" type="text" name="experienceID" id="experienceID" value={experienceID} readOnly />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="category">Category</Label>
                                        <Input type="text" name="category" id="category" placeholder="Enter category" onChange={e => setEditCat(e.target.value)} value={editCat} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="experience">Experience</Label>
                                        <Input type="text" name="experience" id="experience" placeholder="Enter experience" onChange={e => setEditExp(e.target.value)} value={editExp} />
                                    </FormGroup>
                                    <Button>Submit</Button>
                                    {editMessage !== '' &&
                                        <div className="submit-message">{editMessage}</div>
                                    }
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </section>


    )
}

export default EditAbout