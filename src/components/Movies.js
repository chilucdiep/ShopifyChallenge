import React from 'react'
import nomationButton from '../images/Nominate button.svg'

const Movies = ({movie, onNominationsClick, nominations, noClick}) => {
    let buttonClassName = "overlay-button"
    const nominatedTitle = nominations.map(nominated => nominated.Title)

    if (noClick === false && buttonClassName === "overlay-button disabled") {
        buttonClassName -= " disabled" 
    } else if (noClick === true){
        buttonClassName += " disabled" 
    }

    if (nominatedTitle.includes(movie.Title)) {
        return (
            null
        )
    } else {
        return (
            <div className='movies'>
                <img src={movie.Poster} className='movie-poster' alt='Movie poster'></img>
                <p className='movie-name'>{movie.Title} ({movie.Year})</p>
                <img onClick={() => onNominationsClick(movie)} className={buttonClassName} src={nomationButton} alt="Nominate button"></img>
            </div>
        )
    }

}

export default Movies
