import React from 'react'

const Base64Img = ({imageStr}) => {
	const imageSrc = `data:image/jpeg;base64,${imageStr}`
	return <img src={imageSrc} alt="Base64 Encoded" width={284} height={284} />
}

export default Base64Img
