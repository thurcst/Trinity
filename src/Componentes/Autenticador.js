import React, { Component } from 'react'
import { render } from 'react-dom';

export default class Autenticador extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            github_login: ""
        }
        this.autenticar = this.autenticar.bind(this);
    }
    
    autenticar(){
        console.log(this.github_login)
        console.log("Enter recebido")
    }
    
    render() {
        return (
            <div className = "Autenticador">
                <h2>Github Search</h2>
                <input type="text" onChange={(event)=>{this.setState({github_login:event.target.value})}} ></input>
            </div>
        )
    }
}

export {render}