import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-danger sticky-top">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <button type="button" className="btn btn-danger">
                <NavLink exact to="/"className="btn btn-outline-light my-2 my-sm-0 margin">
                  Home
                </NavLink>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-danger">
                <NavLink exact to="/collection"className="btn btn-outline-light my-2 my-sm-0 margin">
                  Collection
                </NavLink>
              </button>
            </li>
          </ul>
          <h1 className="navbar-brand mb-0 text-light">Pokedex</h1>
        </div>
      </nav>
    );
  }
}