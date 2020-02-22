import React from "react";

const Pokemon = ({ selected, catchPokemon }) => {

    const { 
        name, 
        isCatched, 
        id, 
        catchDate,
    } = selected;

    const srcImg = `../../../pokemons/${id}.png`;

    return (
        <>
         <div className="card text-center m-3">

            {/* <img src={`${srcImg}`} className="card-img-top" alt={name}/>

                <div className="card-body">
                    <h5 className="card-title">
                        {`${id}. ${name}`}
                    </h5>
                     <p className="card-text">{catchDate}</p>
                </div> */}

                <h1>{name}</h1>

                <button 
                    className={isCatched ? "btn btn-danger disabled" : "btn btn-danger"} 
                    disabled={isCatched ? true : false }
                    onClick={() => catchPokemon(id)}
                >
                    { isCatched ? "Caugth" : "Catch" }
                </button>

            </div>
        </>
    )
}

export default Pokemon