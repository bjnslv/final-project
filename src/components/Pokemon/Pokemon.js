import React, { Component } from "react";

class Pokemon extends Component {
  
  render() {
    const { name, isCaught, id } = this.props;
    const srcImg = `../../../pokemons/${id}.png`;
    return (
      <div className="card text-center m-3 w-25">
        <img
            src={id <= 720 ? srcImg : "https://www.meme-arsenal.com/memes/5a4f8121036799af5a8a54c71f349346.jpg"}
            alt={name}
            className="card-img-top"
          />
        <div className="card-body">
            <h5 className="card-title">{`${id}. ${111}`}</h5>
        <button class="btn btn-danger">{isCaught ? "Caugth" : "Catch"}</button>
        </div>
      </div>
      
    )
  }
}

export default Pokemon