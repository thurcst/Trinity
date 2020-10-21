import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/landing'
import Results from './pages/search-screen'

function Routes(){
    return(
      <BrowserRouter>
        <Route path="/" exact component={Landing}/>
        <Route path="/results" component={Results}/>
      </BrowserRouter>
    );
}

export default Routes;