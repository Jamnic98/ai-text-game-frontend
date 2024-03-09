import styles from './ChatBox.module.css'

const Message = ({member, data, id, me}) => {
	console.log(member)
	// 1
	const {username, color} = member
	// 2
	const messageFromMe = member.id === me.id
	const className = messageFromMe
		? `${styles.messagesMessage} ${styles.currentMember}`
		: styles.messagesMessage
	// 3
	return (
		<li key={id} className={className}>
			<span className={styles.avatar} style={{backgroundColor: color}} />
			<div className={styles.messageContent}>
				<div className={styles.username}>{username}</div>
				<div className={styles.text}>{data}</div>
			</div>
			{/* <div>{message}</div> */}
		</li>
	)
}

export default Message
