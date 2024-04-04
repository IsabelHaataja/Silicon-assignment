import React from 'react'
import { toggleMenu } from '../../assets/js/toggle-button-script'
import siliconLogo from '../../assets/images/icons/silicon-logo-light_theme.svg'

const Header = () => {
  return (
    <header>
        <div className="container">
            <a id="logo" href="/"><img src={siliconLogo}></img></a>

            <nav id="menu">
                <div className="menu-links">
                    <a className="nav-link" href="#">Overview</a>
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="#">News</a>
                    <a className="nav-link" href="/contact">Contact</a>
                </div>
            </nav>

            <div id="theme-mode">
                <div className="theme-switch-wrapper">
                    <label htmlFor="theme-toggle-switch">Light</label>
                    <label className="theme-switch" htmlFor="theme-toggle-switch">
                        <input type="checkbox" id="theme-toggle-switch" />
                        <div className="slider round"></div>
                    </label>
                    <label htmlFor="theme-toggle-switch">Dark</label>
                </div>
            </div>
            <a id="btn-account" className="btn btn-theme" href="signin.html"><i className="fa-regular fa-user"></i> Sign in / up</a>
            <button id="btn-menu" onClick={toggleMenu}><i className="fa-regular fa-bars"></i></button>
        </div>
    </header>
  )
}

export default Header