import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Home from './pages/Home'
import Games from './pages/Games'
import CreateGame from './pages/CreateGame'
import Dashboard from './pages/Dashboard'
import Play from './pages/Play'

const Main = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/games" element={<Games />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/create-game" element={<CreateGame />} />
					<Route path="/play/:gameId" element={<Play />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default Main
