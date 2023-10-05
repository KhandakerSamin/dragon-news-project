import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSIdeNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h1 className="text-4xl font-display">This is Home</h1>
            <section className="grid grid-cols-1  md:grid-cols-4 gap-6">
                <div className=""><LeftSideNav></LeftSideNav></div>
                <div className="lg:col-span-2"><h1 className="text-4xl">News Comming soon</h1></div>
                <div className=""><RightSideNav></RightSideNav></div>
            </section>
        </div>
    );
};

export default Home;