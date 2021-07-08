import React,{useState,useEffect} from 'react';
import classNames from 'classnames';
// import {BreadCrumb} from 'primereact/breadcrumb';
import {AppTopbar} from '../AppTopbar';
import {AppFooter} from '../AppFooter';
import Menu from './menu.js';
function Layout({menu,children}) {

	const [layoutMode,setLayoutMode]=useState('static');
	const [staticMenuInactive,setStaticMenuInactive]=useState(false);
	const [overlayMenuActive,setOverlayMenuActive]=useState(false);
	const [mobileMenuActive,setMobileMenuActive]=useState(false);
	const [menuClick,setMenuClick]=useState(false);
	const [activMenu,setactivMenu]=useState('Usuarios')


	const wrapperClass=classNames('layout-wrapper',{
		'layout-overlay': layoutMode==='overlay',
		'layout-static': layoutMode==='static',
		'layout-static-sidebar-inactive': staticMenuInactive&&layoutMode==='static',
		'layout-overlay-sidebar-active': overlayMenuActive&&layoutMode==='overlay',
		'layout-mobile-sidebar-active': mobileMenuActive
	});
	function onWrapperClick() {
		if(!menuClick) {
			setOverlayMenuActive(false);
			setMobileMenuActive(false)
		}
		setMenuClick(false);
	}
	function onToggleMenu(event) {
		setMenuClick(true);
		if(window.innerWidth>1024) {
			if(layoutMode==='overlay') {
				setOverlayMenuActive(!overlayMenuActive);
			}
			else if(layoutMode==='static') {
				setStaticMenuInactive(!staticMenuInactive)
			}
		}
		else {
			const mobileMenuActive=mobileMenuActive;
			setMobileMenuActive(!mobileMenuActive)
		}

		event.preventDefault();
	}

	function switchActiveMenu(item) {
		setactivMenu(menu[item]? menu[item].label:'')
	}
	const home={icon: 'pi pi-home',url: '/'}

	return (
		<div className={wrapperClass} onClick={onWrapperClick}>
			<AppTopbar onToggleMenu={onToggleMenu} />
			<Menu
				menu={menu}
				setMobileMenuActive={setMobileMenuActive}
				setOverlayMenuActive={setOverlayMenuActive}
				setMenuClick={setMenuClick}
				switchActiveMenu={switchActiveMenu}
			/>
			<div className="layout-main">

				{/* <BreadCrumb model={activMenu} home={home} /> */}
				<h3>{activMenu}</h3>
				{children}
			</div>

			<AppFooter />

			<div className="layout-mask"></div>
		</div>
	)
}
export default Layout;