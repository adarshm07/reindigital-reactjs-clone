import React from 'react'


const Header = () => {
    return (
        <div className="header container">
            <div className="logo">
                <img src="./images/reindigital-logo.png" alt="" />
            </div>
            <div className="header-nav">
                <span className="header-nav">Home</span>
                <span className="header-nav">Services</span>
                <span className="header-nav">About</span>
                <span className="header-nav">Contact</span>
            </div>
        </div>
    )
}

export default Header;