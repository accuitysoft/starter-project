import React, {useEffect, useState} from 'react'
import { Container } from 'reactstrap'

const Blog = () => {
    const [blog, setBlog] = useState([])

    useEffect(()=>{
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

    return (
        <section>
            <Container>
                {blog.length > 0 &&
                    blog.map(article => 
                        <div className="blog-card">
                            <img src={article.picture} />
                            <div className="blog-card-text">
                                <h3>{article.cardTitle}</h3>
                                <p>{article.cardSummary}</p>
                                <a href="/blogpost/"><span></span></a>
                    </div>
                        </div>
                    )
                    
                }
                
            </Container>
        </section>
    )
}

export default Blog