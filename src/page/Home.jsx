import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
    const [searchQuery, setSearchQuery] = useState(""); // Initializes state for the search query

    // Temporary dummy movie data for demonstration
    const movies = [
        { title: "Movie 1", id: 1, title: "john", releaseDate: "2022" },
        { title: "Movie 2", id: 2, title: "terminator", releaseDate: "2021" },
        { title: "Movie 3", id: 3, title: "farcry", releaseDate: "2020" },
    ];

   const handleSearch = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    alert(searchQuery); // Displays the current search query in an alert
    setSearchQuery(""); // Resets the search query state to an empty string
   }

   return(
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
                movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
   )
}

export default Home;