import React from "react";
import Card from "../Card/Card";

const Collection = ({ pokemons, selectPokemon }) => {
 const elements = pokemons.map(item => {
    return <Card 
        {...item} 
        key={item.id}
        selectPokemon= {(desc) => selectPokemon(desc)}
        />;
  });

  return (
    <div className="d-flex flex-wrap w-100 justify-content-center" id="main">
    {elements}
    </div>
  )
}

export default Collection;
