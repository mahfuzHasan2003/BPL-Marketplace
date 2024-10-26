
const SelectedPlayer = ({selected, setSelected, player}) => {
    const {image, name, role} = player;
    return (
        <div>
            {name}
        </div>
    );
};

export default SelectedPlayer;