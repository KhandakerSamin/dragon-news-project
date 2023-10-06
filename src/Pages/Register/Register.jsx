import {  Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {

    const{ createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email , password);

        // create user
        createUser(email,password)
        .then(res => {
            console.log(res.user)
        })
        .catch(err =>{ 
            console.log(err)
        })

    }
    return (
        <div className="">
        <Navbar></Navbar>
        <div className="card flex-shrink-0 rounded-none w-full max-w-xl bg-gray-100  mx-auto  my-20">
            <h1 className="text-center text-4xl font-semibold mt-12 border-b-2 mx-16 pb-10">Register your account </h1>
            <form onSubmit={handleRegister} className="card-body mx-8">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Your Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered rounded-md" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered rounded-md" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Email address</span>
                    </label>
                    <input type="email" name="email" placeholder="Enter your password" className="input input-bordered rounded-md" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                </div>
                <div className="flex gap-x-3 items-center pt-2">
                        <input type="checkbox" required name="terms" id="" />
                        <p className="font-semibold">Accept <Link className="text-blue-400">Term & Conditions</Link></p>
                    </div>
                <div className="form-control w-full mt-6">
                    <Link to='/login'><button type="submit" className="btn bg-[#403F3F] w-full  text-white hover:text-black ">Register</button></Link>
                </div>
                <div>
                    <h1 className="font-semibold text-base text-center mb-8 mt-2">Already Have An Account ? <Link to='/login' className="text-red-600">Login</Link></h1>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Register;