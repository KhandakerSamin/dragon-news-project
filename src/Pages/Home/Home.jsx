import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSIdeNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();
    // console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <section className="grid grid-cols-1  md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2">
                    <h1 className="text-4xl">News Comming soon</h1>
                    {
                        news.map (aNews => <NewsCard key={aNews._id}
                        news = {aNews}
                        ></NewsCard>)
                    }
                </div>
                <div >
                    <RightSideNav></RightSideNav>
                </div>
            </section>
        </div>
    );
};

export default Home;