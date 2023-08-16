import React from "react";
import { useState } from "react";
import './login.css';

const Login = (props) =>{
    const [state, setState] = useState(false)
    if(state == true){
        document.body.classList.add('scroll')
    } else{
        document.body.classList.remove('scroll')
    }

    return (props.login) ? ( <div className="login" ref={props.login2}>
    <form id="form-login" action="">
           <input id="input-login" type="text" name="mode" autoComplete="on"placeholder='Nom'/>
           <input id="input-login"type="password" name="mode" autoComplete="on" placeholder='Mot de passe'/>
       </form>
       <button id="submit" onClick={()=>setState(true)}>Connexion</button>
   </div>) : ''
        
}
export default Login;