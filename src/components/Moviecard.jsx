import { useMovieContext } from '../context/MovieContext'

function MovieCard({movie}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return <div className="bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="relative overflow-hidden h-96 bg-slate-700">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-full object-cover"/>
            
            <button 
                className={`absolute top-3 right-3 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-200 ${
                    favorite 
                        ? 'bg-red-600 text-white shadow-lg' 
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                }`} 
                onClick={onFavoriteClick}
            >
                ♥
            </button>
        </div>
        <div className="p-4">
            <h3 className="text-white font-bold text-lg mb-2 truncate">{movie.title}</h3>
            <p className="text-gray-400 text-sm">{movie.release_date || 'N/A'}</p>
        </div>
    </div>
}

export default MovieCard