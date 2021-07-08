import 'react-app-polyfill/ie11';
import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <Suspense fallback={<div>...Cargando</div>}>
        <App />
    </Suspense>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();