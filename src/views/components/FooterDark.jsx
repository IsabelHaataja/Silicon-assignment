import React from 'react'
import siliconLogo from '../../assets/images/icons/silicon-logo-dark-mode.svg'

const FooterDark = () => {
  return (
    <>
    <footer>
        <div id='footer'>
            <div className='footer-container1'> 
                <img id='silicon-logo' src={siliconLogo} alt="silicon logo" />
                <p>Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor ullamcorper sodales ultrices eros. </p>
                <form id='newsletter-bar' action="">
                    <div className='input-group'> 
                        <label>Subscribe to our newsletter</label>            
                        <input type="text" name='email' placeholder='Your Email'/>
                        <button id='subscribe-button' className='btn-theme'>Subscribe</button>
                    </div>
                </form> 
                <div><p>2024. All rights reserved. Silicon Template</p></div>
            </div> 
            <div id='navigation'>
                <a href="/">Home</a>
                <a href="#">Services</a>
                <a href="#">Our Clients</a>
                <a href="#">Testimonials</a>
                <a href="#">News</a>

                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
            </div>
            <nav id='social-media'>
                <a href="#">Facebook</a>
                <a href="#">Linkedin</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
            </nav>
            <div id='contact'>
                <a href="/contact">Contact Us</a>
                <a href="#">example@gmail.com</a>
            </div>
        </div>
    </footer>
    </>
  )
}

export default FooterDark