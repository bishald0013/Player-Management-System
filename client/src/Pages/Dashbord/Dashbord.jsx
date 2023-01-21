import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../../service/localStorage'
import { useGetLoggedManagerQuery } from '../../service/managerAuth'
import { removeToken } from '../../service/localStorage'
import { useEffect, useState } from 'react'

function Dashbord() {
  let token = getToken()
  const navigate = useNavigate()

  const [manager, setmanager] = useState({
    managerName: "",
    managerEmail: "" 
  })

  const {data, isSuccess} = useGetLoggedManagerQuery(token)
  console.log(data)

  useEffect(() => {
    if(data && isSuccess){
      setmanager({
        managerName: data.user.name,
        managerEmail: data.user.email
      })
    }
  }, [data, isSuccess])

  const {managerName, managerEmail} = manager

  const handleClick = (e) => {
    e.preventDefault()
    removeToken('token')
    navigate('/')
  }

  return (
    <div className="container mt-5">
      <div className="conta my-3">
      <span>{managerName}</span>
      <br></br>
      <span>{managerEmail}</span>
      </div>
      <div className='container'>
        <button type="button" onClick={handleClick} class="btn btn-dark mx-3">
          LogOut
        </button>
        <button type="button" class="btn btn-dark mx-3">
          CreateTeam
        </button>
      </div>
    </div>
  )
}

export default Dashbord
