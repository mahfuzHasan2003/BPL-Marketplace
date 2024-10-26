import HeaderBanner from "./HeaderBanner/HeaderBanner";
import Navbar from "./Navbar/Navbar";

const Header = ({coin, setCoin}) => {
    return (
        <div>
            <Navbar coin={coin}></Navbar>
            <HeaderBanner setCoin={setCoin} coin={coin}></HeaderBanner>
        </div>
    );
};

export default Header;