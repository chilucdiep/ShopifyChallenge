import React from 'react'
import Movie from './Movies'


const MovieList = ({movies, onNominationsClick, nominations, noClick}) => {
    return (
        <div className='wrapper'>
            <div className='movie-display'>
                <div className='movie-list'>
                    {movies.map((movie) =>
                        <Movie movie={movie} onNominationsClick={onNominationsClick} nominations={nominations} noClick={noClick} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieList