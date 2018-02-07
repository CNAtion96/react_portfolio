import React from 'react';
import { Link } from 'react-router-dom';

let Header = (props) => {

    let navList = props.navItems.map( (data) => {
            let className = "material-icons navLink " + props.active[data.key];
            return(
                <li key={data.key}>
                    <Link className={className} to={data.pageName} >
                        {data.icon}
                    </Link>
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