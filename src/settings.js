export const serverBaseURL =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:8000'
		: process.env.PROD_SERVER_URL

console.log(process.env.NODE_ENV)
