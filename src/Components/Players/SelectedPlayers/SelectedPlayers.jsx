import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({selected, setSelected}) => {
    return (
        <div>
            {selected.map(player => <SelectedPlayer key={player.id} player={player}></SelectedPlayer>)}
        </div>
    );
};

export default SelectedPlayers;