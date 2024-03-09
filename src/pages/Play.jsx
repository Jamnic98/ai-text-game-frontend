import React, {useState} from 'react'
import {useParams, useLocation} from 'react-router-dom'
import ChatBox from '../components/ChatBox/ChatBox'
import Input from '../components/ChatInput'

export default function Play() {
	const [messages, setMessages] = useState([
		{
			id: '1',
			data: 'This is a test message!',
			member: {
				id: '1',
				clientData: {
					color: 'blue',
					username: 'Computer',
				},
			},
		},
	])

	const me = {
		username: 'Test Player',
		color: '#000000',
	}
	let params = useParams()
	let location = useLocation()

	function onSendMessage(message) {
		const newMessage = {
			data: message,
			member: me,
		}
		setMessages([...messages, newMessage])
	}

	return (
		<>
			<div>Play</div>
			<ChatBox messages={messages} me={me} />
			<Input onSendMessage={onSendMessage} />
		</>
	)
}
