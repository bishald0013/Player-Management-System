import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PlayersDetails from "./PlayersDetails"
import { useAllPlayersQuery } from '../../service/adminApi'

function AllPlayerName() {

  const [allPlayers, setAllPlayers] = useState({
    players: []
  })

  const {data, isSuccess} = useAllPlayersQuery()

  useEffect(() => {
    if(data && isSuccess){
      setAllPlayers({
        players: data.msg
      })
    }
  }, [data, isSuccess])

  const {players} = allPlayers


  return (
    <div className="container">
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Player Name</th>
            <th scope="col">Rating</th>
            <th scope="col">Manager Name</th>
          </tr>
        </thead>
      </table>

      {
        players.map((p)=> {
          return ( <PlayersDetails p={p} key={p._id} /> )
        })
      }
 
    </div>
  )
}

export default AllPlayerName