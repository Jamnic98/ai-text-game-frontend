import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'

const NavBar = () => {
	return (
		<Navbar bg="dark" data-bs-theme="dark">
			<Container fluid>
				<Navbar.Brand as={Link} to="/">
					AI-Text-Game
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link as={Link} to="/games">
						Games
					</Nav.Link>
					<Nav.Link as={Link} to="/create-game">
						Create New Game
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	)
}

export default NavBar
