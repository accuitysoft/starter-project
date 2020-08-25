import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBalanceScale, faPlane, faReply, faHandshake, faWrench, faUsers } from '@fortawesome/free-solid-svg-icons'


const About = () => {

    const [experience, setExperience] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        const getCategories = async () => {
        const catResponse = await fetch('http://localhost:4000/experience/categories', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const data = await catResponse.json()
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
        setExperience(expData)  
        }

        getCategories();
        getExperience();
        
    }, [])

    return (
        <section>
            <div className="about-me-background">
                <Container>
                    <div className="about-me-page">
                        <div className="about-me-quote-wrapper">
                            <div className="about-me-quote">The Past is History, the Future is a Mystery, But the Present is a Gift</div>
                            <div className="about-me-quote-source">- Master Oogway</div>
                        </div>
                        <Row >
                            <Col lg="5">

                                <img className="img-fluid rounded mb-lg-0 home-image" src="/img/about-me.png" alt="" />
                            </Col>
                            <Col lg="1"></Col>
                            <Col lg="5" >
                                {
                                    categories.length > 0 &&
                                        categories.map(catName => (
                                            <div>
                                            <h2 className="font-weight-bold" key={catName.category}>{catName.category}</h2> 
                                            
                                                {experience.map(expItem => (
                                                    <div className="experience--div">
                                                    { catName.category === expItem.category && <span>{expItem.experience}</span>}
                                                    </div>
                                                )) }
                                            </div>
                                        ))
                                }
                                
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="timeline">
                <div className="timeline-entries">
                    <div className="timeline-entry">
                        <div className="timeline-title"><FontAwesomeIcon icon={faGraduationCap} /> <br></br> 2008 </div>
                        <div className="timeline-body">
                            <p>Graduation from University and joined mid-sized accounting firm as Intermediate Accountant</p>
                        </div>
                    </div>
                    <div className="timeline-entry-right">
                        <div className="timeline-title"><FontAwesomeIcon icon={faBalanceScale} /> <br></br> 2009</div>
                        <div className="timeline-body">
                            <p>Received Chartered Accountant designation and promoted to Senior Accountant</p>
                        </div>
                    </div>
                    <div className="timeline-entry">
                        <div className="timeline-title"><FontAwesomeIcon icon={faPlane} /> <br></br> 2011</div>
                        <div className="timeline-body">
                            <p>Flew to India to learn about the family business and experience life in a different country</p>
                        </div>
                    </div>
                    <div className="timeline-entry-right">
                        <div className="timeline-title"><FontAwesomeIcon icon={faReply} /> <br></br> 2012</div>
                        <div className="timeline-body">
                            <p>Returned to Canada and rejoined a public accounting firm. Dealt with audits of both private owned businesses and public companies.</p>
                        </div>
                    </div>
                    <div className="timeline-entry">
                        <div className="timeline-title"><FontAwesomeIcon icon={faHandshake} /> <br></br> 2015</div>
                        <div className="timeline-body">
                            <p>Promoted to Manager - led audit engagements of public companies with market cap between $70M and $500M.</p>
                        </div>
                    </div>
                    <div className="timeline-entry-right">
                        <div className="timeline-title"><FontAwesomeIcon icon={faWrench} /> <br></br> 2016</div>
                        <div className="timeline-body">
                            <p>Joined a construction company as Corporate Controller with 8 direct reports. Reported directly to CEO.</p>
                        </div>
                    </div>
                    <div className="timeline-entry">
                        <div className="timeline-title"><FontAwesomeIcon icon={faUsers} /> <br></br> 2019</div>
                        <div className="timeline-body">
                            <p>Promoted to Vice President of Finance</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>


    )
}

export default About