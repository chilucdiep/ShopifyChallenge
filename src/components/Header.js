import React from 'react'
import logo from '../images/Shoppies logo.svg'
import searchIcon from '../images/24/basic/search.svg'
import helpButton from '../images/Help button.svg'
import hero from '../images/Hero.svg'

function Header(props) {
    return (
        <header>
            <div className="nav-bg"></div>
            <nav className="wrapper">
                <a href="index.html"><img src={logo} alt="The Shoppies logo"></img></a>
                <div className="search-bar">
                    <input type="text" id="search-input" value={props.value} onChange={(e) => props.setSearchInput(e.target.value)} placeholder="Search the title of a movie..."></input>
                    <img src={searchIcon} alt="Search icon"></img>
                </div>
                <div>
                    <a href="https://github.com/chilucdiep/ShopifyChallenge" target="_blank"><img className="help-button" src={helpButton} alt="Help button"></img></a>
                </div>
            </nav>

            <div className="hero-image">
                <img src={hero} alt="Shoppies hero image"></img>
            </div>
            <div className="hero-text">
                <h1>Movie awards for entrepreneurs</h1>
                <h2>Nominate your 5 favorite movies</h2>
            </div>
            <div className="bg"></div>     
        </header>
    )
}

export default Header
