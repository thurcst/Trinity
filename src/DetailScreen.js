import React, { Component } from 'react'
import './DetailScreen.css'

/*  
O localStorage contém:
    @Trinity/nome
    @Trinity/usuario
    @Trinity/repositories
    @Trinity/followers
    @Trinity/location
    @Trinity/message
    @Trinity/repo{x} onde x é o número de repositórios, de acordo com a quantidade de repositorios em @trinity/repositories

*/



export default class DetailScreen extends Component {
    
    constructor(props){
        super(props);

        let nome = localStorage.getItem('@Trinity/nome');
        let user = localStorage.getItem('@Trinity/usuario');
        let repos = localStorage.getItem('@Trinity/repositories');
        let followers = localStorage.getItem('@Trinity/repositories');
        let location = localStorage.getItem('@Trinity/location');
        let message = localStorage.getItem('@Trinity/message');

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
