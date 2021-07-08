import React,{useState} from 'react';
import classNames from 'classnames';
import {AppMenu} from '../AppMenu';
import {AppProfile} from '../AppProfile';
function Menu({menu,setOverlayMenuActive,setMobileMenuActive,setMenuClick,switchActiveMenu}) {
  const [layoutColorMode,setLayoutColorMode]=useState('dark');
  const sidebarClassName=classNames("layout-sidebar",{
    'layout-sidebar-dark': layoutColorMode==='dark',
    'layout-sidebar-light': layoutColorMode==='light'
  });
  function onSidebarClick() {
    setMenuClick(true);
  }
  function onMenuItemClick(event) {
    if(!event.item.items) {
      setOverlayMenuActive(false);
      setMobileMenuActive(false);
    }
  }
  return (
    <div className={sidebarClassName} onClick={onSidebarClick}>
      <div className="layout-logo">
        <img alt="Logo111" src="assets/layout/images/login.png" width="50%" />

      </div>
      <AppProfile />
      <AppMenu model={menu} onMenuItemClick={onMenuItemClick} switchActiveMenu={switchActiveMenu} />
    </div>
  )
}
export default Menu;