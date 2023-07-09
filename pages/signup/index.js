import Link from "next/link";
const Signup = () => {
    return (
        <div>
            <section className="py-24 lg:py-28 bg-white overflow-hidden  h-screen">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-heading mb-4 text-4xl text-black tracking-tighter">Create a free account</h2>
                        <p className="mb-16 text-xl text-black tracking-tight">
                            {/* Use and re-use tons of responsive sections too a main create the perfect layout. Sections are ready. */}
                            </p>
                        <form className="flex flex-wrap -m-3" action="#">
                            <div className="w-full md:w-1/2 p-3">
                                <label className="block">
                                    <input className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200" id="signUpInput1-1" type="text" placeholder="First Name" />
                                </label>
                            </div>
                            <div className="w-full md:w-1/2 p-3">
                                <label className="block">
                                    <input className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200" id="signUpInput1-2" type="email" placeholder="Email Address" />
                                </label>
                            </div>
                            <div className="w-full md:w-1/2 p-3">
                                <label className="block">
                                    <input className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200" id="signUpInput1-3" type="password" placeholder="Password" />
                                </label>
                            </div>
                            <div className="w-full md:w-1/2 p-3">
                                <label className="block">
                                    <input className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200" id="signUpInput1-4" type="password" placeholder="Confirm Password" />
                                </label>
                            </div>
                            <div className="w-full p-3">
                                <div className="relative flex p-px bg-transparent overflow-hidden rounded-lg">
                                    <div className="inline-block">
                                        <input className="form-input opacity-0 absolute top-px z-10 h-5 w-5" id="signUpCheckbox1-1" type="checkbox" name="confirm" value="yes" />
                                        <div className="mr-2.5 text-transparent border border-gray-500 w-5 h-5 relative top-px flex justify-center items-center rounded">
                                            <svg className="w-2.5 h-2.5" width="9" height="7" viewbox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.604248 3.77081L2.68758 5.85415L7.89591 0.645813" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <label className="select-none text-gray-400 tracking-tight" htmlForfor="signUpCheckbox1-1">
                                        <span>I agree to the</span>
                                        <a className="text-gray hover:text-gray-200" href="#">Terms &amp; Conditions &amp; Privacy Policy</a>
                                    </label>
                                </div>
                            </div>
                            <div className="w-full p-3">
                                <a className="inline-block mb-7 px-5 py-4 w-full text-grey text-center font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">Create Free Account</a>
                                <span className="font-medium text-grey tracking-tight">
                                    <span>Already have an account?</span>
                                    <Link href="/login">

                                        <a className="text-red-500 hover:text-red-700 transition duration-200" href="#">Sign In</a>

                                    </Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup;