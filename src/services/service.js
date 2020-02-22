export default class JsonService {
  //TOFIX
  apiBase = "https://3004-b13cbb46-273f-4b3f-a690-ebc8facee863.ws-eu01.gitpod.io";

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


