import React from 'react'
import './App.scss';
import Header from './components/Header'
import MovieList from './components/MovieList'
import NominationBanner from './components/NominationBanner';

const App = () => {
  const [movies, setMovies] = React.useState([])
  const [nominations, setNominations] = React.useState([])
  const [searchInput, setSearchInput] = React.useState('')

const getMovieRequest = async() => {
  const url = `https://www.omdbapi.com/?s=${searchInput}&apikey=2bce123b`

  const response = await fetch(url)
  const responseJson = await response.json()

  if (responseJson.Search) {
    setMovies(responseJson.Search)
  }
}

React.useEffect(() => {
  getMovieRequest(searchInput)

}, [searchInput])

const addNominations = (movie) => {
  setNominations([...nominations, movie])
  const newMovieList = [...movies]
  const movieIndex = movies.indexOf(movie)
  const removed = newMovieList.splice(movieIndex, 1)
  setMovies(newMovieList)
}

  return (
  <div>
    <Header searchInput={searchInput} setSearchInput={setSearchInput}/>
    <MovieList movies = {movies} handleNominationsClick={addNominations}/>
    <NominationBanner movies = {nominations} />
  </div>
  )
};

export default App;
