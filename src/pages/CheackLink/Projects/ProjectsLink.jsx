

const ProjectsLink = () => {
    return (


        <div className="mt-12">
            <div className="">
                <h2 className="text-3xl text-center font-serif font-semibold">Projects</h2>
                <hr />
            </div>
            <div className="grid md:grid-cols-3 gap-8  mt-8">
                <div className=" card p-2 border-2">
                    <div className="h-52 w-full">
                        <div className="relative max-w-full h-52 overflow-hidden rounded-lg">
                            <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                <img
                                    src="https://i.ibb.co/CK5Nhy5/bright-melomakarona-5b6d60-netlify-app-1.png"
                                    alt=""
                                    className="w-full object-cover object-top rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <a href=" https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-mahbubur-rahman1" className="rounded-t-2xl border-2 bg-purple-900 text-white font-semibold px-3 py-2 border-r-red-400" >GitHub Link</a>
                        <a href="https://bright-melomakarona-5b6d60.netlify.app/" className="rounded-e-xl text-white font-semibold border-2 px-3 py-2 bg-orange-500 border-r-yellow-400">Live Link</a>
                    </div>
                </div>
                <div className=" card p-2 border-2">
                    <div className="h-52 w-full">
                    <div className="relative max-w-full h-52 overflow-hidden rounded-lg">
                            <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                <img
                                    src="https://i.ibb.co/ZzqNxvZ/assignment-12-projects-web-app.png"
                                    alt=""
                                    className="w-full object-cover object-top rounded-lg"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-between">
                        <a href=" https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-mahbubur-rahman1" className="rounded-t-2xl border-2 bg-purple-900 text-white font-semibold px-3 py-2 border-r-red-400" >GitHub Link</a>
                        <a href="https://assignment-12-projects.web.app/" className="rounded-e-xl text-white font-semibold border-2 px-3 py-2 bg-orange-500 border-r-yellow-400">Live Link</a>
                    </div>
                </div>
                <div className=" card p-2 border-2">
                    <div className="h-52 w-full">
                        <div className="relative max-w-full h-52 overflow-hidden rounded-lg">
                            <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                <img
                                    src="https://i.ibb.co/vz9Gw0Y/assingment-client-site-web-app.png"
                                    alt=""
                                    className="w-full object-cover object-top rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <a href=" https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-mahbubur-rahman1" className="rounded-t-2xl border-2 bg-purple-900 text-white font-semibold px-3 py-2 border-r-red-400" >GitHub Link</a>
                        <a href="https://assingment-client-site.web.app/" className="rounded-e-xl text-white font-semibold border-2 px-3 py-2 bg-orange-500 border-r-yellow-400">Live Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsLink;