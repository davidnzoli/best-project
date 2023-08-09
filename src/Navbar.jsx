import React from "react";
import { NavLink } from "react-router-dom";
import { tabChemin } from './components/chemin';
import './navbar.css';

const Navbar = () => {
    return <React.Fragment>
        <div className="header">
            <h1 id="titre-header">AGENCE DE GOMA <small>accueil-maps</small></h1>
        </div>

        <div className="Navbar-Menu">
                <ul id="navbar-lists">
                    {tabChemin.map((el)=>{
                        return <>
                        <li id="listes">
                            <NavLink to={el.route} id="link">{el.element}</NavLink>
                        </li>
                        </>
                    })}
                    <button id="btn-bar">Admin</button>  
                </ul> 
        </div>
    </React.Fragment>
}

export default Navbar;