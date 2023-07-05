

const ContactLink = () => {
    return (
        <div className="mt-12">

            <div className="">
                <h2 className="text-3xl text-center font-serif font-semibold">Contact</h2>
                <hr />
            </div>

            <div className="  mt-11 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl text-orange-500 font-semibold">Contact </h1>
                        <p className="py-1 text-orange-600  font-semibold text-2xl">Phone: +8801779467258 </p>
                        <p className="py-1 text-orange-600 font-semibold text-2xl">Email: mahbuburlabib@gmail.com</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="Type Your Name" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <input type="text" placeholder="Type Your Message Here" className="input h-32" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactLink;