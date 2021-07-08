import React from 'react';
import LogicOfLogin from '../logic/login.logic.js';

function ButtonLogin({email,password,setErr}){
    return(
        <div className="container-login100-form-btn">
            <button className="login100-form-btn" onClick={(e)=>{
                console.log(email);
                e.preventDefault();
                LogicOfLogin(email,password,setErr);
                }}>
                INICIAR SESIÓN
            </button>
        </div>
    )
}
export default ButtonLogin;