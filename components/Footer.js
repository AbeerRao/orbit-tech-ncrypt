function Footer() {
     return (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
               <div className="space-y-4 text-xs test-gray-800">
                    <h5 className="font-bold cursor-pointer">ABOUT</h5>
                    <p className="cursor-pointer">How Airbnb works</p>
                    <p className="cursor-pointer">Newsroom</p>
                    <p className="cursor-pointer">Investors</p>
                    <p className="cursor-pointer">Airbnb Plus</p>
                    <p className="cursor-pointer">Airbnb Luxe</p>
               </div>
               <div className="space-y-4 text-xs test-gray-800">
                    <h5 className="font-bold cursor-pointer">COMMUNITY</h5>
                    <p className="cursor-pointer">Accessibility</p>
                    <p className="cursor-pointer">This is not the real site</p>
                    <p className="cursor-pointer">It's an awesome clone</p>
                    <p className="cursor-pointer">Referrals accepted</p>
                    <p className="cursor-pointer">Next.js clone</p>
               </div>
               <div className="space-y-4 text-xs test-gray-800">
                    <h5 className="font-bold cursor-pointer">HOST</h5>
                    <p className="cursor-pointer">Eligibility</p>
                    <p className="cursor-pointer">Locations</p>
                    <p className="cursor-pointer">Payments</p>
                    <p className="cursor-pointer">Type</p>
                    <p className="cursor-pointer">Conditions</p>
               </div>
               <div className="space-y-4 text-xs test-gray-800">
                    <h5 className="font-bold cursor-pointer">SUPPORT</h5>
                    <p className="cursor-pointer">Help Center</p>
                    <p className="cursor-pointer">Trust & Safety</p>
                    <p className="cursor-pointer">Staff</p>
                    <p className="cursor-pointer">Easter Eggs</p>
                    <p className="cursor-pointer">For The Win</p>
               </div>
          </div>
     )
}

export default Footer
