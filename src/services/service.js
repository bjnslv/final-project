export default class JsonService {
  apiBase = "http://localhost:3000"
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

    const result = pokemons.slice(count, count + 12);
    return result;
  }

  async getPokemon(id) {
    const pokemon = await this.getResource(`/pokemons/${id}`);
    return pokemon;
  }
}


