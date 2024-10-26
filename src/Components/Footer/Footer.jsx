import footerLogo from '../../assets/Images/logo-footer.png'

const Footer = () => {
    return (
        <div className="bg-[#06091A] space-y-12 pt-72  md:pt-64 pb-5">
            <div className="w-11/12 max-w-7xl mx-auto">
                <img src={footerLogo} alt="" className="mx-auto mb-8"/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="space-y-4">
                        <h4 className="text-white text-lg font-semibold">About Us</h4>
                        <p className="text-[#ffffffb3]">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className="space-y-4 place-self-center">
                        <h4 className="text-white text-lg font-semibold">Quick Links</h4>
                        <ul className="list-disc text-[#ffffffb3] list-inside">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-white text-lg font-semibold">Subscribe</h4>
                        <p className="text-[#ffffffb3]">Subscribe to our newsletter for the latest updates.</p>
                        <div className="inline-flex justify-center flex-col md:flex-row rounded-md overflow-hidden">
                            <input type="email" placeholder="Enter your email" className="px-4 py-2 outline-none border"/> 
                            <button className="bg-gradient-to-r from-rose-400 to-red-500 px-4 py-2  text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-slate-600"/>
            <p className="text-center text-white"> @Mahfuz | All Rights Reserved.</p>
        </div>
    );
};

export default Footer;