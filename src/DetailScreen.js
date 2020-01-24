import React, { Component } from 'react'
import './DetailScreen.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBoxOpen,faLocationArrow, faStar } from '@fortawesome/free-solid-svg-icons'

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
            nome            : localStorage.getItem('@Trinity/nome'),
            user            : localStorage.getItem('@Trinity/usuario'),
            repos           : localStorage.getItem('@Trinity/repositories'),
            followers       : localStorage.getItem('@Trinity/followers'),
            location        : localStorage.getItem('@Trinity/location'),
            message         : localStorage.getItem('@Trinity/message'),
            avatar          : localStorage.getItem('@Trinity/avatar'),
            repositories    : new Array(repos)

        }
        
        console.log("Nome: " + this.state.nome);
        console.log("Usuário: " + this.state.user);
        console.log(this.state.avatar)
        for (let i = 0; i < repos ; i++) {
            repositories[i] = localStorage.getItem(`@Trinity/repo${i}`);
            
        }
    }


    render() {
        return (
            <div className = 'detalhes'>
                        <div className = 'personal_info'>
                            <img className = 'img' src={this.state.avatar} alt="imagem_usuário"/> 
                            <h3 className = 'Nome'>
                                @{this.state.user}
                            </h3>
                            <p className = 'repositories'>
                                <FontAwesomeIcon icon   = {faBoxOpen} className  = 'search-btn'/> - {this.state.repos}
                            </p>
                            
                            <p className= 'location'>
                                <FontAwesomeIcon icon   = {faLocationArrow} className  = 'search-btn'/> - {this.state.location}
                            </p>
                            <p className = 'followers'>
                                <FontAwesomeIcon icon   = {faStar} className  = 'search-btn'/> - {this.state.followers}
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
                                <button className = 'search_button' ><FontAwesomeIcon icon   = {faSearch} className  = 'search-btn'/></button>
                            </div>    
                        </div>
            </div>

        )
    }
}
