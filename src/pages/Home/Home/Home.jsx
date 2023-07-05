import About from "../Skils/Skils";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

const Home = () => {
    return (
        <div className="max-w-screen-lg p-3 mx-auto">
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};
export default Home;