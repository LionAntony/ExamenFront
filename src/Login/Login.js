import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/util.css';
import './assets/css/main.css';
import LoginForm from './components/login.form';
import {Helmet} from 'react-helmet';
/**
 * Login is the main login of the web application.
 * @param {function} setAuthenticated is a function for to
 * know if the user is authenticated.
 */
function Login({setAuthenticated}) {
    return (
        <div className="limiter">
            <Helmet>
                <title> LOGIN</title>
            </Helmet>
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src={require('./assets/images/login.png')} alt="IMG" />
                    </div>
                    <LoginForm setAuthenticated={setAuthenticated} />
                </div>
            </div>
        </div>
    )
}

export default Login