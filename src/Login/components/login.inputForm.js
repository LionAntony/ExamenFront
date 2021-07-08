import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
/**
 * InputForm it's responsible of the inputs of the login of user.
 * @param {string} name Name is the name of the input.
 * @param {string} placeholder Is what you see in the input presentation.
 * @param {string} type Is the type of input that will be used
 * @param {component} icon Is the icon that will be used in the left of the input.
 * @param {function} set Save the value of the input
 */
function InputForm({name='input',placeholder='Nombre de usuario',type='text',icon, set = ()=>{}}){
    return (
        <div className="wrap-input100 validate-input">
            <input className="input100" type={type} name={name} placeholder={placeholder} onChange={({target})=>{set(target.value)}}/>
            <span className="focus-input100"></span>
            <span className="symbol-input100">
                <FontAwesomeIcon icon={icon} />
            </span>
        </div>
    )
}
export default InputForm;