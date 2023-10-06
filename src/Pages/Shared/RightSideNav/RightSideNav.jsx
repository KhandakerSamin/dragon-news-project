import {  FaGithub, FaFacebook, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import bgImg from '../../../assets/bg.png'
const RightSideNav = () => {
    return (
        <div>
            {/* Log in with */}
            <div className="m-2">
                <h2 className="font-semibold text-xl ml-2 ">Login With</h2>
                <button className="btn btn-outline bg-transparent w-full mt-5 mb-2 text-blue-500">
                    <FcGoogle className="text-xl"></FcGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline bg-transparent w-full mb-2 ">
                   <FaGithub className="text-xl"></FaGithub>
                    Login with Github
                </button>
            </div>
            {/* Find us on */}
            <div className="m-2">
                <h2 className="font-semibold text-xl ml-2 mb-4 mt-2">Find Us On</h2>
                <div className="border rounded-lg">
                <a className="flex items-center border-b w-full px-4 py-3  gap-x-3 font-medium" href="">
                    <FaFacebook className="text-blue-800 text-xl"></FaFacebook> Facebook
                </a>
                <a className="flex items-center border-b w-full px-4 py-3  gap-x-3 font-medium" href="">
                    <FaSquareXTwitter className= "text-xl text-black"></FaSquareXTwitter> Twitter
                </a>
                <a className="flex items-center w-full px-4 py-3  gap-x-3 font-medium" href="">
                    <FaInstagram className="text-xl text-orange-700"></FaInstagram> Instagram
                </a>
                </div>
            </div>
            {/* Q zone */}
            <div className="bg-slate-100 pb-6 m-2 mt-4">
                <h1 className="text-xl font-semibold ml-4 mb-4 pt-3">Q-Zone</h1>
                <div className="mx-auto">
                <img className="mx-auto" src={qZone1} alt="" />
                <img className="mx-auto" src={qZone2} alt="" />
                <img className="mx-auto" src={qZone3} alt="" />
                </div>
            </div>
            {/* Add */}
            <div className="bg-cover bg-center h-[450px] mt-6 m-2"  style={{backgroundImage: `url(${bgImg})`}}>
                <h1 className="font-bold text-3xl pt-16 px-10 pb-8 text-center text-white">Create an Amazing Newspaper</h1>
                <p className="font-normal px-6 text-center mb-8 text-white">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <div className="flex justify-center"> 
                <button className="text-white px-3 py-2 bg-red-600 btn border-none mx-auto rounded-none ">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;