import React from "react";
import Card from "../Card/Card";
import "./Home";

const Home = ({ pokemons, 
    catchPokemon, 
    loadMore, 
    count, 
    selectPokemon }) => {

  const elements = pokemons.map(item => {
    return <Card 
        {...item} 
        key={item.id}
        catchPokemon= {() => catchPokemon(item.id)}
        selectPokemon= {(desc) => selectPokemon(desc)}
    />;
});
    
  return (
    <div className="d-flex flex-wrap w-100 justify-content-center" id="main">
        {elements}
            <div className="d-flex flex-wrap w-100 justify-content-center" id="main">
                <button 
                    className="btn btn-danger"
                    onClick={() => loadMore(count)}
            >
                Load more
            </button>
        </div>
    </div>
  )
}

export default Home;