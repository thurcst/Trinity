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
        let username = `${this.state}`
        let url = `https://api.github.com/users/${username}`

        fetch(url).then(
            res=>{
                return res.json()
            }
        ).then(
            json=>{
                let usuario = json['login'].value;
            }
        )
    }

    render(){
        return(
            <div className = 'MainMenu'>
                <h1 className = "title" >Github</h1>
                <h2 className = "second_title"> Search </h2>
                <div className = "SearchBox">
                    <input className = "user_input" type="text" placeholder = 'type your git user' onChange={(event)=>{this.setState({github_login:event.target.value})}} ></input>
                    <a className = 'SearchButton' href="/app"> 
                    <FontAwesomeIcon icon={faSearch} className = 'search-btn' onClick={this.autenticar} />
                    </a>
                </div>
            </div>
        )
    }


}
