export default class JsonService {
  //TOFIX
  apiBase = "https://3004-f4ed54bb-ed40-475e-8674-f5f69070dc9c.ws-eu01.gitpod.io";

  async getResource(url='') {
    const result = await fetch(`${this.apiBase}${url}`);
    
    if(!result.ok) {
      throw new Error (`Couldn't fetch ${url}, received ${result.status}`)
    }
    
    let sas = await result.json();
    return sas;
  }

  async getAllPokemons(count = 0) {
    const pokemons = await this.getResource(`/pokemons/`);

    const result = pokemons.slice(count, count + 10);
    return result;
  }

  async getPokemon(id) {
    const pokemon = await this.getResource(`/pokemons/${id}`);
    return pokemon;
  }
}


