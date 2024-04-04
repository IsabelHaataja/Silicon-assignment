import React, { useEffect, useState, useRef } from 'react'
import Header from './components/Header'
import DropDownButton from './components/buttons/DropDownButton'
import email from '../assets/images/icons/email-icon.svg'
import career from '../assets/images/icons/careers-icon.svg'
import map from '../assets/images/maps/map.svg'
import socials from '../assets/images/icons/socials.svg'
import Footer from './components/FooterDark'


const Contact = () => {
  const specialistsUrl = 'https://kyhnet23-assignment.azurewebsites.net/api/specialists'
  const [specialists, setSpecialists] = useState([])
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    date: '',
    time: ''
  })
  const isDataLoaded = useRef(false)

  useEffect(() => {
    if (!isDataLoaded.current) {
      setSpecialists([])

      const fetchData = async () => {
        const result = await fetch(specialistsUrl)
        const data = await result.json()

        for (let item of data) {
          setSpecialists(current => [...current, { value: item.id, text: `${item.firstName} ${item.lastName}` }])
        }
      }
      fetchData()
      isDataLoaded.current = true
    }
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const isValidFullName = (fullName) => {
    // Split the full name into parts
    const nameParts = fullName.trim().split(" ");
  
    // Check if there are exactly two parts
    return nameParts.length === 2;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.fullName.trim() || !isValidFullName(formData.fullName)) {
      alert("Please enter your full name.")
      return
    }

    if (!formData.emailAddress.trim()) {
      alert("Please enter your email address.")
      return
    }

    if (!isValidEmail(formData.emailAddress)) {
      alert("Please enter a valid email address.");
      return
    }

    console.log("Form data:", formData)

    setFormData({
      fullName: '',
      emailAddress: '',
      date: '',
      time: ''
    })
  }



  return (
    <>
    <div className='wrapper'>
      <Header />
        <section id='contact'>

            <div className='contact-content'>
              <div className='navigation'>
                <a href="/"><i className="fa-solid fa-house"></i>Home</a>
                <i className="fa-solid fa-chevron-right"></i>
                <a href="/contact">Contact</a>              
              </div>
              <div className='flex-contact-content'>
                <div className='contact-us'>
                  <h1 id='contact-h1'>Contact Us</h1>
                  <div id='email'>
                    <img src={email} alt="envelope icon" />
                    <div>
                      <h3>Email us</h3>
                      <p>Please feel free to drop us a line. We will <br /> respond as soon as possible.</p>   
                      <a href="#">Leave a message<i class="fa-solid fa-arrow-right"></i></a>                       
                    </div>
            
                  </div>
                  <div id='career'>
                    <img src={career} alt="two people and a plus icon" />
                    <div>
                    <h3>Careers</h3>
                    <p>Sit ac ipsum leo lorem magna nunc mattis <br /> maecenas non vestibulum.</p>
                    <a href="#">Send an application<i class="fa-solid fa-arrow-right"></i></a>                    
                    </div>
                  </div>
                </div>

                <form id='contact-form' onSubmit={handleSubmit}>
                  <div className='input-group'>
                    <h2>Get Online Consultation</h2>
                    <label>Full name<input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required /></label>
                    <label>Email address<input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required /></label>
                    <label>Specialist<DropDownButton options={specialists}  onSelect={(selectedSpecialist) => setFormData({ ...formData, specialist: selectedSpecialist })}/></label>
                    <div className='date-time'>
                      <label>Date<DropDownButton options={[{text:"May 10, 2024" },{text: "May 23, 2024"}]} onSelect={(selectedDate) => setFormData({ ...formData, date: selectedDate })} /></label>
                      <label>Time<DropDownButton options={[{text:"13:00" },{text: "10:30"}]} onSelect={(selectedTime) => setFormData({ ...formData, time: selectedTime })} /></label>                  
                    </div>
                  </div>
                  <button className='btn-theme appointment-button' type="submit">Make an appointment</button>        
                </form>                 
              </div>
            </div>      
        </section> 

        <section id='medical-contact'>
          <div className='medical-info'>
            <img src={map} alt="map showing two medical centers" />
            <div id='flex-medical'>
              <div className='medical1'>
                <h3>Medical Center 1</h3>
                <p><i className="fa-solid fa-location-pin"></i>4517 Washington Ave. Manchester, Kentucky 39495</p>
                <p><i className="fa-solid fa-phone"></i>(406) 555-0120</p>
                <p><i className="fa-solid fa-clock"></i>Mon - Fri: 9:00 am - 22:00 am<br />Sat - Sun: 9:00 am - 20:00 am</p>
              </div>
              <div className='medical2'>
                <h3>Medical Center 2</h3>
                <p><i className="fa-solid fa-location-pin"></i>2464 Royal Ln. Mesa,New Jersey 45463</p>
                <p><i className="fa-solid fa-phone"></i>(406) 544-0123</p>
                <p><i className="fa-solid fa-clock"></i>Mon - Fri: 9:00 am - 22:00 am<br />Sat - Sun: 9:00 am - 20:00 am</p>
              </div>
              <div className='socials'>
                <img src={socials} alt="facebook, instagram, twitter and youtube icons" />
              </div>
            </div>

          </div>
        </section>  
        <Footer />   
    </div>
    </>
  )
}

export default Contact