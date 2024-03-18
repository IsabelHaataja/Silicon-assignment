import React, { useEffect, useState, useRef } from 'react'
import DropDownButton from './components/buttons/DropDownButton'

const Contact = () => {
  const specialistsUrl = 'https://kyhnet23-assignment.azurewebsites.net/api/specialists'
  const [specialists, setSpecialists] = useState([])
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

  return (
    <>
      <div className='container mt-4'>
        <DropDownButton options={specialists} />
      </div>
    </>
  )
}

export default Contact