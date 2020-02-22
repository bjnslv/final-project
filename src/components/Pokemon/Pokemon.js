import React from "react";

const Pokemon = ({ name, 
    isCatched, 
    id, 
    catchDate}) => {
        
    const srcImg = `../../../pokemons/${id}.png`;

    return (
        <>
         <div className="card text-center m-3">
            <img src={`${srcImg}`} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">
                    {`${id}. ${name}`}
                </h5>
                 <p className="card-text">{catchDate}</p>
                </div>
            </div>
        </>
    )
}

export default Pokemon