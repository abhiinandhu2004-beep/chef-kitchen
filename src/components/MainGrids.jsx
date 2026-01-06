import Lottie from "lottie-react";
import { ChevronDown } from 'lucide-react';
import notFound from "../assets/No Data Found.json"
import { useKitchen } from "../context/KitchenContext";

export const MainGrids = ({
  }) => {

const {
       filteredMenuItems,
    showType,
    setShowType,
    showOrders,
    orderType,
    setOrderType,
    setShowOrders,
    totalQty,
    getPriceBySize,
    selectedSizes = {},
    cart = [],
    handleAddToCart,
    handleSizeSelect
}=useKitchen();

    return (
        <div>
            <div className="flex-1 overflow-y-auto h-200px pr-2 hide-scrollbar lg:pt-55 md:pt-80 pt-70 px-4 pb-15">

                <div className="flex flex-row justify-between  ">

                    <div className="flex items-center ">
                        <h2 className="text-white lg:text-lg text-sm  ">Choose Dishes</h2>

                    </div>

                    <div className="relative flex  gap-4 ">
                        <button
                            onClick={() => setShowType(!showType)}
                            className="flex items-center gap-1 bg-[#2D303E] px-5 py-2 rounded-lg border border-gray-600 text-white cursor-pointer  text-sm w-37"
                        >
                            {orderType}
                            <span className="px-2"> <ChevronDown className="w-5" /></span>
                        </button>

                        {showType && (
                            <div className="absolute right-10 mt-8 w-40 bg-[#2D303E] rounded-lg shadow-lg overflow-hidden z-10 text-sm">
                                {["Dine In", "Take Away", "Delivery"].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => {
                                            setOrderType(type);
                                            setShowType(false);
                                        }}
                                        className="w-full  px-4 py-2 hover:bg-amber-500 text-white  cursor-pointer"
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        )}
                        <div className="relative">
                            {totalQty > 0 && (
                                <div className="rounded-full z-10 w-6 h-6 absolute right-26 -top-2 bg-red-500 text-white flex items-center justify-center text-xs">
                                    {totalQty}
                                </div>
                            )}

                            <button
                                onClick={() => {
                                    setShowOrders(true);
                                    { () => setShowOrders(false) }
                                }}
                                className="bg-orange-400 text-white w-30 p-2 rounded-lg cursor-pointer"
                            >Order Now
                            </button>
                        </div>


                    </div>
                </div>

                {filteredMenuItems.length === 0 && (
                    <div className="flex  items-center lg:mt-30  ">
                        <p className="flex items-center justify-center lg:px-120 px-10">
                            <Lottie
                                animationData={notFound}
                                loop
                                className="w-70 h-70"
                            />
                        </p>
                    </div>
                )}

                <div
                    className={`grid gap-8 transition-all duration-300
                                 grid-cols-2
                                 ${showOrders ? "md:grid-cols-3 gap-17" : "md:grid-cols-5"}
                             `}>

                    {filteredMenuItems.map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#1F2335] rounded-xl p-3 relative pb-5 mt-16"
                        >
                            <img
                                src={item.img}
                                className="w-24 rounded-full absolute -top-10 left-1/2 -translate-x-1/2"
                            />

                            <h3 className="mt-16 text-xs text-white text-center">
                                {item.title}
                            </h3>

                            <div className="flex justify-center gap-2 mt-2">
                                {item.oldPrice && (
                                    <span className="line-through text-[#FF3B30AD] text-sm">
                                        {item.oldPrice} AED
                                    </span>
                                )}
                                <span className="text-[#34C759] font-bold text-sm">
                                    {getPriceBySize(item.price, selectedSizes[item.title])} AED
                                </span>
                            </div>

                            <p className="text-xs text-gray-400 text-center mt-2">
                                {item.bowls} Bowls available
                            </p>

                            <div className="flex justify-center gap-2 mt-3">
                                {item.sizes.map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => handleSizeSelect(item.title, s)}
                                        className={`text-xs px-2 py-1 rounded-md border
                          ${selectedSizes[item.title] === s
                                                ? "bg-[#F99147] text-white border-[#F99147]"
                                                : "border-gray-500 text-white hover:bg-[#F99147]"
                                            }`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                            <div className="flex justify-center mt-6">
                                <div className="flex justify-center mt-6">
                                    <button
                                        onClick={() => {
                                            handleAddToCart(item);
                                            setShowOrders(true);

                                        }}

                                        className={`
      px-6 py-2 rounded-xl text-white transition-all duration-300 
      ${cart.some((cartItem) => cartItem.title === item.title &&
                                            cartItem.size === (selectedSizes[item.title] || "L"))
                                                ? "bg-green-500 cursor-pointer rotate-scale"
                                                : " cursor-pointer bg-orange-400"}`}
                                    >
                                        {cart.some((cartItem) => cartItem.title === item.title &&
                                            cartItem.size === (selectedSizes[item.title] || "L"))
                                            ? "Added ✓"
                                            : "Add"}
                                    </button>
                                </div>


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
