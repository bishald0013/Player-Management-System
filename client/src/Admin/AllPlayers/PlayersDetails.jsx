import React from 'react'

function PlayersDetails({p}) {
  return (
    <div className='container'>
        <table class="table">
        <tbody>
          <tr>
            <td>{p.playerName}</td>
            <td>{p.rating}</td>
            <td>{p.managerName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PlayersDetails