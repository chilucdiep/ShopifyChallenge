import React from 'react'
import './App.scss';
import Header from './components/Header'
import MovieList from './components/MovieList'
import NominationBanner from './components/NominationBanner';

const App = () => {
  const [movies, setMovies] = React.useState([])
  const [nominations, setNominations] = React.useState([])
  const [banner, setBanner] = React.useState(false)
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

const handleAddNominations = (movie) => {
  if (nominations.length === 5) {
    console.log("max")
  } else {
    setNominations([...nominations, movie])
    setBanner(true)

    // movies.forEach((ok) => {
    //   if (ok === movie) {
    //     const newMovieList = [...movies]
    //     var movieIndex = movies.indexOf(ok)
    //     const removed = newMovieList.splice(movieIndex, 1)
    //     setMovies(newMovieList)
    //   }
    // })
    
    // const newMovieList = [...movies]
    // const movieIndex = movies.indexOf(movie)
    // const removed = newMovieList.splice(movieIndex, 1)
    // setMovies(newMovieList)
  }
}

const removeNominations = (movie) => {
  // setMovies([...movies, movie])
  //movies.splice(movieIndex, 0, movie)
  const newNominationList = [...nominations]
  const nominationIndex = nominations.indexOf(movie)
  const removed = newNominationList.splice(nominationIndex, 1)
  setNominations(newNominationList)

  if (newNominationList.length < 1 || newNominationList == undefined) {
    setBanner(false)
  }

  // movies.forEach((ok) => {
  //   if (ok === movie) {
  //     const movieIndex = movies.indexOf(ok)
  //     console.log(movieIndex)
  //   }
  // })
}

const nominationMarkup = banner ? <NominationBanner movies={nominations} handleRemoveClick={removeNominations}/> : null;

  return (
  <div>
    <Header searchInput={searchInput} setSearchInput={setSearchInput}/>
    <MovieList movies={movies} onNominationsClick={handleAddNominations} nominations={nominations} />
    {nominationMarkup}
  </div>
  )
};

export default App;
