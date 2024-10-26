import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SelectedPlayer = ({selected, setSelected, player}) => {
    const {image, name, role} = player;
    const removePlayer = () => {
        setSelected(selected.filter((p) => p !== player));
        toast.warning('Player removed!!');
    };
    return (
        <div className="flex justify-between items-center border rounded-md p-4">
            <div className="flex gap-3 items-center">
                <div>
                    <img src={image} alt="" className="object-cover aspect-square w-20 border rounded-xl" />
                </div>
                <div>
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-[#13131399]">{role}</p>
                </div>
            </div>
            <div className="text-red-700 text-xl cursor-pointer" 
            onClick={removePlayer}
            ><FaRegTrashAlt /></div>
        </div>
    );
};

export default SelectedPlayer;