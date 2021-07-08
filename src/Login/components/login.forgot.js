import React from 'react';
import {Link} from 'react-router-dom';

function Forgot(){
    return (
        <div className="text-center p-t-12">
            <span className="txt1">
                ¿Olvidaste tu
            </span>
            <Link className="txt2" to="#">
                &nbsp;Usuario / contraseña?
            </Link>
        </div>
    )
}
export default Forgot;