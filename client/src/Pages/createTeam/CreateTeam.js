import React from "react";
import { Link } from "react-router-dom";
import AddPlayers from "../AddPlayers/AddPlayers";

function CreateTeam() {
  return (
    <div className="container my-5">
      <h1>Create your Team</h1>
      <div className="container mt-4 w-50">
        <form>
          <div class="row g-3">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Team Name"
                aria-label="First name"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Manager Name"
                aria-label="Last name"
              />
            </div>
          </div>
          <div class="row g-3 my-3">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Manager Email"
                aria-label="First name"
              />
            </div>
            <div class="col">
              <input
                type="text"
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
                class="form-control"
                placeholder="Match Played"
                aria-label="First name"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Match win"
                aria-label="Last name"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Match loose"
                aria-label="Last name"
              />
            </div>
          </div>
          <button type="button" class="btn btn-outline-secondary my-3">create Team</button>
        </form>
      </div>
      <div className="container">
        <Link to="/addPlayers">
            <button type="button" class="btn btn-outline-secondary">AddPlayers</button>
        </Link>
      </div>
    </div>
  );
}

export default CreateTeam;
