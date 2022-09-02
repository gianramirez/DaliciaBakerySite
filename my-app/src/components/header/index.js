import { NavLink } from "react-router-dom";
import React from "react";

const Header = () => {


    return (
        <div className={style.Header}>
           <div className={style.navList}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/menu'}>Menu</NavLink>
            <NavLink to={'/contactus'}>Contact Us</NavLink>
           </div>
        </div>
        
    );
}

export default Header;