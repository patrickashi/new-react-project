import React from "react"

const Newsletter = () => {
    return ( 
        <div className="w-full py-16 text-white">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="col-span-2 my-4">
                    <h1 className="md:text-4xl sm-text-3xl text-2xl font-bold py-2">Wants tips & Tricks to optimize your flow?</h1>
                    <p className="">Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className="p-3 w-full rounded-md text-black px-4" type = "email" placeholder="Enter email" />
                        <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium mx-auto md:mx-0 py-3 ml-4 md:ml-4 my-6">Notify me</button>
                    </div>
                    <p> We care about the protection of your data. Read our <span className="text-[#00df9a]">privacy policy.</span> </p>
                </div>
            </div>

        </div>
     );
}
 
export default Newsletter;