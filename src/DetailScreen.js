import React, { Component } from 'react'
import './DetailScreen.css'

export default class DetailScreen extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            github_login: ""
        }
    }

    render() {
        return (
            <div className = 'detalhes'>
                <title className = 'titulo_pag'> Usuário </title>
                <h1 className = 'Titulo'>
                    Página em construção
                </h1>
            </div>

        )
    }
}
