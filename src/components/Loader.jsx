import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import styles from './Loader.module.css' // Import a CSS file for custom styles (optional)

const Loader = () => {
	return (
		<div className={styles.loaderContainer}>
			<Spinner
				animation="border"
				className={styles.loaderSpinner}
				style={{content: 'none', cursor: 'none'}}
			/>
		</div>
	)
}

export default Loader
