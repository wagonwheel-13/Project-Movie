import React from 'react'

const MovieCard = ({movie}) => {
    function onHeartClick(){
        alert("You liked " + movie.title)
    }
    
  return (
    <div className='movie-card'>
        <div className='movie-poster'>
            <img src={movie.url} alt={movie.title} />
            <div className='move-overlay'>
                <button className='favorite-button' onClick={onHeartClick}></button>
            </div>
            <div className='movie-info'>
                <h3>{movie.title}</h3>
                <p>{movie.release-date}</p>
            </div>
        </div>
    </div>
  )
}

export default MovieCard