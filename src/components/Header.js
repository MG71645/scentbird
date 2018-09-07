import React from 'react'

import logo from '../assets/images/logo.svg'

import './Header.css'

const Header = () => {
    return (
        <header className="Header">
            <div className="layout">
                <img src={logo} className="header__logo" alt="Scentbird New York"/>
            </div>
        </header>
    )
}

export default Header
