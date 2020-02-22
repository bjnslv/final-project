import React, { useEffect } from "react";
import{ Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from "../Home/HomeContainer";
import Collection from "../Collection/CollectionContainer"
import Nav from "../Nav/Nav";
import Pokemon from "../Pokemon/PokemonContainer";
import { getPokemons } from "../../redux/actions";
import store from '../../redux/reducer';

const App = () => {
    useEffect(() => {
        store.dispatch(getPokemons(0));
    }, []);

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
    );
}

export default App;