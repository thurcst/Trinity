import React, { Component } from 'react'
import { render } from 'react-dom';
import './MainMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Routes from './routes'


export default class MainMenu extends Component{
    // Classe do menu principal, contendo todas as funções e roteiros de execução (scripts)
    constructor(props){
        super(props);
        this.state = {
            github_login: ""
        }
        this.autenticar = this.autenticar.bind(this);
    }

    autenticar(){
        // Função autenticar envia o username dado pelo usuário para a API do github, recebendo suas informações ou um 'not found' em message
        localStorage.clear(); // sempre limpar antes de autenticar novamente para não ficar informação de um outro usuário pesquisado
        let username    = `${this.state.github_login}`
        let url         = `https://api.github.com/users/${username}`
        let url_repos   = `https://api.github.com/users/${username}/repos`
        fetch(url).then(res=>{return res.json()}).then(                 // Aqui fazemos o fetch das informações do usuário, recebendo todas as infos importantes
            json=>{
                localStorage.setItem('@Trinity/message', json.message);
                localStorage.setItem('@Trinity/nome', json.name);
                localStorage.setItem('@Trinity/usuario', json.login);
                localStorage.setItem('@Trinity/repositories',json.public_repos);
                localStorage.setItem('@Trinity/followers', json.followers);
                localStorage.setItem('@Trinity/location',json.location);
                localStorage.setItem('@Trinity/avatar', json.avatar_url);
            }
        )
        fetch(url_repos).then(res=>{return res.json()}).then(
            json=>{
                // Aqui armazenamos os repositórios, cada um identificado pelo número 0 a x, de acordo com a quantidade de repositórios.
                let quant_repos = localStorage.getItem('@Trinity/repositories');
                for (let i = 0; i < quant_repos; i++) {
                    localStorage.setItem(`@Trinity/repo${i}`,json[i].name);
                }
            }
        )
    }
    // No render ficará a tela inteira de pesquisa, a animação do botão foi feita no MainMenu.css
    render(){
        return(
            <div className = 'MainMenu'>
                <h1 className = "title" > Github </h1>
                <h2 className = "second_title"> Search </h2>
                <div className = "SearchBox">
                    <input className = "user_input" type = "text" placeholder = 'type your git user' onChange = {(event)=>{this.setState({github_login:event.target.value})}} />
                    <button className = 'SearchButton'  onClick = {this.autenticar} > 
                        <FontAwesomeIcon icon   = {faSearch} className  = 'search-btn'/>
                    </button>
                </div>
            </div>
        )
    }
}
