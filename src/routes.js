import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { usuario_encontrado } from "./auth.js";
import './routes.css'
import './DetailScreen'
import MainMenu from "./MainMenu";
import DetailScreen from "./DetailScreen";

const ROTA_PRIVADA = ({ component: Component, ...rest}) => (
    <Route 
        {...rest} 
            render={props =>(
                usuario_encontrado() ? (                         // Se o usuário estiver logado, damos a ele os componentes necessários encontrados em props
                     <Component {...props} />
                ) : (                                           // Caso não esteja, o enviamos de volta para a tela inicial, com todo o histórico salvo
                    <Redirect to={{ pathname: '/', state: { from: props.location}}}/>
                )
            )
        }
    />
);

const Routes = () => ( //Rota publica e privada, rota publica é a tela inicial, onde se recebe o nome do usuário do github, a privada é a tela de detalhes e onde ficará os repositórios
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component = { () => {return(
                <div>
                    <MainMenu className = 'first-Screen'></MainMenu>
                </div>
                )
                }} 
            />  
            <ROTA_PRIVADA path="/app" component={() => {
                return(
                    <div>
                        <DetailScreen/>
                    </div>
                )
            }
            }/>
        </Switch>
    </BrowserRouter>

);

export default Routes;