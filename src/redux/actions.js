import JsonService from "../services/service";

const service = new JsonService();

export const getPokemons = count => async (dispatch, getState) => {
    const pokemons = await service.getAllPokemons(count);
    dispatch({
        type: 'GET_POKEMONS',
        payload: pokemons
    })
}

export const catchPokemon = id => ({
    type: 'CATCH_POKEMON',
    payload: id
})

export const selectPokemon = desc => ({
    type: 'SELECT_POKEMON',
    payload: desc
})