import React from 'react'
import closeIcon from '../images/Close Icon.svg'

const NominationBanner = ({ movies, handleRemoveClick }) => {
    return (
        <div className="nomination-banner">
            <h2>Your Nominations</h2>
            <div className="nominations">
                {movies.map((movie, index) => <div className='nominated'>
                    <img onClick={() => handleRemoveClick(movie)} src={closeIcon} className="remove-nomination"></img>
                    <div className="nominated-bubble">
                        <img src={movie.Poster} className='nominated-poster' alt='Movie poster'></img>
                    </div>
                    <p className='nominated-name-hover'>{movie.Title.substr(0, 15)}...</p>
                </div>)}
            </div>
        </div>
    )
}

export default NominationBanner

