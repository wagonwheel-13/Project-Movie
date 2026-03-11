
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites && favorites.length > 0) {
    return (
      <div className="min-h-screen bg-slate-900 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-5xl font-bold text-white mb-2">Your Favorites</h2>
            <p className="text-gray-400">You have {favorites.length} saved movie{favorites.length !== 1 ? 's' : ''}</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {favorites.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">No Favorite Movies Yet</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Start adding movies to your favorites and they will appear here!</p>
      </div>
    </div>
  );
}

export default Favorites;