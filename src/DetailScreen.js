import React, { Component } from 'react'
import './DetailScreen.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBoxOpen,faMapMarkerAlt, faStar, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import Repositories from './Repositories'
import MainMenu from './MainMenu'

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
        let nome;
        let user;
        let repos;
        var repositories;

        this.state = {
            // Recebendo de volta todos os valores salvos no localStorage
            nome            : localStorage.getItem('@Trinity/nome'),
            user            : localStorage.getItem('@Trinity/usuario'),
            repos           : localStorage.getItem('@Trinity/repositories'),
            followers       : localStorage.getItem('@Trinity/followers'),
            location        : localStorage.getItem('@Trinity/location'),
            message         : localStorage.getItem('@Trinity/message'),
            avatar          : localStorage.getItem('@Trinity/avatar'),
            repositories    : new Array(repos)

        }
        /*
        #### DEBUG: 
        
        console.log("Nome: " + this.state.nome);
        console.log("Usuário: " + this.state.user);
        console.log(this.state.avatar)
         */        
    }

    // Toda tela de detalhes está aqui, a caixa do usuário, a barra de titulo, barra de pesquisa e onde ficariam os repositórios
    render() {
        return (
            <div className = 'detalhes'> 
                        <div className = 'personal_info'>
                            <img className = 'img' src={this.state.avatar} alt="imagem_usuário"/> 
                            <h3 className = 'Nome'>
                                @{this.state.user}
                            </h3>
                            
                            <p className= 'location'>
                                <FontAwesomeIcon icon   = {faMapMarkerAlt} className  = 'search-btn'/> {this.state.location}
                            </p>
                            <p className = 'repositories'>
                                <FontAwesomeIcon icon   = {faBoxOpen} className  = 'search-btn'/> {this.state.repos}
                            </p>
                            <p className = 'followers'>
                                <FontAwesomeIcon icon   = {faUserFriends} className  = 'search-btn'/> {this.state.followers}
                            </p>
                        </div>
                    <div>
                        <h1>
                            {this.state.repositories.map(repositories => <div> {repositories} </div>)} 
                        </h1>
                    </div>
                        <div className = 'titulo'>
                            <h1 className = 'Github'>
                                Github
                            </h1>
                            <h2 className = 'Search'>
                                Search
                            </h2>
                        </div>
                        <div className = 'search_screen'>
                            <div className = 'search_box'>
                                <input className = 'search_name' type='text' placeholder='type your git user' />
                                <button className = 'search_button' onClick={MainMenu.autenticar} ><FontAwesomeIcon icon   = {faSearch} className  = 'search-btn'/></button>
                            </div>    
                        </div>
                        <div className = 'repo'>
                            <h1> (Repositório viria aqui)</h1>
                            <p> 
                            <FontAwesomeIcon icon   = {faStar} className  = 'search-btn'/> - Qtd. Estrelas
                            </p>
                        </div>
            </div>

        )
    }
}
