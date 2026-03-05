

import { Link } from "react-router-dom";

function NavBar() {
    return <nav className="border-2 border-gray-100 text-yellow-300">
        <div>
            <Link to="/">Movie App</Link>
        </div>
        <div>
            <Link to="/Home">Home</Link>
            <Link to="/Favorites">Favorites</Link>
        </div>
    </nav>

}

export default NavBar;