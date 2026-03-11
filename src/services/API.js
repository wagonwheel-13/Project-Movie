const API_KEY = "87b6e7295f53ea0dda82d63dec1eefb1"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`); 
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent( //https://api.themoviedb.org/3/search/movie?api_key=...&query=Batman
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

