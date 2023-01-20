import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container main_container'>
        <div className="button_container container mt-5">
            <Link to="/login">
                <button type="button" class="btn btn-dark mx-3">Login</button>
            </Link>
            <Link to="/signeUp">
                <button type="button" class="btn btn-dark mx-3">SigneUp</button>
            </Link>
        </div>
    </div>
  )
}

export default Home