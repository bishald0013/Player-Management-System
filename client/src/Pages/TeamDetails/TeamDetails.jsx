import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useGetManagerTeamQuery } from '../../service/teamApi'

function TeamDetails(email) {
  const [team, setTeam] = useState({
    teamName: '',
    matchWin: '',
    matchPlayed: '',
    matchLoose: '',
    managerName: '',
    sportsName: '',
  })

  const { data, isSuccess } = useGetManagerTeamQuery(email)

  useEffect(() => {
    if ((data, isSuccess)) {
      setTeam({
        teamName: data.team.teamName,
        sportsName: data.team.sportsName,
        matchPlayed: data.team.matchPlayed,
        matchLoose: data.team.matchLoose,
        matchWin: data.team.matchLoose,
        managerName: data.team.managerName,
      })
    }
  }, [data, isSuccess])

  const {teamName, matchLoose, matchPlayed, matchWin, managerName} = team

  return (
    <div className="container my-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Team Name</th>
            <th scope="col">Match Played</th>
            <th scope="col">Match Win</th>
            <th scope="col">Match Loose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{teamName}</td>
            <td>{matchPlayed}</td>
            <td>{matchWin}</td>
            <td>{matchLoose}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TeamDetails
