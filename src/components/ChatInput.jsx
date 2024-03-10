import React, {useState} from 'react'

import {Button, Form, Row, Col} from 'react-bootstrap'

// import styles from './Input.module.css'

const ChatInput = ({onSendMessage}) => {
	const [text, setText] = useState('')

	function onChange(e) {
		const text = e.target.value
		setText(text)
	}

	function onSubmit(e) {
		e.preventDefault()
		setText('')
		onSendMessage(text)
	}

	return (
		<div style={{padding: 10}}>
			<form onSubmit={(e) => onSubmit(e)}>
				<Row>
					<Col md={10}>
						<Form.Control
							type="text"
							placeholder="Input Message"
							onChange={(e) => onChange(e)}
							value={text}
							autoFocus
						/>
					</Col>
					<Col md={2}>
						<Button
							variant="primary"
							type="submit"
							disabled={text.length === 0}
						>
							Send
						</Button>
					</Col>
				</Row>
			</form>
		</div>
	)
}

export default ChatInput
