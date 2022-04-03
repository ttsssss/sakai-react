import React  from 'react';
import { Link } from 'react-router-dom';
import silosect from "./assets/layout/images/silosect.png"

export const AppTopbar = (props) => {

    return (
        <div className="layout-topbar">
            <Link to="/" className="layout-topbar-logo">
                <img src={silosect} alt="logo"/>
                <b><span>Bug Tracker</span></b>
            </Link>

            <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
                <i className="pi pi-bars"/>
            </button>

            <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={props.onMobileTopbarMenuClick}>
                <i className="pi pi-ellipsis-v" />
            </button>

        </div>
    );
}
