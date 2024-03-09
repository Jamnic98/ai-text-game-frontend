const Message = ({member, data, me}) => {
	const {username, color, id} = member

	const messageFromMe = id === me.id

	const messageStyle = {
		alignSelf: messageFromMe ? 'flex-end' : 'flex-start',
		backgroundColor: messageFromMe ? '#DCF8C6' : '#F0F0F0',
		color: '#000',
		borderRadius: '10px',
		padding: '10px',
		maxWidth: '30%',
		marginBottom: '10px',
		wordWrap: 'break-word',
	}

	return (
		<li style={messageStyle}>
			<span
				style={{
					backgroundColor: color,
					width: '30px',
					height: '30px',
					borderRadius: '50%',
					display: 'inline-block',
				}}
			/>
			<div style={{marginLeft: '10px'}}>
				<div style={{fontWeight: 'bold'}}>{username}</div>
				<div>{data}</div>
			</div>
		</li>
	)
}

export default Message
