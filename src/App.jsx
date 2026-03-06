import Home from "./page/Home"
import Favorites from "./page/Favorites"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div>
      <NavBar /> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  )
}

export default App