import React, {useEffect, useState} from 'react'
import { useAllSportsQuery } from '../../service/adminApi'
import DisplayTeams from './DisplayTeams'

function AllSports() {

  const [allTeam, setAllTeam] = useState({
    teams: []
  })

  const {data, isSuccess} = useAllSportsQuery()

  useEffect(() => {
    if(data && isSuccess){
      setAllTeam({
        teams: data.msg
      })
    }
  }, [data, isSuccess])

  const {teams} = allTeam
  console.log(teams)

  return (
    <div className='container mt-5'>
       <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Team Name</th>
            <th scope="col">Sports Name</th>
          </tr>
        </thead>
      </table>
      {
        teams.map((t) => {
          return ( <DisplayTeams t={t} key={t._id}/> )
        })
      }
    </div>
  )
}

export default AllSports