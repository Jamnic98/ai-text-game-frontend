// ChatBox.jsx
import React from 'react'

import Messages from './Messages'
import Spinner from 'react-bootstrap/Spinner'

const ChatBox = ({messages, me, loadingNextMsg}) => {
	return (
		<div
			style={{
				height: '70vh',
				overflowY: 'scroll',
				padding: '20px',
				borderRadius: '5%',
			}}
		>
			<Messages messages={messages} me={me} />
			<div>
				{loadingNextMsg && (
					<span>
						<Spinner animation="grow" size="sm" variant="primary" />
						<Spinner animation="grow" size="sm" variant="primary" />
						<Spinner animation="grow" size="sm" variant="primary" />
					</span>
				)}
			</div>
		</div>
	)
}

export default ChatBox
