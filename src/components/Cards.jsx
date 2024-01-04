import React from "react"
import single from "../assets/single.png"
import double from "../assets/double.png"
import triple from "../assets/triple.png"

const Cards = () => {
    return ( 
        < div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={single} alt="/" />
                    <h2 className="text-2xl py-8 font-bold text-center">Single User</h2>
                    <p className="text-4xl text-center font-bold ">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">500gb store</p>
                        <p className="py-2 border-b mx-8">1 granted user</p>
                        <p className="py-2 border-b mx-8">Send up to 2 gb</p>
                    </div>
                    <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium mx-auto  py-3  my-6">Start Trial</button>
                </div>
                <div className="border shadow-xl  bg-gray-100 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={double} alt="/" />
                    <h2 className="text-2xl py-8 font-bold text-center">Single User</h2>
                    <p className="text-4xl text-center font-bold ">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">500gb store</p>
                        <p className="py-2 border-b mx-8">1 granted user</p>
                        <p className="py-2 border-b mx-8">Send up to 2 gb</p>
                    </div>
                    <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium mx-auto  py-3  my-6">Start Trial</button>
                </div>
                <div className="border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={triple} alt="/" />
                    <h2 className="text-2xl py-8 font-bold text-center">Single User</h2>
                    <p className="text-4xl text-center font-bold ">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">500gb store</p>
                        <p className="py-2 border-b mx-8">1 granted user</p>
                        <p className="py-2 border-b mx-8">Send up to 2 gb</p>
                    </div>
                    <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium mx-auto  py-3  my-6">Start Trial</button>
                </div>
            </div>
        </div>
     );
}
 
export default Cards;