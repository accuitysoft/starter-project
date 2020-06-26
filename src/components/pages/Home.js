import React from 'react'
import { Container, Row, Col, Button, CardBody, CardText, Card, CardDeck, CardTitle } from 'reactstrap'

const Home = () => {
    return (
        <section>
            
            <div className="home-header-background">
                <Container>
                    <Row >
                        <Col lg="5" >
                            <div className="home-header">
                                <h1 className="font-weight-bold">Shane Lee</h1>
                                <h6>CPA, CA</h6>
                                <p>An Accountant With A Focus On Business Process, Data Analytics and Automation.</p>
                                <div className="button">
                                <Row>
                                <form action="/contact/"><Button color="primary">Contact Shane </Button></form><form action="/blog/"><Button color="primary">Read His Blog </Button></form>
                                </Row>
                                </div>
                            </div>
                        </Col>
                        <Col lg="7">
                            <img className="img-fluid rounded mb-lg-0 home-image" src="home-image.png" alt="" />
                        </Col>

                    </Row>
                </Container>
            </div>
            <div className="about-me-background">
                <Container>
                    <div className="about-me">
                        <h2>About Me</h2>
                        <p>I believe the future of our profession will require us to have a deeper understanding of the technologies available to businesses. Understanding, interpreting, analyzing and presenting data will become a huge part of our every day roles while many of our current day-to-day tasks get automated.</p>
                        <p>As a Vice President of Finance of a construction company, I have used a combination of operational and financial data to drive many of the business process changes. Taking concepts from The Lean Startup, our team actively monitors business decisions, reiterating and refining processes based on data.</p>
                        <div className="button">
                            <form action="/about/">
                                <Button color="primary">Learn More</Button>
                            </form>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="blog-post-background">
                <Container>
                    <div className="blog-post">
                        <h2>Lastest Blog Posts</h2>
                        <CardDeck>
                            <Card>
                                <img width="100%" src="/img/data-validation.png" alt="data validation"/>
                                <CardBody>
                                    <CardTitle>Does your business have processes for data validation?</CardTitle>
                                    <CardText>
                                        While businesses understand the value of tracking data, many have yet to implement controls that validate them. As a result, the data obtained does not provide accurate information. 
                                        <a href="/blogpost/"><span></span></a>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <img width="100%" src="/img/connecting-data.jpg" alt="connecting data"/>
                                <CardBody>
                                <CardTitle>Connecting operational and financial data to identify process weaknesses</CardTitle>
                                    <CardText>
                                        The traditional form of comparing financial data month over month has been the norm over the years. However, recent technologies in data analytics allows us to connect data from multiple sources to gain valuable insights.
                                        <a href="/blogpost/"><span></span></a>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card>
                            <img width="100%" src="/img/corporate-culture.jpg" alt="corporate culture"/>
                                
                                <CardBody>
                                <CardTitle>Corporate Culture Change - Implementing Data Collection Processes</CardTitle>
                                    <CardText>
                                        Process changes are inevitable when implementing new data collection points. The old culture of "just get it done" no longer applies.
                                        <a href="/blogpost/"><span></span></a>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </CardDeck>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Home