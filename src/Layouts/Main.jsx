import { Outlet } from "react-router-dom";
import Header from "../component/Header/Header";
import Banner from "../component/Banner/Banner";
import About from "../component/About/About";
import Skill from "../component/Skill/Skill";
import Portfolio from "../component/Portfolio/Portfolio.Jsx";
import Contact from "../component/Contact/Contact";
import Footer from "../component/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner> 
            <About></About>
            <Skill></Skill>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;