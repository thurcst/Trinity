import React, { useState } from 'react';
import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import logoImg from '../images/logo_git.svg';

import '../styles/landing.css';


interface userJson{
  avatar_url:   string;
  bio?:         string;
  email?:       string;
  location:     string;
  followers:    number;
  following:    number;
  login:        string;
  name:         string;
  public_repos: string;
  type:         string;
}

interface reposJson{
  name:           string;
  watchers:       number;
  watchers_count: number;
  forks:          number;
  fork:           boolean;
  created_at:     string;


}

function Landing(){

  const [user, setUser] = useState("");
  const [gitInfo, setGitInfo] = useState<userJson>({} as userJson)
  const [gitRepos, setGitRepos] = useState<reposJson[]>([])
  
  function log_items(element:reposJson){
    console.log(element)
  }
  
  function handleChange(){
    const github_login = document.getElementById('userInput') as HTMLInputElement;
    setUser(github_login.value);
  }

  function handleClick(){

    let url       = `https://api.github.com/users/${user}`;
    let url_repos = `https://api.github.com/users/${user}/repos`;

    fetch(url,{method:'GET'}).then(res => {return res.json()}).then(
      json=>{
        // console.log(json)
        setGitInfo(json)
      }
    )

    fetch(url_repos,{method:'GET'}).then(res => {return res.json()}).then(
      json=>{
        // console.log(json);
        setGitRepos(json);
      }
    )

    console.log(gitInfo)
    gitRepos?.forEach(log_items);
    console.log(user);
    console.log(url, url_repos);
  }
  
  return(
    
    <div className="App">
      <div className="apresentation">
          <img id = "logo" src={logoImg} alt="Github icon by Dave Gandy"/>
          <h1>Github Search</h1>
      </div>
      <div id="SearchBar">
        <div className = 'MainMenu'>
          <form action="">
            <div className ="embed-submit-field">
              <input className = "userInput" id= "userInput" type="text" placeholder="Github User" onChange={handleChange}/>
              <Link to = "/results" id="search-button" onClick={handleClick}>
                  <FiArrowRight/>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Landing;