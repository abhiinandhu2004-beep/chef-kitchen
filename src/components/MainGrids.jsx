import Lottie from "lottie-react";
import { ChevronDown } from "lucide-react";
import notFound from "../assets/No Data Found.json";
import { useKitchen } from "../context/KitchenContext";

export const MainGrids = ({ }) => {
  const {
    filteredMenuItems,
    showType,
    setShowType,
    orderType,
    setOrderType,
    setShowOrders,
    totalQty,
    getPriceBySize,
    selectedSizes = {},
    cart = [],
    handleAddToCart,
    handleSizeSelect,
  } = useKitchen();

  return (
    <div className="w-full flex-1">
      <div className="flex-1 overflow-y-auto h-200px pr-2 hide-scrollbar lg:pt-55 md:pt-80 pt-70  lg:px-4 px-4 pb-15">
        <div className="flex flex-row justify-between">
          <div className="flex items-center">
            <h2 className="text-white lg:text-lg text-sm lg:flex hidden">Choose Dishes</h2>
          </div>

          <div className="relative flex gap-4 ">
            <button
              onClick={() => setShowType(!showType)}
              className="flex items-center gap-1 bg-[#2D303E] px-5 py-2 rounded-lg border border-gray-600 text-white cursor-pointer text-sm w-37"
            >
              {orderType}
              <span className="px-2">
                <ChevronDown className="w-5" />
              </span>
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
                    className="w-full px-4 py-2 hover:bg-amber-500 text-white cursor-pointer"
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}

            <div className="relative px-6">
              {totalQty > 0 && (
                <div className="rounded-full z-10 w-6 h-6 absolute right-26 -top-2 bg-red-500 text-white flex items-center justify-center text-xs">
                  {totalQty}
                </div>
              )}

              <button
                onClick={() => {
                  setShowOrders(true);
                }}
                className="bg-orange-400 text-white w-30 p-2 rounded-lg cursor-pointer"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>

        {filteredMenuItems.length === 0 && (
          <div className="flex items-center lg:mt-30 mt-20 px-14">
            <p className="flex items-center justify-center lg:px-120 px-10">
              <Lottie
                animationData={notFound}
                loop
                className="lg:w-70 lg:h-70  w-40 h-40"
              />
            </p>
          </div>
        )}

        <div
          className="grid gap-8 transition-all duration-500
    grid-cols-2
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
  "
        >

          {filteredMenuItems.map((item, i) => (
            <div
              key={i}
              className="bg-[#1F2335] rounded-xl p-3 relative pb-5 mt-16 w-full"
            >
              <img
                src={item.image}
                className="w-30 h-30 rounded-full absolute -top-15 left-1/2 -translate-x-1/2"
              />

              <h3 className="mt-16 font-robot text-white text-center text-xl">
                {item.name}
              </h3>

              <div className="flex justify-center gap-2 mt-2">
                <span className="text-[#34C759] font-bold text-sm">
                  {getPriceBySize(item.sizes, selectedSizes[item.id])} AED
                </span>

              </div>

              <p className="text-xs text-gray-400 text-center mt-2">
                {item.bowls} Bowls available
              </p>

              <div className="flex justify-center gap-2 mt-3">
                {item.sizes.map((s) => (
                  <button
                    key={s.size}
                    onClick={() => handleSizeSelect(item.id, s)}
                    className={`text-xs px-2 py-1 rounded-md border
      ${selectedSizes[item.id]?.size === s.size
                        ? "bg-[#F99147] text-white"
                        : "border-gray-500 text-white hover:bg-[#F99147]"
                      }`}
                  >
                    {s.size}
                  </button>
                ))}


              </div>

             <div className="flex justify-center mt-6">
  <button
    onClick={() => handleAddToCart(item)}
    className={`
      px-6 py-2 rounded-xl text-white text-sm font-medium
      transition-all duration-300 ease-in-out
      active:scale-95
      ${
        cart.some(
          (cartItem) =>
            cartItem.id === item.id &&
            cartItem.size === selectedSizes[item.id]?.size
        ) 
          ? "bg-green-500 scale-105 shadow-lg"
          : "bg-orange-400 hover:scale-105 hover:shadow-md"
      }
    `}
  >
    {cart.some(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.size === selectedSizes[item.id]?.size
    )
      ? "Added ✓"
      : "Add"}
  </button>
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};




