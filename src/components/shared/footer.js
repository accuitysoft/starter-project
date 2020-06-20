import React from 'react'
import { Container } from 'reactstrap'

const Footer = () => {
    var year = new Date().getFullYear();
    return(
    <footer className="py-5 bg-dark">
        <Container>
            <p className="m-0 text-center text-white">Copyright &copy; Shane Lee {year}</p>
        </Container>
    </footer>
  )
}

export default Footer