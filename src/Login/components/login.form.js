import React,{useState} from 'react';
import {faEnvelope,faLock} from '@fortawesome/free-solid-svg-icons'
import InputForm from './login.inputForm.js';
import ButtonLogin from './login.buttonLogin.js';

function LoginForm() {
    let [email,setEmail]=useState('');
    let [password,setPassword]=useState('');
    let [err,setErr]=useState(false);
    return (
        <form className="login100-form validate-form">
            <span className="login100-form-title">
                LOGIN
            </span>
            {err&&(
                <h6 style={{color: 'red'}}>Verifica tus datos</h6>
            )}
            <InputForm name='correo' placeholder='Correo electronico' type="email" icon={faEnvelope} set={setEmail} />
            <InputForm name='password' placeholder='Contraseña' type="password" icon={faLock} set={setPassword} />
            <ButtonLogin email={email} password={password} setErr={setErr} />

        </form>
    )
}
export default LoginForm;