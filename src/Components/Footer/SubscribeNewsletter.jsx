import './SubscribeNewsletter.css';
const SubscribeNewsletter = () => {
    return (
        <div className='w-11/12 max-w-7xl mx-auto space-y-2 p-5 border rounded-md bg-[#ffffff26] absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2'>
            <div className="text-center rounded-md space-y-4 py-32" id="subscribe-newsletter">
                <h2 className="text-2xl font-bold">Subscribe to our Newsletter</h2>
                <p>Get the latest updates and news right in your inbox!</p>
                <div className="inline-flex gap-3 justify-center flex-col md:flex-row">
                    <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-md outline-none border min-w-80" /> 
                    <button className="bg-gradient-to-r from-rose-400 to-red-500 px-4 py-2 rounded-md text-white">Subscribe</button>
                </div>
            </div>
           
        </div>
    );
};

export default SubscribeNewsletter;




{/* <div class="py-20"></div>

<footer class="relative">
  <div class="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-full container mx-auto">
    <div class="rounded-md border bg-white p-20 relative"></div>
  </div>

  <div class="bg-black p-20">
    <div>Footer Cotnent</div>
  </div>
</footer> */}
