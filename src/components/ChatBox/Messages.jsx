import React, {useEffect, useRef} from 'react'
import {ListGroup} from 'react-bootstrap'
import Message from './Message'

const Messages = ({messages, me}) => {
	const bottomRef = useRef(null)

	useEffect(() => {
		if (bottomRef && bottomRef.current) {
			bottomRef.current.scrollIntoView({behavior: 'smooth'})
		}
	})

	return (
		<ListGroup style={{listStyleType: 'none', padding: 0}}>
			{messages.map((message) => (
				<ListGroup.Item
					key={message.id}
					style={{
						marginBottom: '10px',
						// maxWidth: '70%',
						wordWrap: 'break-word',
						// alignSelf: message.member === me ? 'flex-end' : 'flex-start',
						// backgroundColor: message.member === me ? '#DCF8C6' : '#F0F0F0',
						borderRadius: '10px',
						padding: '10px',
					}}
				>
					<Message member={message.member} data={message.data} me={me} />
				</ListGroup.Item>
			))}
			<div ref={bottomRef}></div>
		</ListGroup>
	)
}

export default Messages
