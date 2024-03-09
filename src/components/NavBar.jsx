import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="/">AI-Text-Game</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/games">Games</Nav.Link>
        <Nav.Link href="/create-game">Create New Game</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar