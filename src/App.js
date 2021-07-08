import React,{useState,useEffect} from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './componentsPrincipales/layout/layout.scss'
import './App.scss';
import Layout from './layoutComponent/layout';
import Login from './Login/Login.js';
import http from './componentsPrincipales/Fetch/FetchN';
function App() {
	const [menu,setMenu]=useState([])
	const [userLoggued,setUserLoggued]=useState(false);
	function CheckLogin() {
		http('api/auth/sign-in/token')
			.then(response => {
				if(response.data.nombre) {
					setMenu(response.data.secciones);
					window.rolUsuario=response.data.rol;
					setUserLoggued(true);
				} else {
					setUserLoggued(false);
				}
			})
			.catch(err => console.log(err))
	}
	console.log(userLoggued)
	useEffect(() => {
		CheckLogin();
		return;
	},[]);

	return (
		<BrowserRouter>
			<Switch>
				{!userLoggued&&(
					<Login />
				)}
				{userLoggued&&(
					<React.Suspense fallback={'Loading...'}>
						<Layout menu={menu}>
							{menu.map((menu,key) => {
								let componente=React.lazy(() => import(`${menu.Compo}`))
								return (
									<Route key={key} path={menu.to} component={componente} sortable></Route>
								)
							})}
						</Layout>
					</React.Suspense>
				)}
			</Switch>
		</BrowserRouter>
	)
}

export default App;
