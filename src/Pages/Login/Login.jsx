import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log("Location in login", location);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
            .then(res => {
                console.log(res);
                //
                navigate(location?.state? location.state : '/')
            })
            .catch(err => {
                console.log(err);
            })

    }
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="card flex-shrink-0 rounded-none w-full max-w-xl bg-gray-100  mx-auto  my-20">
                <h1 className="text-center text-4xl font-semibold mt-12 border-b-2 mx-16 pb-10">Login your account </h1>
                <form onSubmit={handleLogin} className="card-body mx-8">
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

                    <div className="form-control mt-6 w-full">
                        <button className="btn bg-[#403F3F] w-full text-white hover:text-black " type="submit">Login</button>
                    </div>
                    <div>
                        <h1 className="font-semibold text-base text-center mb-8 mt-2">Dont’t Have An Account ? <Link to='/register' className="text-red-600">Register</Link></h1>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;