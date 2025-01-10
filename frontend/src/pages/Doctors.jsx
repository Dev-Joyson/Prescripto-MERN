import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const Doctors = () => {

  const {speciality} = useParams()
  const { doctors } = useContext(AppContext)
  const [filterDoc, setFilterDoc] = useState([])

  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <div>
          <p>General physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Doctors