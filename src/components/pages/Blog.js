import React from 'react'
import { Container } from 'reactstrap'

const Blog = () => {
    return (
        <section>
            <Container>
                <div className="blog-card">
                    <img src="/img/data-validation.png" alt="data validation"/>
                    <div className="blog-card-text">
                        <h3>Does your business have processes for data validation?</h3>
                        <p>While businesses understand the value of tracking data, many have yet to implement controls that validate them. As a result, the data obtained does not provide accurate information.</p>
                        <a href="/blogpost/"><span></span></a>
                    </div>
                </div>
                <div className="blog-card">
                    <img src="/img/connecting-data.jpg" alt="connecting data"/>
                    <div className="blog-card-text">
                        <h3>Connecting operational and financial data to identify process weaknesses</h3>
                        <p>The traditional form of comparing financial data month over month has been the norm over the years. However, recent technologies in data analytics allows us to connect data from multiple sources to gain valuable insights.</p>
                        <a href="/blogpost/"><span></span></a>
                    </div>
                </div>
                <div className="blog-card">
                    <img src="/img/corporate-culture.jpg" alt="corporate culture"/>
                    <div className="blog-card-text">
                        <h3>Corporate Culture Change - Implementing Data Collection Processes</h3>
                        <p>Process changes are inevitable when implementing new data collection points. The old culture of "just get it done" no longer applies.</p>
                        <a href="/blogpost/"><span></span></a>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Blog