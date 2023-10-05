import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex bg-slate-100 rounded-lg py-2 px-3">
            <button className="btn bg-red-600 text-white">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
               <Link className="text-lg mr-16 text-black" to='/'> I can be a React component, multiple React components, or just some text.</Link>
               <Link className="text-lg text-black" to='/'> I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;