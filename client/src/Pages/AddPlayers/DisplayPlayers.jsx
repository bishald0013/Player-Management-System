import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getToken } from "../../service/localStorage";
import { useGetPlayerQuery } from "../../service/playerApi";
import AllPlayers from "./AllPlayers";

function DisplayPlayers() {
  const [players, setPlayers] = useState({
    allPlayers: [],
  });

  const token = getToken();
  const { data, isSuccess } = useGetPlayerQuery(token);

  useEffect(() => {
    if (data && isSuccess) {
      setPlayers({
        allPlayers: data.msg,
      });
    }
  }, [data, isSuccess]);

  const { allPlayers } = players;
  console.log(allPlayers);
  // console.log(data.msg)

  return (
    <div className="container">
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Player Name</th>
            <th scope="col">Rating</th>
            <th scope="col">Match Played</th>
          </tr>
        </thead>
      </table>

      {allPlayers.map((p) => {
        return <AllPlayers p={p} key={p._id} />;
      })}
    </div>
  );
}

export default DisplayPlayers;
