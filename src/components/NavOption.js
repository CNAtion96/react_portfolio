import React from 'react';
import { Link } from 'react-router-dom';


const NavOption = (props) => {
    let divClass = 'navOption '+props.active;
    let link = "/"+props.pageName;
    
    return (
        <div className={divClass}>
            <Link to={link} className="material-icons" style={{textDecoration: 'none'}}>
                {props.icon}
            </Link>
        </div>
    )
}

export default NavOption;