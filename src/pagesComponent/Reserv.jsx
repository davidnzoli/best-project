import React from "react";
import './reserv.css';
import FormPayement from "../components/FormPayement";
import { useDispatch, useSelector } from "react-redux";

const Reserv = () => {

    const state = useSelector((state) => state.reducer);

    const dispatch = useDispatch();

    const change=()=>{
        return dispatch({type:"affichePopup/affichage"});
    }

    if(!state){
        document.body.classList.add('scroll')
    } else{
        document.body.classList.remove('scroll')
    }
    return <React.Fragment>
        <div className="form-reserv">
            <h1 id="titre-reserv">IDENTIFIEZ-VOUS</h1><br />
            <form id="form" action="" >
                <div className="champ-left">
                    <input type="text" name="nom" autoComplete="on" required='required' placeholder='Nom' autoFocus='autofocus'/>
                    <input type="text" name="prenom" autoComplete="on" required='required' placeholder='Prénom' />
                    <select name="age">
                        <option>Quel est i'interval de ton age</option>
                        <option value='adulte'>18ans à 25ans</option>
                        <option value='adulte'>26ans à 30ans</option>
                        <option value='adulte'>31ans à 40ans</option>
                        <option value='adulte'>46ans à 50ans</option>
                        <option value='adulte'>51ans à 60ans</option>
                    </select>
                    <input type="number" name="numero" autoComplete="on" required='required' placeholder='Téléphone' />
                    <input type="date" name="date" autoComplete="on" required='required' placeholder='Mettre la date'/>
                    <input type="text" name="mode" autoComplete="on" required='required' placeholder='Mode de résérvation' />
                </div>
                <div className="champ-rigth">
                    <textarea placeholder='Adresse' name="adresse" />
                </div>
            </form>
            <button id="btn" onClick={()=>change()} >Valider</button>
            <FormPayement />
        </div>
    </React.Fragment>
}

export default Reserv;