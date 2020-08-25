import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

const Blog = () => {
    const [blog, setBlog] = useState([])
    const [blogID, setBlogID] = useState('')
    const [date, setDate] = useState('')
    const [picture, setPicture] = useState('')
    const [cardTitle, setCardTitle] = useState('')
    const [cardSummary, setCardSummary] = useState('')
    const [blogTitle, setBlogTitle] = useState('')
    const [blogText, setBlogText] = useState('')
    const [message, setMessage] = useState('')
    const token = sessionStorage.getItem('token')

    useEffect(() => {
        const getBlog = async () => {
            const response = await fetch('http://localhost:4000/blog/summary', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setBlog(data)
        }
        getBlog();
    }, [])

    const selectBlog = async (e) => {
        setMessage('')
        const response = await fetch(`http://localhost:4000/blog/page/${e.target.id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 201) {
            const data = await response.json()
            setBlogID(data[0].blogID)
            let adate = new Date(data[0].date)
            let year = adate.getFullYear();
            let month = adate.getMonth() + 1;
            month < 10 ? month = `0${month}` : month = `${month}`
            let day = adate.getDate();
            day < 10 ? day = `0${day}` : day = `${day}`
            let dayFormat = `${year}-${month}-${day}`
            setDate(dayFormat)
            setPicture(data[0].picture)
            setCardTitle(data[0].cardTitle)
            setCardSummary(data[0].cardSummary)
            setBlogTitle(data[0].blogTitle)
            setBlogText(data[0].blogText)
        }
        
    }

    const deletePost = async (e) => {
        const response = await fetch(`http://localhost:4000/blog/${blogID}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
        'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        if (response.status === 201) {
            setBlog(blog.filter(blogPost => blogPost.blogID !== blogID))
            setBlogID('')
            setDate('')
            setPicture('')
            setCardTitle('')
            setCardSummary('')
            setBlogTitle('')
            setBlogText('')
            setMessage('Post has been deleted')
        }
    }

    const submitPost = async (e) => {
        e.preventDefault();
        if (blogID !== '') {
            const response = await fetch('http://localhost:4000/blog', {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ blogID, date, cardTitle, cardSummary, blogTitle, blogText, picture })
            })
            if (response.status == 201) {
                let temp = blog
                temp.forEach(item => {
                    if(item.blogID == blogID){
                        item.cardTitle = cardTitle
                }
                setBlog(temp)
            })
                setBlogID('')
                setDate('')
                setPicture('')
                setCardTitle('')
                setCardSummary('')
                setBlogTitle('')
                setBlogText('')
                setMessage('Post has been updated')
            } else {
                setMessage('Error with updating post')
            }
        } else {
            let fixDate = new Date(date)
            setDate(fixDate)
            console.log(date)
            const response = await fetch('http://localhost:4000/blog', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
        'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ blogID, date, cardTitle, cardSummary, blogTitle, blogText, picture })
            })

            if (response.status == 201) {
                const payload = await response.json()
                console.log(payload)
                let newBlog = {date: payload.date, blogID: payload.blogID, picture: payload.picture, cardTitle: payload.cardTitle, cardSummary: payload.cardSummary}
                setBlog(blog=> [...blog, newBlog])
                setBlogID('')
                setDate('')
                setPicture('')
                setCardTitle('')
                setCardSummary('')
                setBlogTitle('')
                setBlogText('')
                
                setMessage('New blog posted')
            } else {
                setMessage('Error with posting blog')
            }
        }
    }

    return (
        <section>
            <div className="about-me-background">
                <Container>
                    <Row>
                        <Col lg="5">
                            <h2>Current Posts</h2>
                            {
                                blog &&
                                blog.map(blogPost =>
                                    <div className="blog-post-display" onClick={selectBlog} id={blogPost.blogID}>
                                        {blogPost.cardTitle}
                                    </div>
                                )
                            }
                        </Col>
                        <Col lg="5">
                            <Form onSubmit={submitPost}>
                                <FormGroup>
                                    <Label for="blogID">Blog ID</Label>
                                    <Input type="text" name="blogID" id="blogID" value={blogID} readOnly />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="date">Date</Label>
                                    <Input type="date" name="date" id="date" onChange={e => setDate(e.target.value)} value={date} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="picture">Picture (feature not yet available)</Label>
                                    {picture && <img src={picture} height="300" width="450" />}
                                    <Input type="file" name="picture" id="picture" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="cardTitle">Card Title</Label>
                                    <Input type="text" name="cardTitle" id="cardTitle" placeholder="Enter Summary Page Title" onChange={e => setCardTitle(e.target.value)} value={cardTitle} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="cardSummary">Card Summary</Label>
                                    <Input type="text" name="cardSummary" id="cardSummary" placeholder="Enter Article Summary" onChange={e => setCardSummary(e.target.value)} value={cardSummary} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="blogTitle">Blog Title</Label>
                                    <Input type="text" name="blogTitle" id="blogTitle" placeholder="Enter Blog Title" onChange={e => setBlogTitle(e.target.value)} value={blogTitle} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="blogText">Blog Text</Label>
                                    <Input type="textarea" name="blogText" id="blogText" rows="5" placeholder="Enter Blog Text" onChange={e => setBlogText(e.target.value)} value={blogText} />
                                </FormGroup>
                                <Button>Submit</Button>
                                {blogID && <button className="deleteButton" type="button" onClick={deletePost}>Delete</button>}
                                {message &&
                                    <div className="submit-message"> {message}
                                    </div>}
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Blog