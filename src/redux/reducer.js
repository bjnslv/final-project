import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = {
    pokemons: [],
    count: 0,
    selected: null
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'GET_POKEMONS':
            const loaded = payload.map(({ id, name }) => ({ 
                        id,
                        name,
                        isCatched: false,
                        catchDate: null
                    }));
            const result = {
                pokemons:  [...state.pokemons, ...loaded ],
                count: state.count + 12
            }
            return result;

        case 'CATCH_POKEMON':
            return { 
                ...state,
                pokemons: state.pokemons.map(item => {
                const { id, name, isCatched, catchDate} = item;
                    return id === payload ? {
                        id,
                        name,
                        isCatched: true,
                        catchDate: new Date()
                    } : item
                })
            }

        case 'SELECT_POKEMON':
            return { ...state, selected: payload };
        default:
            return initialState
    }
}

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk),
));
  

export default store;