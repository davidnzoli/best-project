import React, { useRef } from "react";
import './header.css';
import { useState,useEffect } from "react";
import Login from "./Login";

const Header = () =>{
    const [login, setLogin] = useState(false) 
    let getelement = useRef();
    useEffect(()=>{
        let openUp = (e) => {
            if(getelement.current && !getelement.current.contains(e.target)){
                setLogin(false);
            }
            
        };
         document.addEventListener("mousedown", openUp);
    }, []);
    
    return <React.Fragment>
         <div className="header">
            <h1 id="titre-header">AGENCE DE GOMA <small>accueil-maps</small></h1>
            <button id="btn-bar" onClick={()=>{setLogin(true)}}>Admin</button>
            <Login login={login} login2={getelement} />
        </div>
    </React.Fragment>
}
export default Header;