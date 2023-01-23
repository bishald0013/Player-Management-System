import React from 'react'

function DisplayManager({m}) {
  return (
    <div className='container'>
           <table class="table">
        <tbody>
          <tr>
            <td>{m.name}</td>
            <td>{m.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DisplayManager