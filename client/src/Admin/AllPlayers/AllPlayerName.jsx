import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PlayersDetails from "./PlayersDetails"
import { useAllPlayersQuery } from '../../service/adminApi'

function AllPlayerName() {

  const [search, setSearch] = useState("")
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
      <div className="search w-50 my-3" style={{marginLeft: "8rem"}}>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
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
        players.filter((item) => {
          return search.toLowerCase() === "" 
          ? item 
          : item.playerName.toLowerCase().includes(search)
        }).map((p)=> {
          return ( <PlayersDetails p={p} key={p._id} /> )
        })
      }
 
    </div>
  )
}

export default AllPlayerName