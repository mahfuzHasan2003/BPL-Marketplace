import { CgProfile } from "react-icons/cg";
import { FaRegFlag } from "react-icons/fa";
import { toast } from 'react-toastify';

const Player = ({coin, setCoin, player, selected, setSelected}) => {
    const {name, image, country, role, rating, price} = player;

    const choosePlayerAction = (player, price) => {
        if (coin-price<0) {
            toast.error('Insufficient Credit!');
            return;
        };
        if(selected.includes(player)) {
            toast.error('Already Added!');
            return;
        };
        if(selected.length>5) {
            toast.error('Maximum number of players added!');
            return;
        }
        toast.success(`${name} added to your squad.`);
        setSelected([...selected, player]);
        setCoin(coin - price);
    }

    return (
        <div className="p-3 border rounded-md space-y-3">
            <img src={image} alt="" className="rounded-md" />
            <h3 className="flex items-center font-semibold gap-2 text-xl"> <CgProfile /> {name} </h3>
            <div className="flex items-center justify-between">
                <p className="flex gap-2 items-center"> <FaRegFlag /> {country} </p>
                <p className="px-2 py-1 bg-gray-100 rounded-md">{role}</p>
            </div>
            <hr />
            <p className="flex justify-between items-center">
                <span className="font-semibold">Rating</span>
                <span className="text-sm">{"⭐".repeat(rating) }</span>
            </p>
            <div className="flex justify-between items-center">
                <p className="font-semibold">Price : ${price}</p>
                <button className="px-4 py-2 border rounded-md" onClick={() => choosePlayerAction(player, price)}>Choose Player</button>
            </div>
        </div>
    );
};

export default Player;