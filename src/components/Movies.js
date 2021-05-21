import React from 'react'
import nomationButton from '../images/Nominate button.svg'

const Movies = ({movie, onNominationsClick, nominations}) => {
    
    const okTitle = nominations.map(ok => ok.Title)
    // console.log(movie.Title)

    if (movie.Title == okTitle) {
        return (
            null
        )
    } else {
        return (
            <div className='movies'>
                <img src={movie.Poster} className='movie-poster' alt='Movie poster'></img>
                <p className='movie-name'>{movie.Title} ({movie.Year})</p>
                <img onClick={() => onNominationsClick(movie)} className="overlay-button" src={nomationButton} alt="Nominate button"></img>
            </div>
        )
    }

}

export default Movies
