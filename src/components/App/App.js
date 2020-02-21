import React from "react";
import{ Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from "../Home/HomeContainer";
import Collection from "../Collection/Collection"
import Nav from "../Nav/Nav";
import Pokemon from "../Pokemon/Pokemon";

import { getPokemons } from "../../redux/actions";

import store from '../../redux/reducer';

store.dispatch(getPokemons());

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>  

        <Route path="/" exact render = {
          () => <Home />
        }/>

        <Route path="/collection" render={
          () => <Collection />
        }/>

        <Route path="/pokemon/:name" render={
          () => <Pokemon />
        } />

        </Switch>
      </div>
    </Router>
  )
}

export default App;