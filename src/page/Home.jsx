import { useState, useEffect, use } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/API";


function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return
    if (loading) return

    setLoading(true)
    try {
        const searchResults = await searchMovies(searchQuery)
        setMovies(searchResults)
        setError(null)
    } catch (err) {
        console.log(err)
        setError("Failed to search movies...")
    } finally {
        setLoading(false)
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          
          <form onSubmit={handleSearch} className="flex gap-3 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for movies..."
              className="flex-1 px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 border border-slate-600 focus:border-blue-500 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors" disabled={loading}>
              Search
            </button>
          </form>
        </div>

        {error && <div className="bg-red-900 border border-red-600 text-red-200 px-6 py-4 rounded-lg mb-8 max-w-2xl mx-auto">{error}</div>}

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-slate-600 border-t-blue-500 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-300">Loading movies...</p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;