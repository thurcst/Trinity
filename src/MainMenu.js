import React, { Component } from 'react'
import { render } from 'react-dom';
import './MainMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'

import Routes from './routes';

export default class MainMenu extends Component{

    constructor(props){
        super(props);

        this.state = {
            github_login: ""
        }
        this.autenticar = this.autenticar.bind(this);
    }

    render(){
        return(
            <div className = 'MainMenu'>
                <h1 className = "title" >Github Search</h1>
                <div className = "SearchBox">
                    <input className = "user_input" type="text" placeholder = 'type your git user' onChange={(event)=>{this.setState({github_login:event.target.value})}} ></input>
                    <a className = 'SearchButton' href="#"> 
                    <FontAwesomeIcon icon={faSearch} class = 'search-btn'/>
                    </a>
                </div>
            </div>
        )
    }

    autenticar(){

    }
}

class Input extends React.Component{
    _handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            console.log('do validate');
        }
    }

    render(){
        return <input type="text" onKeyDown={this._handleKeyDown} />
    }
}