import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/Button'

import axios from 'axios'
import Loader from '../components/Loader'

const GameOver = () => {
	const navigate = useNavigate()
	const {gameId} = useParams()
	const [gameData, setGameData] = useState(null)
	useEffect(() => {
		if (!gameData) {
			fetchGameData(gameId)
		}
	}, [gameId])

	const fetchGameData = async (gameId) => {
		const response = await axios.get(`http://localhost:8000/games/${gameId}/`)
		const {title, description, objective, current_setting} = response.data
		setGameData({
			title,
			description,
			objective,
			current_setting,
		})
	}

	const handlePlayAgain = () => {
		navigate(`/play/${gameId}`)
	}

	const handleNavigateToGames = () => {
		navigate('/games')
	}

	return gameData ? (
		<>
			<h1>GameOver</h1>
			<p>{`Thanks for playing ${gameData.title}`}</p>
			<ButtonGroup>
				<Button onClick={handlePlayAgain}>Play again</Button>
				<Button onClick={handleNavigateToGames}>Go to games page</Button>
			</ButtonGroup>
		</>
	) : (
		<Loader />
	)
}

export default GameOver
