import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Container } from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom'


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <header>
            <Navbar className="navbar-light" expand="md" fixed="top">
                <Container>

                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={RouteLink} to="/" exact={true}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RouteLink} to="/about">About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RouteLink} to="/blog">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RouteLink} to="/contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Navigation