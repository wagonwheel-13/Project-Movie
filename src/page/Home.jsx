import { useState, useEffect, use } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchPopularMovies } from "../services/API";

function Home() {
    const [searchQuery, setSearchQuery] = useState(""); // Initializes state for the search query
    const [movies, setMovies] = useState([]); // Initializes state for the list of movies
    const [error, setError] = useState(null); // Initializes state for error handling
    const [loading, setLoading] = useState(true); // Initializes state for loading status



    useEffect(() => {
        const popularMovies = async () => {
            try {
                const data = await getPopularMovies() // Fetches popular movies from the API    
                setMovies(data) // Updates the movies state with the fetched data
            }
            catch (error) {
                console.log(err)
                setError("Failed to fetch popular movies. Please try again later.") // Sets an error message if the fetch fails
            }
            finally {
                setLoading(false) // Sets loading to false after the fetch is complete, regardless of success or failure
            }
        }
        
        popularMovies() // Calls the function to fetch popular movies when the component mounts
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault() // Prevents the default form submission behavior
        setLoading(true) // Sets loading to true while the search is being performed       
        alert(searchQuery)
        setSearchQuery("") // Clears the search input after submission
    }

    return (
        <div className="">
            <form onSubmit={handleSearch} >
                <input type="text"
                    placeholder="search for movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <div>
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Home;