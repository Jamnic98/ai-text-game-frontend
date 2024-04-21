export const imgGenBaseURL =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:3001'
		: process.env.PROD_IMG_GEN_URL

export const serverBaseURL =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:8000'
		: process.env.PROD_SERVER_URL
