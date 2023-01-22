import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../../service/localStorage'
import { useGetManagerTeamQuery } from '../../service/teamApi'
import { useGetLoggedManagerQuery } from '../../service/managerAuth'
import { removeToken } from '../../service/localStorage'
import { useEffect, useState } from 'react'
import TeamDetails from '../TeamDetails/TeamDetails'
import CreateTeam from '../createTeam/CreateTeam'

function Dashbord() {
  let token = getToken()
  const navigate = useNavigate()

  const [manager, setmanager] = useState({
    managerName: '',
    managerEmail: '',
  })

  const { data, isSuccess } = useGetLoggedManagerQuery(token)
  console.log(data)

  useEffect(() => {
    if (data && isSuccess) {
      setmanager({
        managerName: data.user.name,
        managerEmail: data.user.email,
      })
    }
  }, [data, isSuccess])

  const { managerName, managerEmail } = manager

  //get team

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
      <div className="container">
        <button type="button" onClick={handleClick} class="btn btn-dark mx-3">
          LogOut
        </button>
      </div>
      <div className='container my-3'>
       <div className="row">
        <div className="col-lg-6">
          <CreateTeam managerName={managerName} managerEmail={managerEmail}/>
        </div>
        <div className="col-lg-6">
        </div>
       </div>
      </div>
    </div>
  )
}

export default Dashbord
