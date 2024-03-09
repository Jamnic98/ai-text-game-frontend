// Message.jsx
const Message = ({ member, data, me }) => {
	const { username, color, id } = member;
  
	const messageFromMe = id === me.id;
  
	const messageStyle = {
	  display: 'flex',
	  flexDirection: 'column',
	  alignSelf: messageFromMe ? 'flex-end' : 'flex-start',
	  backgroundColor: messageFromMe ? '#3faffa' : '#e0e0e0',
	  color: messageFromMe ? '#ffffff' : '#000000',
	  borderRadius: '10px',
	  padding: '10px',
	  maxWidth: '60%',
	  margin: '5px',
	  wordWrap: 'break-word',
	};
  
	const avatarStyle = {
	  display: !messageFromMe ? 'block' : 'none',
	  backgroundColor: color,
	  width: '20px',
	  height: '20px',
	  borderRadius: '50%',
	  marginRight: '8px',
	};
  
	return (
	  <div style={messageStyle}>
		<div style={{ display: 'flex', alignItems: 'center' }}>
		  <span style={avatarStyle}></span>
		  <div style={{ fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '3px' }}>
			{username}
		  </div>
		</div>
		<div style={{ fontSize: '0.9rem', maxWidth: '100%' }}>{data}</div>
	  </div>
	);
  };
  
  export default Message;
  