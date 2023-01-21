import React from "react";

function AddPlayers() {
  return (
    <div className="main container mt-5">
      <span className="my-5">Add Players</span>
      <div className="container w-25">
        <form>
          <div class="form-floating mb-3">
            <input
              type="name"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Player Name</label>
          </div>
          <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Rating"
              />
            </div>
            <button type="button" class="btn btn-outline-secondary my-3">Add Players</button>
        </form>
      </div>
    </div>
  );
}

export default AddPlayers;
