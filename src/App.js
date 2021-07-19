import React from 'react'
import './App.scss';
import Header from './components/Header'
import MovieList from './components/MovieList'
import NominationBanner from './components/NominationBanner';

const App = () => {
  const [movies, setMovies] = React.useState([])
  const [nominations, setNominations] = React.useState([])
  const [banner, setBanner] = React.useState(false)
  const [noClick, setNoClick] = React.useState(false)
  const [searchInput, setSearchInput] = React.useState('')

  const getMovieRequest = async () => {
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
      setNoClick(true)
    } else {
      setNominations([...nominations, movie])
      setBanner(true)
    }
  }

  const removeNominations = (movie) => {
    const newNominationList = [...nominations]
    const nominationIndex = nominations.indexOf(movie)
    const removed = newNominationList.splice(nominationIndex, 1)
    setNominations(newNominationList)
    setNoClick(false)

    if (newNominationList.length < 1 || newNominationList == undefined) {
      setBanner(false)
    }
  }

  const nominationMarkup = banner ? <NominationBanner movies={nominations} handleRemoveClick={removeNominations} /> : null;

  return (
    <div>
      <Header setSearchInput={setSearchInput} />
      <MovieList movies={movies} onNominationsClick={handleAddNominations} nominations={nominations} noClick={noClick} />
      {nominationMarkup}
    </div>
  )
};

export default App;
