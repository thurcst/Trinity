import React, { useEffect, useState } from 'react';

import {
    FaUserFriends,
    FaExternalLinkSquareAlt,
    FaEye,
    FaAngleLeft,
    FaUserAlt,
    FaCamera,
    FaBook,
    FaInfoCircle
        } from 'react-icons/fa';
        
import { CgGitFork } from 'react-icons/cg';

import { useLocation, Link } from 'react-router-dom';

import '../styles/search_screen.css'

import {SearchBar} from './landing'

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
    html_url:     string;
  }
  
  interface reposJson{
    name:           string;
    watchers:       number;
    watchers_count: number;
    forks:          number;
    fork:           boolean;
    created_at:     string;
    html_url:            string;
  }

  
  function Results(){
      function Card(){
          return(
              <div className="card">
                  <div className="header">
                      <div className="back-button">
                          <Link to ='/'>
                            <FaAngleLeft color = 'white' id = "back"/>
                          </Link>
                      </div>
                      <a href={gitInfo.html_url} className="profile">
                          <FaUserAlt color = 'white'/>
                      </a>
                      <div className="main">
                          <div className="image">
                              <img id = "avatar" src={gitInfo.avatar_url} alt="User"/>
                          </div>
                          <h3 className="name">{gitInfo.name}</h3>
                          <h2 className="login">/{gitInfo.login}</h2>
                          <h4 className="location">{gitInfo.location}</h4>
                      </div>
                  </div>
                  <div className="content">
                      <div className="left">
                        <div className="about-container">
                            <h3 className="about">Bio</h3>
                            <p className="bioText">{gitInfo.bio}</p>
                        </div>
                      </div>
                      <div className="right">
                          <div>
                            <h3 className="number">{ gitInfo.public_repos }</h3>
                            <h3 className="number-title">Repos</h3>
                          </div>
                          <div>
                            <h3 className="number">{ gitInfo.followers }</h3>
                            <h3 className="number-title">Followers</h3>
                          </div>
                          <div>
                            <h3 className="number">{ gitInfo.following }</h3>
                            <h3 className="number-title">Following</h3>
                          </div>
                      </div>
                  </div>
              </div>
          )
      }
    const [gitInfo, setGitInfo] = useState<userJson>({} as userJson);
    const [gitRepos, setGitRepos] = useState<reposJson[]>([]);
    const { state } = useLocation();

    useEffect(() => {
        let url       = `https://api.github.com/users/${state}`;
        let url_repos = `https://api.github.com/users/${state}/repos`;
    
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

    }, [])

    return(
        <div className = "container">
            <div className="cardContainer">
                <Card/>
            </div>

            <div className = "userRepos">
                {gitRepos.map(repo => (
                    <div className="repoInfo">
                        <strong className="repoName">{repo.name}</strong>
                        <div className="icons">

                            <div className="forks">
                                <p className="repoName"> <CgGitFork/> {repo.forks} </p>
                            </div>
                            <p className="watchersText"> <FaEye/> {repo.watchers_count} </p>
                            <a id="ref" href={repo.html_url} > <FaExternalLinkSquareAlt/> </a>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Results;