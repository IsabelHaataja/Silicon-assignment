import React, { useEffect, useState, useRef } from 'react'
import Header from './components/Header'
import DropDownButton from './components/buttons/DropDownButton'
import email from '../assets/images/icons/email-icon.svg'
import career from '../assets/images/icons/careers-icon.svg'


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
    setFormData({ ...formData, [e.target.fullName]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)

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
    </div>

    </>
  )
}

export default Contact