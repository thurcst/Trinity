import React, { useState } from 'react';
import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import logoImg from '../images/logo_git.svg';

import '../styles/landing.css';

export function SearchBar(){
  const [user, setUser] = useState("");

  return(
    <form id = "form" action="">
    <div className ="embed-submit-field">
      <input className = "userInput" id= "userInput" type="text" placeholder="Github User" value={user} onChange={({target}) => setUser(target.value)}/>
      <Link to = {{
          pathname: '/results',
          state: user
      }} id="search-button">
          <FiArrowRight/>
      </Link>
    </div>
  </form>
  )
}

function Landing(){

  return(
    
    <div className="App">
      <div className="apresentation">
          <img id = "logo" src={logoImg} alt="Github icon by Dave Gandy"/>
          <h1>Github Search</h1>
      </div>
      <div id="SearchBar">
        <div className = 'MainMenu'>
          <SearchBar/>
        </div>
      </div>
    </div>
  );
}

export default Landing;