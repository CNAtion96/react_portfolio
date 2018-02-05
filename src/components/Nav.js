import React from 'react';
import NavOption from './NavOption';

const Nav = (props) => {

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
            <NavOption active={props.active[0]} icon="home" pageName="" onClick={props.changeActive(0)}/>
            <NavOption active={props.active[1]} icon="web" pageName="portolio" onClick={props.changeActive(1)}/>
            <NavOption active={props.active[2]} icon="account_box" pageName="about" onClick={props.changeActive(2)}/>
            <NavOption active={props.active[3]} icon="email" pageName="contact" onClick={props.changeActive(3)}/>
        </div>
    )
}

export default Nav;