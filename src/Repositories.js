import React, { Component } from 'react'

export default class Repositories extends Component {
    
    constructor(props){
        super(props);
        
        var repository 
        let repos
        var obj;
        
        this.state = {
            repos: localStorage.getItem('@Trinity/repositories'), // Recebendo a quantidade de repositórios antes salva no localStorage
            repository: [],
        }
        console.log(this.state.repos)
        console.log(this.state)
        

    }



    render() {
        return (
            <div>
                {/* {this.state.repository.map( repository =>(

                    <div key={repository.id}>
                        <div>
                            <h1>
                                {repository.name}
                            </h1>
                        </div>
                        <div>
                            {repository.forks}
                        </div>
                    </div>
                ))} */}
            </div>
        )
    }
}
