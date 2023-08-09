import React from "react";
import './footer.css'
import { NavLink } from "react-router-dom";

const Footer = ({table}) =>{
    return <React.Fragment>
        <div className="global-footer">
            <div className="one-footer">
            <div className="left-glob">
                <div className="menu-footer" id="menu-footer">
                    {table.map((el)=>{
                        return <>
                            <NavLink to={el.route} id="link-footer">{el.element}</NavLink>
                        </>
                    })}
                </div>
                <div className="logo-footer">
                        <h1 id="titre-reseaux">Réseaux</h1>
                        <div className="logo">
                            <img src="./facebook.png" alt="icon" />
                            <img src="./twiter.png" alt="icon" />
                            <img src="./mail.png" alt="icon" />
                            <img src="./telegram.png" alt="icon" />
                            <img src="./link.png" alt="icon" />
                        </div>
                </div>
            </div>
            <div className="rigth-glob">
                <p id="para-rigth-glob-footer">
                    <img src="./local.png" alt="icon" />
                    localisation : <br />
                    Nord-kivu/ Goma .v, <br />
                    Q/ le volcan ,<br /> cercle sportif, Rdc
                </p>
                <p id="para-rigth-glob-footer">
                    <img src="./phone.png" alt="icon" />
                    Téléphone : <br />
                    (+243)995-157-300 <br />
                    (+243)995-157-300
                </p>
            </div>
            </div>
            <div className="two-footer">
                <p id="copy">Copyrigth © all rigth reserved</p>
            </div>
        </div>
    </React.Fragment>
}

export default Footer;