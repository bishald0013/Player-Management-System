import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useGetManagerTeamQuery } from '../../service/teamApi'
import TeamTable from './TeamTable'

function TeamDetails({token}) {

  const [teamStats, setTeamStats] = useState({
    teamData: []
  })

  const {data, isSuccess} = useGetManagerTeamQuery(token)
  console.log(data)

  useEffect(() => {
    if(data && isSuccess){
      setTeamStats({
        teamData: data.team
      })
    }
  },[data,isSuccess])

  const {teamData} = teamStats
  console.log(teamData)

  return (
    <div className="container my-5">
      <h1>Team Stats</h1>
            {
              teamData.map((t) => {
                return ( <TeamTable t={t} key={t._id} /> )
              })
            }
       
    </div>
  )
}

export default TeamDetails
