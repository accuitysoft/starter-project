import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Container, Button } from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom'
import { useHistory } from "react-router-dom";


const Navigation = (props) => {
    let history = useHistory();
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    
    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        props.logout();
        history.push("/login")
    }

    const login = event =>{
        history.push("/login")
    }
    return (
        <header>
            <Navbar className="navbar-light" expand="md" fixed="top">
                <Container>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                                {props.loggedIn ? (
                                    <Nav className="ml-auto" navbar>
                                        <NavItem>
                                            <NavLink tag={RouteLink}  to="/editBlog">Edit Blog</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={RouteLink}  to="/editAbout">Edit Experience</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={RouteLink}  to="/submissions">Submissions</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={RouteLink}  to="/users">Users</NavLink>
                                        </NavItem>
                                        <Button onClick={logout} color="primary">Logout</Button>
                                    </Nav>
                                ) : (
                                    <Nav className="ml-auto" navbar>
                                        <NavItem>
                                            <NavLink tag={RouteLink}  to="/" exact={true}>Home</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={RouteLink}  to="/about">About Me</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={RouteLink}  to="/blog">Blog</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={RouteLink}  to="/contact">Contact</NavLink>
                                        </NavItem>
                                        <Button onClick={login} color="primary">Login</Button>
                                    </Nav>
                                )}
                        
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Navigation