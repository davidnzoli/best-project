import React from "react";
import { NavLink } from "react-router-dom";
import { tabChemin } from './components/chemin';
import './navbar.css';
import Header from "./components/Header";

const Navbar = () => {
    return <React.Fragment>
       <Header />
        <div className="Navbar-Menu">
                <ul id="navbar-lists">
                    {tabChemin.map((el)=>{
                        return <>
                        <li id="listes">
                            <NavLink to={el.route} id="link">{el.element}</NavLink>
                        </li>
                        </>
                    })}  
                </ul> 
        </div>
    </React.Fragment>
}

export default Navbar;