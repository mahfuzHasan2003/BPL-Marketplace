import "./HeaderBanner.css"
import bannerLogo from "../../../assets/Images/banner-main.png"
import { toast } from 'react-toastify';
const HeaderBanner = ({ coin, setCoin }) => {
    return (
        <div className="text-center rounded-md py-8 px-4 space-y-4" id="header-banner">
            <img src={bannerLogo} alt="" className="mx-auto"/>
            <h2 className="text-4xl text-white font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className="text-[#ffffffb3]">Beyond Boundaries Beyond Limits</p>
            <button id="claim-credit" className="bg-green-400 px-4 py-2 rounded-md font-semibold" onClick={() => {setCoin(coin + 19999); toast.success("Credit Added Successfully!")}}>Claim Free Credit</button> 
        </div>
    );
};

export default HeaderBanner;