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
        <div className="d-flex flex-wrap w-100 justify-content-center" id="main">
            <div className="card text-center m-3">

                <img src={`${srcImg}`} className="card-img-top" alt={name}/>

                <div className="card-body">
                    <h5 className="card-title">
                        {`${id}. ${name.toUpperCase()}`}
                     </h5>
                    <p className="card-text">
                        {isCatched ? `${`Was caught on ${catchDate.toLocaleString()}`}` : ''}
                    </p>
                    {/* <button 
                    className={isCatched ? "btn btn-danger disabled" : "btn btn-danger"} 
                    disabled={isCatched ? true : false }
                    onClick={() => catchPokemon(id)}
                    >
                    { isCatched ? "Caugth" : "Catch" }
                    </button> */}
                </div>
            </div>
        </div>
         
    )
}

export default Pokemon;