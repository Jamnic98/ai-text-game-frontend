// Message.jsx
const Message = ({member, data, me}) => {
	const {username, color, id} = member

	const messageFromMe = id === me.id

	const messageStyle = {
		marginLeft: messageFromMe ? 'auto' : '0',
		backgroundColor: messageFromMe ? '#3faffa' : '#e0e0e0',
		color: messageFromMe ? '#ffffff' : '#000000',
		borderRadius: '10px',
		padding: '10px',
		maxWidth: '60%',
		margin: '5px',
		wordWrap: 'break-word',
		textAlign: 'left',
	}

	const avatarStyle = {
		display: 'block',
		marginLeft: messageFromMe ? 'auto' : '0',
		backgroundColor: color,
		width: '20px',
		height: '20px',
		borderRadius: '50%',
		marginRight: '8px',
	}

	return (
		<div style={{margin: 'auto', ...messageStyle}}>
			<div style={{display: 'flex', alignItems: 'center', marginBottom: 5}}>
				<span style={avatarStyle}></span>
				<div
					style={{fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '3px'}}
				>
					{username}
				</div>
			</div>
			<div style={{fontSize: '0.9rem', maxWidth: '100%'}}>{data}</div>
		</div>
	)
}

export default Message
