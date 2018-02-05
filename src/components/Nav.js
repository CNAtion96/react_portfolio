import React from 'react';
import NavOption from './NavOption';

const Nav = () => {

    return (
        <div className="nav">
            <div className="logo">
                <h1 className="navLogo blink_s">
                    C.
                    <span className="NavLogoM blink_me">
                        A.
                    </span>
                </h1>
            </div>
            <NavOption active="active" icon="home" pageName="" />
            <NavOption active="inactive" icon="web" pageName="portolio" />
            <NavOption active="inactive" icon="account_box" pageName="about" />
            <NavOption active="inactive" icon="email" pageName="contact" />
        </div>
    )
}

export default Nav;