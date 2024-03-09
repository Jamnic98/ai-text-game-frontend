import React, {useState} from 'react'
import {useParams, useLocation} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ChatBox from '../components/ChatBox/ChatBox'
import Input from '../components/ChatInput'

export default function Play() {
	let params = useParams()
	let location = useLocation()

	const [messages, setMessages] = useState([
		{
			data: 'This is a test message!',
			member: {
				id: '0',
				username: 'Computer',
				color: 'blue',
			},
		},
	])

	const me = {
		id: '1',
		username: 'Test Player',
		color: '#000000',
	}

	const onSendMessage = (message) => {
		const newMessage = {
			data: message,
			member: me,
		}
		setMessages([...messages, newMessage])
	}

	console.log(messages)
	return (
		<>
			<div>Play</div>
			<Container fluid>
				<Row>
					<Col>
						<ChatBox messages={messages} me={me} />
					</Col>
					<Col>Image</Col>
				</Row>
				<Row>
					<Col>
						<Input onSendMessage={onSendMessage} />
					</Col>
				</Row>
			</Container>
		</>
	)
}
