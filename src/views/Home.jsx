import React from 'react'
import Header from './components/Header'
import appStoreImg from '../assets/images/brands/appstore.svg'
import googlePlayImg from '../assets/images/brands/googleplay.svg'
import showcasePhones from '../assets/images/mobile/two-showcase-mobiles.svg'
import brand1 from '../assets/images/brands/brand_1.svg'
import brand2 from '../assets/images/brands/brand_2.svg'
import brand3 from '../assets/images/brands/brand_3.svg'
import brand4 from '../assets/images/brands/brand_4.svg'
import brand5 from '../assets/images/brands/brand_5.svg'
import brand6 from '../assets/images/brands/brand_6.svg'
import mobile from '../assets/images/mobile/mobile-appFeatures.svg'
import easy from '../assets/images/icons/easy-payments.svg'
import cost from '../assets/images/icons/costStatistics.svg'
import dataSecurity from '../assets/images/icons/dataSecurity.svg'
import regularCashback from '../assets/images/icons/regularCashback.svg'
import support from '../assets/images/icons/support.svg'
import standards from '../assets/images/icons/topStandards.svg'
import mobile1 from '../assets/images/mobile/how-does-it-workiPhone.svg'
import mobile3 from '../assets/images/mobile/how-does-it-work-transfer.svg'
import mobile2 from '../assets/images/mobile/how-does-it-work-card.svg'
import moneyForecast from '../assets/images/mobile/moneyForecast.svg'
import receivePayments from '../assets/images/mobile/receivePayment.svg'
import summers from '../assets/images/feedback/summersFeedback.svg'
import flores from '../assets/images/feedback/floresFeedback.svg'
import phone from '../assets/images/icons/phone-icon.svg'
import chat from '../assets/images/icons/chat-icon.svg'
import bell from '../assets/images/icons/notificationBell.svg'


