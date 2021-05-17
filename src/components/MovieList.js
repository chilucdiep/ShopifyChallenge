import React from 'react'
import nomationButton from '../images/Nominate button.svg'


const MovieList = (props) => {
    return (
        <div className='wrapper'>
            <div className='movie-display'>
                <div className='movie-list'>
                    {props.movies.map((movie, index) => <div className='movies'>
                        <img src={movie.Poster} className='movie-poster' alt='Movie poster'></img>
                        <p className='movie-name'>{movie.Title} ({movie.Year})</p>
                        <img onClick={() => props.handleNominationsClick(movie)} className="overlay-button" src={nomationButton} alt="Nominate button"></img>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default MovieList