import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

import Home from "./Home";
import Games from "./Games";
import CreateGame from "./CreateGame";
import Dashboard from "./Dashboard";
import Play from "./Play";

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