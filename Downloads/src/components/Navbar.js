import React from 'react'
import { Link } from 'react-router-dom'
// Create navbar component with links to other pages in the application to the path 'lvl/champion' 'lvl/rookie' 'lvl/ultimate' 'lvl/fresh'
export const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Home
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/lvl/champion">Champion</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/lvl/rookie">Rookie</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/lvl/ultimate">Ultimate</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/lvl/fresh">Fresh</Link>
                </li>
                </ul>
            </div>
        </nav>
    );
};
