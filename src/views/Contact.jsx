import React, { useEffect, useState, useRef } from 'react'
import Header from './components/Header'
import DropDownButton from './components/buttons/DropDownButton'


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
        <div className='contact-container'>
          <div className='contact-content'>
            <form onSubmit={handleSubmit}>
              <div className='input-group'>
                <label>Full name<input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required /></label>
                <label>Email address<input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required /></label>
                <label>Specialist<DropDownButton options={specialists} /></label>
                <label>Date<input type="date" name="date" value={formData.date} onChange={handleChange} required /></label>
                <label>Time<input type="time" name="time" value={formData.time} onChange={handleChange} required /></label>
              </div>

              <button className='btn-theme' type="submit">Make an appointment</button>        
            </form>          
          </div>
        </div>      
    </div>

    </>
  )
}

export default Contact