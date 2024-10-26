import { useEffect, useState } from "react";
import Player from "./Player/Player";

const AvailablePlayers = ({coin, setCoin, selected, setSelected}) => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('player-data.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

         {players.map(player => <Player key={player.id} player={player} setSelected={setSelected} selected={selected} coin={coin} setCoin={setCoin}></Player>)}
         
        </div>
    );
};

export default AvailablePlayers;