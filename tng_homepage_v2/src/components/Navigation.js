import React from "react"
import { Link } from 'react-router-dom';
import logo_black from "./media/logo-black.png"
import "./Navigation.module.css"

const Navigation = () => {
    return(
        <header>
                    <div className="web">
        <div>
            <Link to="/Home">
                <img className="small-logo" src={logo_black} alt="logo_black" />
            </Link>
            <ul className="header__nav">
                <Link to="/about">
                    <p>About</p>
                </Link>
                <Link to="/product">
                    <p>Product</p>
                </Link>
            </ul>
        </div>
    </div>
        </header>

    )
}

export default Navigation