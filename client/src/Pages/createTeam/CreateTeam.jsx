import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getToken } from "../../service/localStorage";
import { useGetLoggedManagerQuery } from "../../service/managerAuth"
import { useCreateTeamMutation } from "../../service/teamApi";
import AddPlayers from "../AddPlayers/AddPlayers";

function CreateTeam({managerEmail, managerName}) {

  const [CreateTeam] = useCreateTeamMutation()
          
  const handleSubmit = async (e) =>{
      e.preventDefault()
    const data = new FormData(e.currentTarget)

    const formData = {
      teamName: data.get('team_name'),
      managerName: managerName,
      managerEmail: managerEmail,
      sportsName: data.get('sports_name'),
      matchPlayed: data.get('match_played'),
      matchWin: data.get("match_win"),
      matchLoose: data.get("match_loose")
    }

    if(formData.teamName && formData.sportsName){
      if(formData.managerEmail && formData.managerName){
        const res = await CreateTeam(formData) 
        console.log(res)
      }else{
        console.log("managerName or email required")
      }
    }else{
      console.log("Team name is required")
    }
    console.log(formData)
  }

  return (
    <div className="container my-5">
      <h1>Create your Team</h1>
      <div className="container mt-4 w-50">
        <form id="create_team" onSubmit={handleSubmit}>
          <div class="row g-3">
            <div class="col">
              <input
                type="text"
                id="team_name"
                name="team_name"
                class="form-control"
                placeholder="Team Name"
                aria-label="First name"
              />
            </div>
            <div class="col">
              <input
                type="text"
                id="sports_name"
                name="sports_name"
                class="form-control"
                placeholder="Sports Name"
                aria-label="Last name"
              />
            </div>
          </div>
          <div class="row g-3 my-3">
            <div class="col">
              <input
                type="text"
                id="match_played"
                name="match_played"
                class="form-control"
                placeholder="Match Played"
                aria-label="First name"
              />
            </div>
            <div class="col">
              <input
                type="text"
                id="match_win"
                name="match_win"
                class="form-control"
                placeholder="Match win"
                aria-label="Last name"
              />
            </div>
            <div class="col">
              <input
                type="text"
                id="match_loose"
                name="match_loose"
                class="form-control"
                placeholder="Match loose"
                aria-label="Last name"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-outline-secondary my-3">create Team</button>
        </form>
      </div>
      {/* <div className="container">
        <Link to="/addPlayers">
            <button type="button" class="btn btn-outline-secondary">AddPlayers</button>
        </Link>
      </div> */}
    </div>
  );
}

export default CreateTeam;
