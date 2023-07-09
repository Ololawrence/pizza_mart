import Link from "next/link";
const Login = () => {
    return (
        <div>
            <section className="py-24 lg:py-28 bg-white overflow-hidden h-screen">
                <div className="container px-4 mx-auto my-5">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-heading mb-16 text-4xl text-black tracking-tighter">Login to your account</h2>
                        <p className="mb-16 text-xl text-black tracking-tight">
                            {/* Use and re-use tons of responsive sections too a main create the perfect layout. Sections are ready. */}
                        </p>
                        <form className="flex flex-wrap -m-3" action="#">
   
                            <div className="w-full md:w-1/2 p-3">
                                <label className="block">
                                    <input className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200" id="LoginInput1-2" type="email" placeholder="Email Address" />
                                </label>
                            </div>
                            <div className="w-full md:w-1/2 p-3">
                                <label className="block">
                                    <input className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200" id="signUpInput1-3" type="password" placeholder="Password" />
                                </label>
                            </div>
                         
                        
                            <div className="w-full p-3">
                                <a className="inline-block mb-7 px-5 py-4 w-full text-grey text-center font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">Login</a>
                                <span className="font-medium text-grey tracking-tight">
                                    <span>Dont have an account?</span>
                                    <Link href="/signup">

                                        <a className="text-red-500 hover:text-red-700 transition duration-200" href="#">Sign up</a>

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

export default Login;