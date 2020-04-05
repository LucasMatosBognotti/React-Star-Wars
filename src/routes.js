import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import People from './pages/Result/people';
import Planet from './pages/Result/planet';
import Films from './pages/Result/films';
import Species from './pages/Result/species';
import Vehicles from './pages/Result/vehicles';
import StarShips from './pages/Result/starships';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/people/:people" component={People} />
        <Route path="/planets/:planets" component={Planet} />
        <Route path="/films/:films" component={Films} />
        <Route path="/species/:species" component={Species} />
        <Route path="/vehicles/:vehicles" component={Vehicles} />
        <Route path="/starships/:starships" component={StarShips} />
      </Switch>
    </BrowserRouter>
  );
}