import React from 'react'
import { Link } from 'react-router-dom'
import Dashbord from '../../Pages/Dashbord/Dashbord'
import { getToken } from '../../service/localStorage'

function Home() {

  const token = getToken()

  return (
    <div className='container main_container'>
      {
        !token ? 
        <div className="button_container container mt-5">
            <Link to="/login">
                <button type="button" class="btn btn-dark mx-3">Login</button>
            </Link>
            <Link to="/signeUp">
                <button type="button" class="btn btn-dark mx-3">SigneUp</button>
            </Link>
        </div>
        :
        <div className="container">
          <Dashbord></Dashbord>
        </div>
      }
    </div>
  )
}

export default Home