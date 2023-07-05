import img1 from "../../../assets/WhatsApp Image 2023-07-01 at 18.43.58.jpg"
import { useTypewriter } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css';
import resume from "../../../assets/Education (1).pdf"
import { Link } from "react-router-dom";


AOS.init();



const Banner = () => {
    const [text] = useTypewriter({
        words: ['Fron-ent Web Developer'],
        loop: 0
    })

    return (
        <div className="grid md:grid-cols-2 items-center mt-7  ">
            <div data-aos="fade-up"
                data-aos-duration="3000" className="">
                <div className="">
                    <h2 className="text-3xl mb-2"><span className=" text-orange-500 font-semibold">Hi,</span> <span className="text-violet-800 font-semibold"> I am</span> <span className="text-3xl text-red-500 font-semibold">Mahbubur Rahman</span></h2>


                    <h2 className="text-2xl text-orange-600 font-semibold">{text}</h2>

                </div>

                <div className=" mt-7 mb-6">
                    <h4 className="">Welcome to my front-end web developer portfolio website, where code comes alive with stunning designs and seamless interactivity.
                        Explore my portfolio showcasing cutting-edge front-end web development skills, delivering engaging user experiences across all devices.
                        Experience the fusion of creativity and technical expertise on my front-end web developer portfolio, highlighting my passion for crafting visually captivating websites.</h4>
                </div>

                <div className="flex gap-5">

                    <button className="border-x-8 drop-shadow-2xl  rounded-t-2xl font-semibold  border-b-4 py-2 px-5 border-r-orange-500"> 
                    <a href={resume} download="Resume"> Download Reume</a></button>
                    <button className="rounded-t-2xl drop-shadow-2xl border-y-2 border-orange-600 font-semibold py-2 px-5"><Link to="/contact">Hire Me</Link></button>

                    <a href=""> </a>
                </div>

            </div>

            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="mx-auto">
                <img className="h-64 w-64 rounded-t-3xl border-2 border-orange-400" src={img1} alt="" />
            </div>


        </div>
    );
};

export default Banner;