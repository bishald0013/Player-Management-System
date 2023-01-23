import React from 'react'
import AllManagers from './AllManagers/AllManagers'
import AllPlayerName from './AllPlayers/AllPlayerName'
import AllSports from './AllSports/AllSports'


function AdminDeshbord() {
  return (
    <div className='container my-5'>
      <h1>Admin DeshBord</h1>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-4">
            <AllPlayerName/>
          </div>
          <div className="col-lg-4">
            <AllSports/>
          </div>
          <div className="col-lg-4">
            <AllManagers/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDeshbord