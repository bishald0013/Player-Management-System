import React from 'react'

function DisplayTeams({t}) {
  return (
    <div className='container' >
        <table class="table">
        <tbody>
          <tr>
            <td>{t.teamName}</td>
            <td>{t.sportsName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DisplayTeams