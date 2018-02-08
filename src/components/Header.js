import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink'

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
            </ul>
        </div>
    )

}

export default Header;