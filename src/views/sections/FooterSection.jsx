import React from 'react'
import { useLocation } from 'react-router'
import siliconLogo from '../../assets/images/icons/silicon-logo-light_theme.svg'
import appleStore from '../../assets/images/brands/appstore.svg'
import googlePlay from '../../assets/images/brands/googleplay.svg'
import socials from '../../assets/images/icons/socials.svg'

const FooterSection = () => {
    let location = useLocation()

    return (
        <footer>
            <div className="container">
                <img id='silicon-logo' src={siliconLogo} alt="Silicon logo" />
                <div className="menu-links">
                    <a className="nav-link" href="#">Overview</a>
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="#">News</a>
                    <a className="nav-link" href="/contact">Contact</a>
                    <a className="nav-link" href="/contact">Account</a>
                </div>
                <div className='download-app'>
                    <a href="#"><img src={appleStore} alt="download on applestore" /></a>
                    <a href="#"><img src={googlePlay} alt="download on googleplay" /></a>         
                </div>
                <a id='socials' href="#"><img src={socials} alt="facebook, twitter, instagram and youtube icons" /></a>  
                <div>&copy; 2024. All rights reserved. Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra <br /> aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.</div>
            </div>
        </footer>
    )
}

export default FooterSection