// Play.jsx
import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import ChatBox from '../components/ChatBox/ChatBox'
import ChatInput from '../components/ChatInput'
import Loader from '../components/Loader'
import {serverBaseURL} from '../settings'

const computer = {
	id: '0',
	username: 'AI',
	color: '#FFFFFF',
}

const me = {
	id: '1',
	username: 'You',
	color: '#000000',
}

export default function Play() {
	const navigate = useNavigate()
	const {gameId} = useParams()
	const [gameData, setGameData] = useState(null)
	const [messages, setMessages] = useState([])
	const [isLoadingMsg, setIsLoadingMsg] = useState(false)
	const [isLoadingImg, setIsLoadingImg] = useState(false)
	const [isGameOver, setIsGameOver] = useState(false)

	const [imagePrompt, setImagePrompt] = useState(null)
	const [imageBase64Data, setImageBase64Data] = useState(null)

	// initialise the game state
	useEffect(() => {
		if (!gameData) {
			fetchGameData(gameId)
			startGame()
		}
	}, [gameId])

	useEffect(() => {
		if (imagePrompt) {
			executeScript(imagePrompt).then(() => {
				setIsLoadingImg(false)
			})
		} else {
			setIsLoadingImg(true)
		}
	}, [imagePrompt])

	const fetchGameData = async (gameId) => {
		const response = await axios.get(`${serverBaseURL}/games/${gameId}/`)
		const {title, description, objective, current_setting} = response.data
		setGameData({
			title,
			description,
			objective,
			current_setting,
		})
	}

	const startGame = async () => {
		setImagePrompt(null)
		setMessages([])
		await makeMove('')
	}

	const executeScript = async (prompt) => {
		try {
			console.log(prompt)
			setIsLoadingImg(true)

			// call stability api
			const response = await axios.post(`${serverBaseURL}/stability/`, {
				prompt: prompt,
			})
			const {data} = response
			setImageBase64Data(data)
			setIsLoadingImg((isLoadingImg) => isLoadingImg === false)
		} catch (error) {
			console.error('Error:', error.message)
		}
	}

	const onSendMessage = async (message) => {
		const newMessage = {
			data: message,
			member: me,
		}
		setMessages((messages) => [...messages, newMessage])
		await makeMove(message)
	}

	const makeMove = async (message) => {
		setIsLoadingMsg(true)
		const response = await axios.post(`${serverBaseURL}/make_move`, {
			id: gameId,
			msg: message,
		})
		const data = response.data

		const newMessage = {
			data: data.message,
			member: computer,
		}
		if (data.is_finished) {
			setIsGameOver(true)
		}
		setImagePrompt(data.image_prompt)
		setIsLoadingMsg(false)
		setMessages((messages) => [...messages, newMessage])
	}

	const handlePlayAgain = () => {
		setIsGameOver(false)
		startGame()
	}

	const handleNavigateToGames = () => {
		navigate('/games')
	}

	return (
		<>
			{gameData ? (
				<>
					<Container>
						<Row style={{marginBottom: '2%'}}>
							<header style={{textAlign: 'center'}}>
								<h1 className="mt-5 mb-4">{gameData.title}</h1>
								<p style={{width: '50%', margin: 'auto'}}>
									{gameData.objective}
								</p>
							</header>
						</Row>
						<Row>
							<Col
								style={{
									backgroundColor: '#f8f9fa',
									padding: '20px',
									borderRadius: '5%',
								}}
							>
								<ChatBox
									messages={messages}
									me={me}
									loadingNextMsg={isLoadingMsg}
								/>
								<ChatInput
									onSendMessage={onSendMessage}
									disabled={isGameOver}
								/>
							</Col>
							<Col>
								<>
									<div
										style={{
											width: '100%',
											height: '100%',
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'space-around',
										}}
									>
										{isLoadingImg ? (
											<Loader
												text={
													'Generating Scene, submitting job onto the Coophive network'
												}
											/>
										) : (
											<img
												src={`data:image/png;base64,${imageBase64Data}`}
												alt="Generated Image"
												style={{
													maxWidth: '100%',
													// maxHeight: '65vh',
													borderRadius: '5%',
												}}
											/>
										)}
									</div>
								</>
							</Col>
						</Row>
						<Row>
							<div style={{marginTop: 5}}>
								{isGameOver && (
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'center',
											width: '50%',
											margin: 'auto',
										}}
									>
										<h6>Game Over</h6>
										<p>You beat: {gameData.title}!</p>
										<div style={{display: 'grid', gap: 10}}>
											<Button onClick={handlePlayAgain} variant="success">
												Play Again
											</Button>
											<Button onClick={handleNavigateToGames}>
												Games Page
											</Button>
										</div>
									</div>
								)}
							</div>
						</Row>
					</Container>
				</>
			) : (
				<div style={{height: '80vh'}}>
					<Loader text="Loading..." />
				</div>
			)}
		</>
	)
}
