import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Intro from './pages/Intro';
import Sobre from './pages/Sobre';
import Desenvolvimento from './pages/Desenvolvimento';
import TodasAsCoisas from './pages/TodasAsCoisas';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={ Intro } />
    <Route path="/sobre" exact component={ Sobre } />
    <Route path="/desenvolvimento" exact component={ Desenvolvimento } />
    <Route path="/as-coisas" exact component={ TodasAsCoisas } />
  </Switch>
);

export default Routes;
