import React from 'react'
import './App.scss';
import Header from './components/Header'
import MovieList from './components/MovieList'

const App = () => {
  const [movies, setMovies] = React.useState([])
  const [searchInput, setSearchInput] = React.useState('')

const getMovieRequest = async() => {
  const url = `http://www.omdbapi.com/?s=${searchInput}&apikey=2bce123b`

  const response = await fetch(url)
  const responseJson = await response.json()

  if (responseJson.Search) {
    setMovies(responseJson.Search)
  }
}

React.useEffect(() => {
  getMovieRequest(searchInput)

}, [searchInput])

  return (
  <div>
    <Header searchInput={searchInput} setSearchInput={setSearchInput}/>
    <MovieList movies = {movies}/>
  </div>
  )
};

export default App;
