import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../../service/localStorage'
import { useGetLoggedManagerQuery } from '../../service/managerAuth'
import { removeToken } from '../../service/localStorage'
import { useEffect, useState } from 'react'
import TeamDetails from '../TeamDetails/TeamDetails'
import CreateTeam from '../createTeam/CreateTeam'
import AddPlayers from '../AddPlayers/AddPlayers'

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

  const handleClick = (e) => {
    e.preventDefault()
    removeToken('token')
    navigate('/')
  }

  return (
    <div className="container mt-5">
      <div className="conta my-3">
        <div className="row">
          <div className="col-lg-6">
            <h2>{managerName}</h2>
          </div>
          <div className="col-lg-6">
            <button
              type="button"
              onClick={handleClick}
              class="btn btn-dark mx-3"
            >
              LogOut
            </button>
          </div>
        </div>
        <br></br>
      </div>
      <div className="container my-3">
        <div className="row">
          <div className="col-lg-6">
            <div className="createTeam">
            <CreateTeam managerName={managerName} managerEmail={managerEmail} />
            </div>
            <div className="addPlayer">
            <AddPlayers managerName={managerName} managerEmail={managerEmail} />
            </div>
          </div>
          <div className="col-lg-6">
            <TeamDetails token={token} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashbord
