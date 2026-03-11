


import { Link } from "react-router-dom"; //RRD lets us use Link instead of <a> to prevent page reloads and use client-side routing instead

function NavBar() {
    return <nav className="bg-slate-900 shadow-lg border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div>
                <Link className="text-2xl font-bold text-white hover:text-blue-400 transition-colors" to="/">MovieSite</Link>
            </div>
            <div className="flex gap-8 items-center">
                <Link className="text-gray-200 hover:text-white font-medium transition-colors" to="/">Home</Link>
                <Link className="text-gray-200 hover:text-white font-medium transition-colors" to="/Favorites">Favorites</Link>
            </div>
        </div>
    </nav>

}

export default NavBar;