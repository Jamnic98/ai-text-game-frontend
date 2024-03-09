import React, {useEffect, useRef} from 'react'

import Message from './Message'
import styles from './ChatBox.module.css'

const Messages = ({messages, me}) => {
	const bottomRef = useRef(null)
	useEffect(() => {
		if (bottomRef && bottomRef.current) {
			bottomRef.current.scrollIntoView({behavior: 'smooth'})
		}
	})

	return (
		<ul className={styles.messagesList}>
			{messages.map((message, i) => (
				<Message
					key={i}
					id={message.id}
					member={message.member}
					data={message.data}
					me={me}
				/>
			))}
			<div ref={bottomRef}></div>
		</ul>
	)
}

export default Messages
