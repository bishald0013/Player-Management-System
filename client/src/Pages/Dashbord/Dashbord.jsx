import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../../service/localStorage'
import { removeToken } from '../../service/localStorage'

function Dashbord() {

  let token = getToken()
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()

    removeToken('token')

    navigate("/")

  }

  return (
    <div className='container'>
      <span>Dashbord</span>
      <div>
      <button type="button" onClick={handleClick} class="btn btn-dark mx-3">LogOut</button>
      </div>
    </div>
  )
}

export default Dashbord