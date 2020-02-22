export default class JsonService {
  //TOFIX
  apiBase = "http://localhost:3004";

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


