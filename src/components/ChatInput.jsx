import React, {useEffect, useState} from 'react'

// import styles from './Input.module.css'

const ChatInput = ({onSendMessage}) => {
	const [text, setText] = useState('')

	function onChange(e) {
		const text = e.target.value
		setText(text)
	}

	function onSubmit(e) {
		e.preventDefault()
		setText('')
		onSendMessage(text)
	}

	return (
		<div /* className={styles.input} */>
			<form onSubmit={(e) => onSubmit(e)}>
				<input
					onChange={(e) => onChange(e)}
					value={text}
					type="text"
					placeholder="Input Message"
					autoFocus
				/>
				<button>Send</button>
			</form>
		</div>
	)
}

export default ChatInput
