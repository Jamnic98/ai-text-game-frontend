import React, {useEffect, useState} from 'react'
import {Container, Card, Row, Col, Button} from 'react-bootstrap'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Loader from '../components/Loader'
import Base64Img from '../components/Base64Img'
import {serverBaseURL} from '../settings'

const GamesPage = () => {
	const [loading, setLoading] = useState(true)
	const navigate = useNavigate()
	const [games, setGames] = useState([])
	useEffect(() => {
		fetchGames()
	}, [])

	const fetchGames = async () => {
		setLoading(true)
		try {
			const response = await (await axios.get(`${serverBaseURL}/games/`)).data
			setGames(response['games'])
			setLoading(false)
		} catch (error) {
			console.log('Error fetching games')
		}
	}

	const handleClick = (game_id) => {
		navigate(`/play/${game_id}`)
	}

	return (
		<Container>
			<h2 className="mt-4 mb-4">Games</h2>
			<p>
				Explore and play exciting games on our platform. Choose from a variety
				of games and start your gaming adventure today!
			</p>
			{loading ? (
				<Loader />
			) : (
				<Row
					style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}
				>
					{games &&
						games?.length > 0 &&
						games.map((game, index) => {
							// console.log(game)
							return (
								<Col
									style={{height: '25%', width: '25%'}}
									key={index}
									md={4}
									className="mb-2"
								>
									<Card style={{width: '320px'}}>
										<Card.Body>
											<Col>
												<Base64Img imageStr={game.thumbnail} />
												<Card.Title>{game.title}</Card.Title>
												<Card.Text
													style={{
														width: '100%',
														height: '30px',
														textOverflow: 'ellipsis',
														overflow: 'hidden',
														whiteSpace: 'nowrap',
													}}
												>
													{game.description}
												</Card.Text>
												<Button
													variant="success"
													onClick={() => handleClick(game.id)}
												>
													Play Now
												</Button>
											</Col>
										</Card.Body>
									</Card>
								</Col>
							)
						})}
				</Row>
			)}
		</Container>
	)
}

export default GamesPage
