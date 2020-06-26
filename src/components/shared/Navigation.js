import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Container, Button } from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom'
//import isAuthenticated from '../../helpers/authHelper'
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
                                {/* {isAuthenticated()?setAuthStatus("Logout"):setAuthStatus("Login")}
                                <Button onClick={authButton} color="primary">{authStatus}</Button>  */}
                                {props.loggedIn ? (
                                    <Button onClick={logout} color="primary">Logout</Button>
                                ) : (
                                    <Button onClick={login} color="primary">Login</Button>
                                )}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Navigation