import SelectedPlayer from "./SelectedPlayer";
const addMorePlayerBtnStyle = {
    border: '4px solid #fff',
    outline: '1px solid rgb(134 239 172)',
    backgroundColor: 'rgb(134 239 172)',
}
const SelectedPlayers = ({selected, setSelected, setAvailable}) => {
    return (
        <div className="space-y-6">
            {selected.map(player => <SelectedPlayer key={player.id} player={player} selected={selected} setSelected={setSelected}></SelectedPlayer>)}

            <button style={addMorePlayerBtnStyle} className="bg-green-400 px-4 py-2 rounded-md font-semibold" onClick={() => setAvailable(true)}>Add More Player</button>
            
        </div>
    );
};

export default SelectedPlayers;