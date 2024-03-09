// ChatBox.jsx
import React from 'react';

import Messages from './Messages';

import styles from './ChatBox.module.css';

const ChatBox = ({ messages, me }) => {
  return (
	<>
	<h2>Game</h2>
    <div
      style={{
		height:"70vh",
        overflowY: 'scroll',
        padding: '20px',
		borderRadius:"5%"
      }}
    >
      <Messages messages={messages} me={me} />
    </div>
	</>
  );
};

export default ChatBox;
