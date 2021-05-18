import React from 'react'
import closeIcon from '../images/Close Icon.svg'

const NominationBanner = (props) => {
    return (
        <div className="nomination-banner">
            <h2>Your Nominations</h2>
            {/* <h1 className="watermark">Nominate a movie and it will show here</h1> */}
            <div className="nominations">
                {props.movies.map((movie, index) => <div className='nominated'>
                    <img onClick={() => props.handleRemoveClick(movie)} src={closeIcon} className="remove-nomination"></img>
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

