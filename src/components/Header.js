import React from 'react';
import NavLink from './NavLink';

let Header = (props) => {

    let navList = props.navItems.map( (data) => {
            return(
                <li key={data.key}>
                    <NavLink to={data.pageName} >
                        {data.icon}
                    </NavLink>
                </li>
            )
        })


    return (
        <div className="header">
            <div className="logo" > 
                <h1 className="navLogo">
                    C.
                    <span className="NavLogoA blink_me">
                        A.
                    </span>
                </h1>
            </div>
            <ul>
                { navList }
                <li className="resume">
                    <a href="../files/Resume.pdf" download>
                        <i className="fa fa-download download"></i>
                        <span className="desktopResume">Download Resume</span>
                    </a>
                </li>
            </ul>
        </div>
    )

}

export default Header;