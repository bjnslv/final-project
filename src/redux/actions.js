import JsonService from "../services/service";

const service = new JsonService();

export const test = () => ({ type: 'TEST' });

export const getPokemons = () => async (dispatch, getState) => {
    const pokemons = await service.getAllPokemons();
    dispatch({
        type: 'GET_POKEMONS',
        payload: pokemons
    });
};

export const catchPokemon = (id) => ({
    type: 'CATCH_POKEMON',
    payload: id
})