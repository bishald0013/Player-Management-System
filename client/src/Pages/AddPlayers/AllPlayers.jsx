import React from "react";

function AllPlayers({ p }) {
  return (
    <div className="container">
      <table class="table">
        <tbody>
          <tr>
            <td>{p.playerName}</td>
            <td>{p.rating}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AllPlayers;
