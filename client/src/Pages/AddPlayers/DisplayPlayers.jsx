import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getToken } from '../../service/localStorage'
import { useGetPlayerQuery } from '../../service/playerApi'
import AllPlayers from './AllPlayers'

function DisplayPlayers() {
  const [search, setSearch] = useState()
  const [players, setPlayers] = useState({
    allPlayers: [],
  })

  const token = getToken()
  const { data, isSuccess } = useGetPlayerQuery(token)

  useEffect(() => {
    if (data && isSuccess) {
      setPlayers({
        allPlayers: data.msg,
      })
    }
  }, [data, isSuccess])

  const { allPlayers } = players
  console.log(allPlayers)
  // console.log(data.msg)

  console.log(search)

  return (
    <div className="container">
      <div className="search w-50 my-3">
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
            <th scope="col">Match Played</th>
          </tr>
        </thead>
      </table>
      <tbody>
        {allPlayers.filter((item) => {
          return search.toLowerCase() === "" 
          ? item 
          : item.playerName.toLowerCase().includes(search)
        }).map((p) => (
          <tr key={p._id}>
            <td>{p.playerName}</td>
            <td>{p.rating}</td>
            <td>10</td>
          </tr>
        ))}
      </tbody>
    </div>
  )
}

export default DisplayPlayers
