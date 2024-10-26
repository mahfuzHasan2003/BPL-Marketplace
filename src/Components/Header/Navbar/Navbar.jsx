import { BsCoin } from "react-icons/bs";
import logo from "../../../assets/Images/logo.png"

const Navbar = ({coin}) => {
    return (
        <div className="flex py-3 items-center justify-between sticky top-0 backdrop-blur w-11/12 max-w-7xl mx-auto space-y-8 bg-[#ffffff42] z-10">
            <div className="hidden md:block">
                <img src={logo} alt="" />
            </div>
            <div>
                <ul className="flex gap-3 md:gap-8 items-center">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Fixture</a></li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Schedules</a></li>
                    <li className="inline-flex gap-2 items-center border p-2 rounded-md">
                        <span>{coin}</span> Coin <BsCoin className="text-yellow-600 text-xl"/>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;