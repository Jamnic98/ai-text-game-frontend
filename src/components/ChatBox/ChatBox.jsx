import React from 'react'

import Messages from './Messages'

import styles from './ChatBox.module.css'

const ChatBox = ({messages, me}) => {
	return (
		<div>
			<Messages messages={messages} me={me} />
		</div>
	)
}

export default ChatBox
