

function MovieCard({movie}){
    function onHeartClick(){
        alert("You liked the movie " + movie.title)
    }
    
  return (
    <div className='bg-red-500 w-50 h-50 display-flex flex-col items-center justify-center'>
        <div className='movie-poster'>
            <img src={movie.url} alt={movie.title} />
            <div className='move-overlay'>
                <button className='favorite-button' onClick={onHeartClick}>H</button>
            </div>
            <div className='movie-info'>
                <h3>{movie.title}</h3>
                <p>{movie.releaseDate}</p>
            </div>
        </div>
    </div>
  )
}

export default MovieCard