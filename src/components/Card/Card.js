import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, isCatched, id, catchPokemon}) => {
  const srcImg = `../../../pokemons/${id}.png`;

  return (
    <div className="card text-center m-3">
      <Link to={`/pokemon/${id}`}>

        <img
          src={id <= 720 ? srcImg : "https://www.meme-arsenal.com/memes/5a4f8121036799af5a8a54c71f349346.jpg"}
          alt={name}
          className="card-img-top"
        />

      </Link>
        <div className="card-body">
          <h5 className="card-title">
            {`${id}. ${name.toUpperCase()}`}
          </h5>
          <button 
            className={isCatched ? "btn btn-primary disabled" : "btn btn-danger"} 
            disabled={isCatched ? true: false }
            onClick={(e) => catchPokemon()}
          >
            {isCatched ? "Caugth" : "Catch"}
          </button>
        </div>
      </div>
  );
}

export default Card;
