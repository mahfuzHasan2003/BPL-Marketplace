import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import "./Players.css"
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({available, setAvailable, selected, setSelected, coin, setCoin}) => {
    return (
        <div className="mb-64">
             <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold">{available ? "Available Players" : `Selected Players ${selected.length}/6`}</h3>
                <div className="border rounded-lg overflow-hidden">
                    <button className={available ? "players-tab-btn-active" : "players-tab-btn"}onClick={() => setAvailable(true)}>Available</button>
                    <button className={!available ? "players-tab-btn-active" : "players-tab-btn"}onClick={() => setAvailable(false)}>Selected({selected.length})</button>
                </div>
             </div>

             {available ? 
             <AvailablePlayers selected={selected} setSelected={setSelected} coin={coin} setCoin={setCoin}></AvailablePlayers> 
             : <SelectedPlayers selected={selected} setSelected={setSelected}  setAvailable={setAvailable}></SelectedPlayers>}

        </div>
    );
};

export default Players;