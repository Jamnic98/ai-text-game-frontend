// ChatBox.jsx
import React from 'react'

import Messages from './Messages'

const ChatBox = ({messages, me}) => {
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
		</div>
	)
}

export default ChatBox
