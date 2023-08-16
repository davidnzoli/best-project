import React from "react";
import { NavLink } from "react-router-dom";
import './program.css';

const Program = () =>{
    const tab = [
        {
            titre: 'Programe et information de payement',
            designation : [ {
                time:'7h30 / 13h00',
                sortie:'Goma',
                destination:'sake',
                bus:'gros bus',
                montant:'10000$'
                },
                {
                time:'7h30 / 17h00',
                sortie:'Goma',
                destination:'sake',
                bus:'gros bus',
                montant:'10000$'
                },
                {
                time:'7h30 / 16h30',
                sortie:'Sake',
                destination:'Goma',
                bus:'gros bus',
                montant:'10000$'
                },
                {
                time:'7h30 / 13h00',
                sortie:'Minova',
                destination:'sake',
                bus:'gros bus',
                montant:'10000$'
                },
                {
                time:'7h30 / 13h00',
                sortie:'Goma',
                destination:'sake',
                bus:'gros bus',
                montant:'10000$'
                },
                {
                time:'7h30 / 14h00',
                sortie:'Goma',
                destination:'sake',
                bus:'gros bus',
                montant:'10000$'
                },
                {
                time:'7h30 / 17h30',
                sortie:'Goma',
                destination:'sake',
                bus:'gros bus',
                montant:'10000$'
                },
                {
                time:'7h30 / 16h30',
                sortie:'Bunia',
                destination:'Kisangani',
                bus:'gros bus',
                montant:'10000$'
                },
                {
                time:'7h30 / 18h30',
                sortie:'Goma',
                destination:'sake',
                bus:'gros bus',
                montant:'10000$'
                },
                {
                time:'7h30 / 15h00',
                sortie:'Goma',
                destination:'sake',
                bus:'gros bus',
                montant:'10000$'
                },
                {
                time:'7h30 / 14h00',
                sortie:'Goma',
                destination:'sake',
                bus:'gros bus',
                montant:'10000$'
                },
                {
                time:'7h30',
                sortie:'Goma',
                destination:'sake',
                bus:'gros bus',
                montant:'10000$'
                },
                {
                time:'7h30 / 14h00',
                sortie:'Goma',
                destination:'sake',
                bus:'gros bus',
                montant:'10000$'
                },
                {
                time:'7h30 / 15h00',
                sortie:'Goma',
                destination:'sake',
                bus:'gros bus',
                montant:'5000cc'
                },
                {
                time:'7h30 / 14h00',
                sortie:'Goma',
                destination:'sake',
                bus:'gros bus',
                montant:'8000fc'
                },
                {
                time:'7h30 / 14h00',
                sortie:'Minova',
                destination:'sake',
                bus:'Voiture',
                montant:'10000$'
                },
                {
                time:'7h30 / 13h00',
                sortie:'Kisangani',
                destination:'sake',
                bus:'gros bus',
                montant:'10000$'
                },
            ]
        }
      
    ]
    return <React.Fragment>
        <div className="glob-program">
            <div className="glob-program-el">
            <h1 id="titre-program">Programme de voyage</h1>
            <div className="one-section-program">
                <div className="liste-jour-voyage">
                    <h2 id="some-texte-present">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Reprehenderit amet quas voluptas, pariatur, explicabo sus
                        cipit repudiandae voluptate consectetur
                        maiores atque ratione qui aliquam perferendis, architecto
                         le voyage sont programer pour tous les jours sauf le dimanche.
                    </h2>
                    <ul id="ul-listes-jour">
                        <li id="list-jour">Lundi</li>
                        <li id="list-jour">Mardi</li>
                        <li id="list-jour">Mercredi</li>
                        <li id="list-jour">Jeudi</li>
                        <li id="list-jour">Vendredi</li>
                        <li id="list-jour">Samedi</li>
                    </ul>
                </div>
                <div className="some-texte-reservation-click">
                    <p id="para-info-reservation">
                        Résevez un ou plusieur places,
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Reprehenderit amet quas voluptas, pariatur, explicabo sus
                        Si vous voulez une fois résérver click sur 
                        <NavLink to='/reservation' id="link-reserv"> Rérvé</NavLink>
                    </p>
                    <div className="deux-listes-flex">
                    <ul id="ul-listes-jour">
                        <li id="list-jour">Goma - Kirumba </li>
                        <li id="list-jour">Goma - Kasindi </li>
                        <li id="list-jour">Goma - Butembo </li>
                        <li id="list-jour">Goma - Rutshuru </li>
                        <li id="list-jour">Kasindi - Bunia </li>
                        <li id="list-jour">Bunia - Butembo </li>
                        <li id="list-jour">Kisangani - Bunia </li>
                        <li id="list-jour">Kisangani - Goma </li>
                        <li id="list-jour">Sake - Minova </li>
                        <li id="list-jour">Sake - Rubaya </li>
                        <li id="list-jour">Sake - Masisi </li>
                        <li id="list-jour">Sake - Rwindi</li>
                    </ul>
                    <ul id="ul-listes-jour">
                        <li id="list-jour">Goma - Kirumba </li>
                        <li id="list-jour">Goma - Kasindi </li>
                        <li id="list-jour">Goma - Butembo </li>
                        <li id="list-jour">Goma - Rutshuru </li>
                        <li id="list-jour">Kasindi - Bunia </li>
                        <li id="list-jour">Bunia - Butembo </li>
                        <li id="list-jour">Kisangani - Bunia </li>
                        <li id="list-jour">Kisangani - Goma </li>
                        <li id="list-jour">Sake - Minova </li>
                        <li id="list-jour">Sake - Rubaya </li>
                        <li id="list-jour">Sake - Masisi </li>
                        <li id="list-jour">Sake - Rwindi </li>
                    </ul>
                    </div>
                </div>
            </div>
                
                    {tab.map((el)=> {
                        return (
                            <>
                            <div className="two-section-program">
                                <h1 id="titre-program">{el.titre}</h1>
                                <table id="table">
                                    <tr>
                                        <th>Heure .D/A</th>
                                        <th>Sortie</th>
                                        <th>Déstination</th>
                                        <th>Bus</th>
                                        <th>Montant pour trajet</th>
                                    </tr>
                                    
                                        {el.designation.map((items)=>{
                                            return(
                                                <>
                                                <tr>
                                                    <td>{items.time}</td>
                                                    <td>{items.sortie}</td>
                                                    <td>{items.destination}</td>
                                                    <td>{items.bus}</td>
                                                    <td>{items.montant}</td>
                                                </tr>
                                                </>
                                            )
                                        })}
                                    
                                </table>

                            </div>
                            </>)})}
            </div>
        </div>
    </React.Fragment>
}

export default Program;