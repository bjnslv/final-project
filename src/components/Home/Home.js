import React from "react";
import Card from "../Card/CardContainer";
import "./Home"


const Home = ({ pokemons }) => {
  
  const elements = pokemons.map(item => {
    return <Card {...item} key={item.id}/>;
  });

  return (
    <div className="d-flex flex-wrap w-100 justify-content-center" id="main">
    {elements}
    </div>
  )
}

export default Home;