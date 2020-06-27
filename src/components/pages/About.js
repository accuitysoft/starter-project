import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBalanceScale, faPlane, faReply, faHandshake, faWrench, faUsers } from '@fortawesome/free-solid-svg-icons'

const About = () => {
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
                                <h2 className="font-weight-bold">Accounting Experience</h2>
                                <span>Control Implementation</span>
                                <span>Software Transition</span>
                                <span>Audit Preparation</span>
                                <span>Cashflow Management</span>
                                <span>Management Report</span>
                                <span>Credit Facility Application</span>
                                <span>Workflow Implementation</span>
                                <h2 className="font-weight-bold">Developer Experience</h2>
                                <span>html</span>
                                <span>CSS</span>
                                <span>Javascript</span>
                                <span>Express JS</span>
                                <span>React</span>
                                <span>SQL</span>
                                <span>Git</span>

                                <h2 className="font-weight-bold">Education</h2>
                                <span>Chartered Accountant of Canada</span>
                                <span>Honours BBA, Wilfrid Laurier University</span>
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