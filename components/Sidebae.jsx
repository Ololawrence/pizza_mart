import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="flex-row lg:flex">
            <div className="flex flex-col w-full p-3 bg-white shadow lg:h-screen lg:w-72">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="menu text-xl font-bold">Our Menus</h2>
                    </div>
               
                    {/* side links */}

                    <ul className="dashboard pt-2 pb-4 space-y-1 text-sm">
                        <li className="rounded-sm">



                            <Link
                                href='/cheeze'
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >

                                <span>Cheese Pizza</span>
                            </Link>


                        </li>

                        <li className="rounded-sm">
                            <Link
                                href="/PepperoniPizza"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <span>Pepperoni Pizza</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                                href="/MeatPizza"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <span>Meat Pizza</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                                href="/Margherita Pizza"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <span>Margherita Pizza</span>
                            </Link>
                        </li>

                        <li className="rounded-sm">
                            <Link
                                href="/BBQ"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <span>BBQ Chicken Pizza</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                                href="/Hawaiian"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <span>Hawaiian Pizza</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                                href="/Buffalo Pizza"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <span>Buffalo Pizza</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                                href="/Supreme"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <span>Supreme Pizza</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                                href="/TheWorks"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <span>The Works Pizza</span>
                            </Link>
                        </li>


                    </ul>



                </div>
            </div>
            <div className="container mx-auto mt-12">
               <p>hellooooo</p>
            </div>
        </div>
    );
}