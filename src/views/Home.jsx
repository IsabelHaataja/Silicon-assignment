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
            <h1 id='features-h1'>App Features</h1>
            <p id='features-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
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
    </div>
  )
}

export default Home