import React, { useEffect } from "react";
import { useAddPlayerMutation } from "../../service/playerApi";

function AddPlayers({managerName, managerEmail}) {

  const [addPlayer] = useAddPlayerMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)

    const playerData = {
      playerName: data.get("playerName"),
      rating: data.get("rating"),
      managerName: managerName,
      managerEmail: managerEmail
    }

    if(playerData.playerName && playerData.rating){
      const res = await addPlayer(playerData)
      console.log(res)
    }else{
      console.log("Both the fields are required")
    }

  }

  return (
    <div className="main container mt-5">
      <h1 className="my-3 fs-3">Add Players</h1>
      <div className="container w-50">
        <form id="insert_player" onSubmit={handleSubmit} >
          <div class="form-floating mb-3">
            <input
              type="name"
              name="playerName"
              class="form-control"
              id="playerName"
              placeholder="name@example.com"
            />
            <label for="floatingInput" className="fs-6" >Player Name</label>
          </div>
          <div class="col">
              <input
                type="text"
                name="rating"
                id="rating"
                class="form-control"
                placeholder="Rating"
              />
            </div>
            <button type="submit" class="btn btn-outline-secondary my-3">Add Players</button>
        </form>
      </div>
    </div>
  );
}

export default AddPlayers;
