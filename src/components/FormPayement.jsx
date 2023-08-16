import React from "react";
import './formPayement.css';
import { useDispatch, useSelector } from "react-redux";
import Reserv from "../pagesComponent/Reserv";


const FormPayement = (props) =>{

    const state = useSelector((state) => state.reducer);
    const dispatch = useDispatch();
    return (state) ? (
        <div className="glob-form-stark">
            <div className="glob-payement">
            <div className="glob-form">
                <div className="some-texte">
                    <p id="para-info-reservation">
                        Résevez un ou plusieur places,
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Reprehenderit amet quas voluptas, pariatur, explicabo sus
                        Si vous voulez une fois résérver click sur 
                    </p>
                    <div className="deux-listes-flex">
                    <ul id="ul-listes-jour">
                        <li id="list-jour">Goma - Kirumba <strong>50$</strong></li>
                        <li id="list-jour">Goma - Kasindi <strong>40$</strong></li>
                        <li id="list-jour">Goma - Butembo <strong>20$</strong></li>
                        <li id="list-jour">Goma - Rutshuru <strong>50$</strong></li>
                        <li id="list-jour">Kasindi - Bunia <strong>60$</strong></li>
                        <li id="list-jour">Bunia - Butembo <strong>30$</strong></li>
                        <li id="list-jour">Kisangani - Bunia <strong>70$</strong></li>
                        <li id="list-jour">Kisangani - Goma <strong>60$</strong></li>
                        <li id="list-jour">Sake - Minova <strong>50$</strong></li>
                        <li id="list-jour">Sake - Rubaya <strong>30$</strong></li>
                        <li id="list-jour">Sake - Masisi <strong>20$</strong></li>
                        <li id="list-jour">Sake - Rwindi <strong>40$</strong></li>
                    </ul>
                    <ul id="ul-listes-jour">
                        <li id="list-jour">Goma - Kirumba <strong>40$</strong></li>
                        <li id="list-jour">Goma - Kasindi <strong>20$</strong></li>
                        <li id="list-jour">Goma - Butembo <strong>60$</strong></li>
                        <li id="list-jour">Goma - Rutshuru <strong>20$</strong></li>
                        <li id="list-jour">Kasindi - Bunia <strong>60$</strong></li>
                        <li id="list-jour">Bunia - Butembo <strong>50$</strong></li>
                        <li id="list-jour">Kisangani - Bunia <strong>30$</strong></li>
                        <li id="list-jour">Kisangani - Goma <strong>70$</strong></li>
                        <li id="list-jour">Sake - Minova <strong>30$</strong></li>
                        <li id="list-jour">Sake - Rubaya <strong>40$</strong></li>
                        <li id="list-jour">Sake - Masisi <strong>50$</strong></li>
                        <li id="list-jour">Sake - Rwindi <strong>20$</strong></li>
                    </ul>
                    </div>
                </div>
                <form id="form-payement" action="">
                    <h1 id="titre-payement">PAYEMENT DE RESERVATION</h1>
                    <input type="number" name="place" autoFocus autoComplete="on" required='required' placeholder='Indiquez le nombre de place que vous résérvez'/>
                    <input type="number" name="mode" autoComplete="on" required='required' placeholder='Montant par nombre des places'/>
                    <input type="text" name="mode" autoComplete="on" required='required'placeholder='Mode de payement'/>
                    <button id="button-valider">Valider</button>
                </form>
            </div> 
        </div>
            <button id="button-fermer" onClick={()=>state}>Fermer</button>
        </div>
        ) : ''
}

export default FormPayement;