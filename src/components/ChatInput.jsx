import React, {useState} from 'react'

import {Button, Form, Row, InputGroup} from 'react-bootstrap'

const ChatInput = ({onSendMessage, disabled}) => {
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
		<div style={{}}>
			<form onSubmit={(e) => onSubmit(e)}>
				<Row>
					<InputGroup className="mb-3">
						<Form.Control
							type="text"
							placeholder="Input Message"
							onChange={(e) => onChange(e)}
							value={text}
							autoFocus
							disabled={disabled}
						/>
						<Button
							variant="primary"
							type="submit"
							disabled={text.length === 0 || disabled}
						>
							Send
						</Button>
					</InputGroup>
				</Row>
			</form>
		</div>
	)
}

export default ChatInput
