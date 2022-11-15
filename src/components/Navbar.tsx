import React, {FC} from 'react'
import {Link} from 'react-router-dom'

interface NavbarProps{
    linkTo: string;
    buttonText: string;
}

const Navbar: FC<NavbarProps> = (props: NavbarProps) => {
    const {linkTo, buttonText} = props;

    return (
        <div className="navbar-container">
                <h1 className="navbar-header">WeatherForm.</h1>
                <Link to={linkTo}><button className="btn-navbar">{buttonText}</button></Link>
        </div>
  )
}

export default Navbar;