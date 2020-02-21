import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = {
    pokemons: []
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'GET_POKEMONS':
            return { 
                pokemons: payload.map(({ id, name }) => ({ 
                    id,
                    name,
                    url: null,
                    isCatched: true
                })) 
            };
        case 'CATCH_POKEMON':
            const newState = { ...state };
            const catched = newState.find(i => i.id === payload.id);
            catched.isCatched = false;
            return newState;
        default:
            return initialState
    }
}

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk),
));
  

export default store;