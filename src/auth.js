import React, { Component } from 'react'
import './DetailScreen.css'

// Aqui entra toda a lógica do login, enviaremos as chaves para o github, caso haja retorno
// mostraremos os repositórios e os detalhes do usuário requisitado, caso não haja, retornaremos
// 'Notfound'

export const usuario_encontrado = () => {
        let CHECK_MSG = localStorage.getItem('@Trinity/message');   //CHECK_MSG recebe a mensagem salva no localStore, caso ela seja 'not found' enviamos false para a rota
        if(CHECK_MSG == 'Not Found'){

            return  false;
        }
        else{
            return true;
        }

    };