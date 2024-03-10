// CreateGamePage.jsx
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Container, Form, Button} from 'react-bootstrap'
import axios from 'axios'

const CreateGamePage = () => {
	const navigate = useNavigate()
	const [gameData, setGameData] = useState({
		title: '',
		description: '',
		objective: '',
		current_setting: '',
		thumbnail: null,
	})

	const handleChange = (e) => {
		const {name, value, files} = e.target

		setGameData((prevData) => ({
			...prevData,
			[name]: name === 'thumbnail' ? files[0] : value,
		}))
	}

	const handleSubmit = async (e) => {
		try {
			e.preventDefault()
			const {thumbnail, ...rest} = gameData
			// Call API or perform actions with gameData
			// const response = await axios.post('http://localhost:8000/games/', rest)
			const response = await axios.post(
				'http://localhost:8000/games/',
				gameData
			)
			// const gameId = response.data
			navigate('/games')
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<Container>
			<h1 className="mt-4 mb-4">Create a New Game</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="formTitle">
					<Form.Label>Title of the Game</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter the title"
						name="title"
						value={gameData.title}
						onChange={handleChange}
						required
					/>
				</Form.Group>

				<Form.Group controlId="formDescription">
					<Form.Label>Description of the Game</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="Enter the description"
						name="description"
						value={gameData.description}
						onChange={handleChange}
						required
					/>
				</Form.Group>

				<Form.Group controlId="formObjective">
					<Form.Label>Objective of the Game</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter the objective"
						name="objective"
						value={gameData.objective}
						onChange={handleChange}
						required
					/>
				</Form.Group>

				<Form.Group controlId="formEnvironment">
					<Form.Label>Environment / Setting of the Game</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter the environment"
						name="current_setting"
						value={gameData.current_setting}
						onChange={handleChange}
						required
					/>
				</Form.Group>

				<Form.Group controlId="formThumbnail">
					<Form.Label>Thumbnail Image</Form.Label>
					<Form.Control
						type="file"
						name="thumbnail"
						accept="image/*"
						onChange={handleChange}
						// required
					/>
				</Form.Group>

				<Button style={{marginTop: '3%'}} variant="primary" type="submit">
					Create Game
				</Button>
			</Form>
		</Container>
	)
}

export default CreateGamePage
