import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { tabs } from '../constants/Index';
import { useKitchen } from "../context/KitchenContext";

export const Header = () => {

    const {
        active,
        setActive,
        search,
        setSearch,
        showOrders
    } = useKitchen();

    const getTodayDate = () => {
        const today = new Date();

        const options = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        };

        return today.toLocaleDateString("en-US", options);
    };

    return (
        <div>
            <div className="flex-1 fixed top-0 z-30 bg-[#2D303E] pt-4 w-full transition-all duration-300">

                <div className="w-full px-5 -h-screen flex flex-col">
                    <div className="flex lg:items-center justify-between mt-4 lg:flex-row flex-col p-0 lg:space-y-0 space-y-4">


                        <div className="flex flex-row mt-0">


                            <div className="flex flex-col mt-2">

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <h1 className="text-[#E0E6E9] text-3xl">Chef Kitchen</h1>
                                </motion.div>

                                <p className="text-[#E0E6E9] opacity-50">
                                    {getTodayDate()}
                                </p>
                            </div>


                        </div>
                        <div className={`relative w-full sm:w-full lg:w-60  mb-4
              
              ${showOrders ? "lg:mr-100" : "lg:mr-0"}`}>

                            <FiSearch className="absolute lg:-left-46 lg:top-5 lg:-translate-y-1/2 text-white opacity-70 z-10 
                                    left-4 top-3.5" />
                            <input
                                type="search"
                                placeholder="search for food..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="absolute right-0 lg:right-50 lg:px-10 px-10 py-2 w-full rounded-2xl bg-[#393C49] text-white outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex text-white lg:mt-0 mt-3 space-x-6 py-5 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActive(tab.id)}
                                className={
                                    active === tab.id ? "text-[#F99147]" : "text-white"
                                }
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full mt-2">
                        <div className="w-full border-b-2 border-gray-600"></div>

                        <div
                            className="absolute top-0 border-b-4 border-[#F99147] rounded-full transition-all"
                            style={{
                                width: "80px",
                                left:
                                    active === "today"
                                        ? "0px"
                                        : active === "our"
                                            ? "120px "
                                            : "225px",
                            }}
                        ></div>
                    </div>

                    <div className="border-b border-gray-600 mb-6"></div>
                </div>
            </div>

        </div>
    )
}
