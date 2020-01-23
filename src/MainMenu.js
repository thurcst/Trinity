import React, { Component } from 'react'
import { render } from 'react-dom';
import './MainMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default class MainMenu extends Component{

    constructor(props){
        super(props);

        this.state = {
            github_login: ""
            
        }
        
        this.autenticar = this.autenticar.bind(this);
    }

    autenticar(){
        console.log("Entrei");
        console.log(this.state.github_login);
        let username    = `${this.state.github_login}`
        console.log(username);
        let url         = `https://api.github.com/users/${username}`
        let url_repos   = `https://api.github.com/users/${username}/repos`
        fetch(url).then(res=>{return res.json()}).then(
            json=>{
                localStorage.setItem('@Trinity/message', json.message);
                localStorage.setItem('@Trinity/nome', json.name);
                localStorage.setItem('@Trinity/usuario', json.login);
                localStorage.setItem('@Trinity/repositories',json.public_repos);
                localStorage.setItem('@Trinity/followers', json.followers);
                localStorage.setItem('@Trinity/location',json.location);
            }
        )
        fetch(url_repos).then(res=>{return res.json()}).then(
            json=>{
                let quant_repos = localStorage.getItem('@Trinity/repositories');
                for (let i = 0; i < quant_repos; i++) {
                    localStorage.setItem(`@Trinity/repo${i}`,json[i].name);
                    
                }
            }
        )
    }

    render(){
        return(
            <div className = 'MainMenu'>
                <h1 className = "title" > Github </h1>
                <h2 className = "second_title"> Search </h2>
                <div className = "SearchBox">
                    <input className = "user_input" type = "text" placeholder = 'type your git user' onChange = {(event)=>{this.setState({github_login:event.target.value})}} />
                    <button className = 'SearchButton'  onClick = {this.autenticar}> 
                        <FontAwesomeIcon icon   = {faSearch} className  = 'search-btn'/>
                    </button>
                </div>
            </div>
        )
    }
}
