export default class JsonService {
  apiBase = "http://localhost:3004";

  async getResource(url='') {
    const result = await fetch(`${this.apiBase}${url}`);

    if(!result.ok) {
      throw new Error (`Couldn't fetch ${url}, received ${result.status}`)
    }
    let sas = await result.json();
    return sas;
  }

  async getAllPokemons() {
    const result = await this.getResource(`/pokemons/`);
    return result;
  }

  async getPokemon(id) {
    const pokemon = await this.getResource(`/pokemons/${id}`);
    return pokemon;
  }
}


