import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav } from 'react-bootstrap'
function Navigation() {


    return (
      <Navbar  className="px-5" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Lorem Ipsum Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="#home">Home</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}

export default Navigation