const Home = () => {
  return (
    <div>
    <Header />
    <section id="showcase">
        <div className="container">
            <div className="content">
                <h1 id="home-h1">Manage All Your Money In One App</h1>
                <p id="home-p">We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                <div className="download-app">
                    <a className="appstore" href="#"><img src={appStoreImg} alt="Download on Appstore" /></a>
                    <a className="googleplay" href="#"><img src={googlePlayImg} alt="Download on GooglePlay" /></a>
                </div>
                <div className="discover-more">
                    <a id="more-circle-button" className="more button-circle" href="home-discover-more.html"><i className="fa-solid fa-chevron-down"></i></a>
                    <p id="discover">Discover more</p>                             
                </div>                           
            </div>
                <img id="showcase-image" src={showcasePhones} alt="two mobile phones" />
        </div>
    </section>

    <section id='appfeatures'>
      <div className='container'>
        <div className='wrapper'>
          <div className='brands'>
            <a href='#'><img src={brand1} alt='Brand 1' /></a>
            <a href='#'><img src={brand2} alt='Brand 2' /></a>
            <a href='#'><img src={brand3} alt='Brand 3' /></a>
            <a href='#'><img src={brand4} alt='Brand 4' /></a>
            <a href='#'><img src={brand5} alt='Brand 5' /></a>
            <a href='#'><img src={brand6} alt='Brand 6' /></a>
          </div>
        </div>
        <div className='content'>
          <div className='headline'>
            <div id='features-text'>
              <h1 id='features-h1'>App Features</h1>
              <p id='features-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>              
            </div>

          </div>         
          <div className='grid-features'>
            <div id='easy'>
              <img src={easy} />
              <h5>Easy Payments</h5>
              <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
            </div>
            <div id='security'>
              <img src={dataSecurity} />
              <h5>Data Security</h5>
              <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
            </div>
            <div id='cost'>
              <img src={cost} />
              <h5>Cost Statistics</h5>
              <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
            </div>
            <div id='support'>
              <img src={support} />
              <h5>Support 24/7</h5>
              <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
            </div>
            <div id='cashback'>
              <img src={regularCashback} />
              <h5>Regular Cashback</h5>
              <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
            </div>
            <div id='standards'>
              <img src={standards} />
              <h5>Top Standards</h5>
              <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
            </div>
          </div>
        </div>
        <img id='features-mobile' src={mobile} alt="A mobile phone showing transactions and Visa-card" />
      </div>
    </section>

    <section id='how-does-it-work'>
      <div className='hdiw-wrapper'>
        <div className='content'>
          <h1 id='hdiw-h1'>How Does It Work?</h1>
          <div className='slide-show'>
            <a id="more-circle-button" className="more button-circle" href="home-discover-more.html"><i className="fa-solid fa-chevron-left"></i></a>
            <img src={mobile1} alt="" />
            <img src={mobile2} alt="" />
            <img src={mobile3} alt="" />
            <a id="more-circle-button" className="more button-circle" href="home-discover-more.html"><i className="fa-solid fa-chevron-right"></i></a>
          </div>
          <h4 id='hdiw-h4'>Step 2. Latest transaction history</h4>
          <p id='hdiw-p1'>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique</p>
          <p id='hdiw-p2'>quisque hac in consectetur condimentum.</p>
        </div>
      </div>
    </section>

    <section id='money-transfers'>
      <div className='content-wrapper'>
          <div className='transfers'>
            <h2>Make your money <br />transfer simple and clear</h2>
            <p><i className="fa-regular fa-circle-check"></i>Banking transactions are free for you</p>
            <p><i className="fa-regular fa-circle-check"></i>No monthly cash commission</p>
            <p><i className="fa-regular fa-circle-check"></i>Manage payments and transactions online</p>
            <a id="btn-learn-more" className="btn btn-theme" href="#">Learn more<i className="fa-solid fa-arrow-right"></i></a>            
          </div>

          <div className='receive-payment'>
            <h2>Receive payment from international bank details</h2>          
            <div className='receive-payment-info'>
              <div className='manage-online'>
                <img src={easy} alt="card icon" /> 
                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>               
              </div>
              <div className='cashback'>
                <img src={regularCashback} alt="wallet icon" />
                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>                
              </div>
            </div>
            <a id="btn-learn-more" className="btn btn-theme" href="#">Learn more<i className="fa-solid fa-arrow-right"></i></a>          
          </div>
          <img id='money-forecast' src={moneyForecast} alt="money forecast, send money to people" />
          <img id='receive-payments' src={receivePayments} alt="contacts listed and a Visa-card" />  
      </div>          
    </section>   

    <section id='client-feedback'>
      <div className='feedback-container'> 
        <div className='feedback-content'>
          <div>
            <h1>Clients are Loving Our App</h1>
            <div className='feedback-buttons-left-right'>
              <a className="more button-circle" href="#"><i className="fa-solid fa-chevron-left"></i></a>
              <a className="more button-circle" href="#"><i className="fa-solid fa-chevron-right"></i></a>            
            </div>            
          </div>
          <div className='reviews'>
            <img src={summers} alt="" />
            <img src={flores} alt="" />          
          </div>          
        </div>
      </div>
    </section> 

    <section id='questions'>
      <div className='questions-container'>
        <div className='questions-wrapper'>
          <div className='prompt'>
            <h2>Any questions? <br />Check out the FAQs</h2>
            <p>Still have unanswered questions and need to get <br /> in touch?</p>
            <div className='contact-choices'>
              <div id='contact-call'>
                <img src={phone} alt="call icon" />
                <p>Still have questions?</p>
                <a href="#">Contact us <i className="fa-solid fa-arrow-right"></i></a>
              </div>
              <div id='contact-chat'>
                <img src={chat} alt="chat icon" />
                <p>Dont't like phone calls?</p>
                <a href="#">Contact us <i className="fa-solid fa-arrow-right"></i></a>
              </div>              
            </div>
          </div>

          <div className='faqs'>
            <nav>Is any of my personal information stored in the App?<a id="faqs-circle-button" className="more button-circle" href="#"><i className="fa-solid fa-chevron-down"></i></a></nav>
            <nav>What formats can I download my transaction history in?<a id="faqs-circle-button" className="more button-circle" href="#"><i className="fa-solid fa-chevron-down"></i></a></nav>
            <nav>
              <div id='open-faqs-bar'>
                <div id='top-row'>Can I schedule future transfers?
                <a id="faqs-open-circle-button" className="more button-circle" href="#"><i className="fa-solid fa-chevron-up"></i></a>
                </div>
                <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>                
              </div>
            </nav>
            <nav>When can I use Banking App services?<a id="faqs-circle-button" className="more button-circle" href="#"><i className="fa-solid fa-chevron-down"></i></a></nav>
            <nav>Can I create my own password that is easy for me to remember?<a id="faqs-circle-button" className="more button-circle" href="#"><i className="fa-solid fa-chevron-down"></i></a></nav>
            <nav>What happens if I forget or lose my password?<a id="faqs-circle-button" className="more button-circle" href="#"><i className="fa-solid fa-chevron-down"></i></a></nav>          
          </div>
        </div>
      </div>
    </section>  

    <section id='subscribe'>
      <div className='subscribe-wrapper'>
          <img src={bell} alt="bell" />
          <h4>Subscribe to our newsletter to stay <br />informed about latest updates</h4>
          <form action="">
            <div className='input-group'>
              <input type="text" name='email' placeholder='Your Email'/>
              <button id='subscribe-button' className='btn-theme'>Subscribe</button>
              
            </div>
          </form>          
      </div>
    </section>
    </div>
  )
}

export default Home