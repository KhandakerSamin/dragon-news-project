/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark, FaShareNodes } from "react-icons/fa6";

const NewsCard = ({news}) => {
    const {title ,author,total_view,rating, _id,details,image_url,thumbnail_url} = news ;
    return (
        <section>
            {/* author div */}
            <div className="flex rounded-md items-center justify-between bg-slate-200 w-full p-2 my-4">
                <div className="flex items-center gap-x-3 ">
                    <img className="w-10 h-10 rounded-full" src={author.img} alt="" />
                    <div>
                       
                    <h1 className="font-semibold">{author.name}</h1>
                    <p>{author.published_date}</p>
                    </div>
                </div>
                    <div className="flex items-center">
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareNodes className="mx-2"></FaShareNodes>
                    </div>
            </div>
            {/* tittle div */}
            <div>
                <h1 className="font-bold text-xl">{title}</h1>
                <img className="w-full h-80" src={image_url} alt="" />
                <p>{
                    details.length > 200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-orange-700 font-bold">  Read More ...</Link></p> : <p>{details}</p>
                    } </p>
                <hr />
                <div className="flex items-center justify-between">
                    <h1>rating</h1>
                    <div className="flex items-center gap-2 mt-3 pr-1">
                        <FaEye></FaEye>
                    <h1>{total_view}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsCard;