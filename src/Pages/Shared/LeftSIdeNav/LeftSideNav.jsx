import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-3 mt-3 ml-4">All Categories</h1>
            {
                categories.map(category => <Link
                    className="block"
                    key={category.id}
                    to={`/category/${category.id}`}
                >
                   <button className=" rounded-none text-xl font-medium bg-transparent btn my-2 w-full border-none text-left text-[#9F9F9F]  hover:text-black  justify-start pl-10"> {category.name}</button></Link>)
            }
        </div>
    );
};

export default LeftSideNav;