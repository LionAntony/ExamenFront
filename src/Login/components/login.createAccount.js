import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';

function CreateAccount(){
    return(
        <div className="text-center p-t-136">
            <Link className="txt2" to="/register">
                Crear una cuenta
                <FontAwesomeIcon className='m-l-5' icon={faLongArrowAltRight} />
            </Link>
        </div>
    )
}
export default CreateAccount;