import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import {useParams, useNavigate} from 'react-router-dom'

const GameOverModal = ({
	show,
	gameTitle,
	handlePlayAgain,
	handleNavigateToGames,
}) => {
	return (
		<Modal show={show} /* onHide={handleClose} */>
			<Modal.Header closeButton>
				<Modal.Title>Game Over</Modal.Title>
			</Modal.Header>
			<Modal.Body>Thanks for playing {gameTitle}.</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handlePlayAgain}>
					Play again
				</Button>
				<Button variant="primary" onClick={handleNavigateToGames}>
					Try a different game
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default GameOverModal
