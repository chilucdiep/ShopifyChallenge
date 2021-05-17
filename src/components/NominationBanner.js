import React from 'react'

const NominationBanner = (props) => {
    return (
        <div className="nomination-banner">
            <h2>Your Nominations</h2>
            <div className="nominations">
                {props.movies.map((movie, index) => <div className='nominated'>
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

