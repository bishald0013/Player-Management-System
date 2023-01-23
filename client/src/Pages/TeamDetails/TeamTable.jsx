import React from 'react'

function TeamTable({t}) {
  return (
    <div>
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
            <td>{t.teamName}</td>
            <td>{t.matchPlayed}</td>
            <td>{t.matchWin}</td>
            <td>{t.matchLoose}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TeamTable