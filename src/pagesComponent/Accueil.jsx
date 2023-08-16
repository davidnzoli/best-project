import React from "react";
import './accueil.css';
import { NavLink } from "react-router-dom";

const Accueil = () => {
    return <React.Fragment>
        <div className="one-blog">
            <div className="some-texte-one">
                <h1 id="titre-accueil">Voyagez dans des bonnes conditions</h1>
                <p id="para-accueil">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                    blanditiis perspiciatis esse aut cupiditate. Facilis laudantium,
                    fugit aperiam aliquam
                    error praesentium possimus voluptas eveniet maiores! Similique
                    quia praesentium voluptatum recusandae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                    blanditiis perspiciatis esse aut cupiditate. Facilis laudantium,
                    fugit aperiam aliquam
                    error praesentium possimus voluptas eveniet maiores! Similique
                    quia praesentium voluptatum recusandae
                   
                </p>
            </div>
            <div className="glob-annimation-image-accueil">
                <div className="annimation-image-accueil">
                    <img src="./img-e.jpg" alt="" id="image" />  
                    <img src="./img-r.jpg" alt="" id="image"/>
                    <img src="./img-t.jpg" alt="" id="image" />
                    <img src="./img-j.jpg" alt="" id="image"/>
                    <div className="para">
                        <p id="para-image">Reservons nos place pour nos voyage,
                        faisons un voyage des heros avec lagence de Goma</p>
                </div>  
                </div>  
            </div>
        </div>
        <div className="two-blog">
        <div className="two">
            <div className="two-image-glob">
                <img src="./img-j.jpg" alt="image" id="image-two" />
                <div className="texte-two">
                    <p id="para-two">
                        Vous etes chercher, les urgences, précipiter le voyage, on est là rien que pour vous
                        Voyager dans des bonnes condition, parmi l'objectif de l'entréprise
                    </p>
                </div>
            </div>
            <div className="some-texte-two">
            <h1 id="titre-accueil-two">Voyagez dans des bonnes conditions</h1>
                <p id="para-accueil-two">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                    blanditiis perspiciatis esse aut cupiditate. Facilis laudantium,
                    fugit aperiam aliquam
                    error praesentium possimus voluptas eveniet maiores! Similique
                    quia praesentium voluptatum recusandae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                    blanditiis perspiciatis esse aut cupiditate. Facilis laudantium,
                    fugit aperiam aliquam
                    error praesentium possimus voluptas eveniet maiores! Similique
                    quia praesentium voluptatum recusandae
                </p>
                <div className="btn-link">
                    <button><NavLink to='/reservation' id='btn-link-two'>Résérvez</NavLink></button>
                    <button><NavLink to='/program' id='btn-link-two'>Voir le programes</NavLink></button>
                </div>
            </div>
        </div>
        <div className="glog-stark"><img src="./img-p.jpg" id="stark-two" alt="" /></div>
        </div>
        
    </React.Fragment>
}

export default Accueil;