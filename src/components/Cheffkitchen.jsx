import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Orders } from "./Orders";
import Sidebar from "./Sidebar";
import { ChevronDown } from 'lucide-react';
import Lottie from "lottie-react";
import notFound from "../assets/No Data Found.json"
import logo from "../assets/catering(Fork & Knife).json"


const tabs = [
  { id: "today", label: "Today Special" },
  { id: "our", label: "Our Special" },
  { id: "south", label: "South Indian Special" },
];

const menuItems = [
  {
    title: "Healthy noodle with spinach leaf",
    oldPrice: "32.00",
    price: "23.29",
    bowls: 22,
    sizes: ["S", "M", "L"],
    img: "/1.png",
    availableFor: ["Dine In", "Delivery", "Take Away"]
  },
  {
    title: "Hot spicy fried rice with omlet",
    oldPrice: "32.00",
    price: "23.29",
    bowls: 15,
    sizes: ["S", "M", "L"],
    img: "/Image 8.png",
    availableFor: ["Dine In", "Delivery", "Take Away"]


  },
  {
    title: "Spicy  noodle with special omelette",
    oldPrice: "32.00",
    price: "23.29",
    bowls: 17,
    sizes: ["S", "M", "L"],
    img: "/3.png",
    availableFor: ["Dine In", "Take Away"]

  },
  {
    title: " Noodle with spinach leaf and omlette",
    price: "25.00",
    bowls: 22,
    sizes: ["S", "M", "L"],
    img: "/Image 5.png",
    availableFor: ["Dine In", "Delivery", "Take Away"]

  },
  {
    title: " spicy fried rice with special omlette",
    price: "25.00",
    bowls: 13,
    sizes: ["S", "M", "L"],
    img: "/Images.png",
    availableFor: ["Dine In", "Delivery"]

  },
  {
    title: "hot spicy Noodle with special omelette",
    price: "25.00",
    bowls: 17,
    sizes: ["S", "M", "L"],
    img: "/Image 6.png",
    availableFor: ["Dine In"]

  },
  {
    title: " spicy fried rice with special omlette",
    price: "25.00",
    bowls: 13,
    sizes: ["S", "M", "L"],
    img: "/Images.png",
    availableFor: ["Dine In", "Delivery", "Take Away"]

  },
  {
    title: "hot spicy Noodle with special omelette",
    price: "25.00",
    bowls: 17,
    sizes: ["S", "M", "L"],
    img: "/Image 6.png",
    availableFor: ["Dine In"]

  },

];

export const Cheffkitchen = () => {
  const [active, setActive] = useState("today");
  const [cart, setCart] = useState([]);
  const [showOrders, setShowOrders] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [search, setSearch] = useState("");
  const [orderType, setOrderType] = useState("Dine In");
  const [showType, setShowType] = useState(false);

  const filteredMenuItems = menuItems.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    const matchesOrderType = item.availableFor.includes(orderType);

    return matchesSearch && matchesOrderType;
  });



  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleSizeSelect = (title, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [title]: size,
    }));
  };

  const getPriceBySize = (price, size) => {
    const base = parseFloat(price);

    if (size === "M") return (base / 2).toFixed(2);
    if (size === "S") return (base / 3).toFixed(2);

    return base.toFixed(2); // default / L
  };






  const handleAddToCart = (item) => {
    const selectedSize = selectedSizes[item.title] || "L";

    const basePrice = parseFloat(item.price);
    let finalPrice = basePrice;

    if (selectedSize === "M") finalPrice = basePrice / 2;
    if (selectedSize === "S") finalPrice = basePrice / 3;

    setCart((prev) => {
      const existingItem = prev.find(
        (cartItem) =>
          cartItem.title === item.title &&
          cartItem.size === selectedSize
      );

      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.title === item.title && cartItem.size === selectedSize
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        );
      }

      return [
        ...prev,
        {
          ...item,
          size: selectedSize,
          price: finalPrice.toFixed(2),
          qty: 1,
        },
      ];
    });
  };



  return (
    <div className="flex flex-col w-full min-h-screen bg-[#2D303E] md:flex-col lg:flex-row ">
      <Sidebar />
      <div className={`
    flex flex-col lg:flex-row lg:w-full lg:ml-30
    transition-all duration-300
    ${showOrders ? "lg:mr-100" : "lg:mr-0"}
  `}>
        <div className="flex-1 fixed top-0 z-30 bg-[#2D303E] pt-4 w-full transition-all duration-300">

          <div className="w-full px-5 -h-screen flex flex-col">
            <div className="flex lg:items-center justify-between mt-4 lg:flex-row flex-col p-0 lg:space-y-0 space-y-4">
              
              
              <div className="flex flex-row mt-0">
                  <Lottie
                  animationData={logo}
                  loop
                  className="w-30 h-30"
                />
                
               <div className="flex flex-col mt-7">
                 <h1 className="text-[#E0E6E9] text-3xl">Chef Kitchen</h1>
                <p className="text-[#E0E6E9] opacity-50">
                  Tuesday, 2 March 2024
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

            <div className="flex text-white lg:mt-0 mt-8 space-x-6 py-3 overflow-x-auto">
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
                        ? "120px"
                        : "225px",
                }}
              ></div>
            </div>

            <div className="border-b border-gray-600 mb-6"></div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto h-200px pr-2 hide-scrollbar pt-65 px-4 pb-15">

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

              {/* Dropdown options */}
              {showType && (
                <div className="absolute right-10 mt-8 w-40 bg-[#2D303E] rounded-lg shadow-lg overflow-hidden z-10 text-sm">
                  {["Dine In", "Take Away", "Delivery"].map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setOrderType(type);
                        setShowType(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-amber-500 text-white  cursor-pointer"
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
                    onClose();
                  }}
                  className="bg-orange-400 text-white w-30 p-2 rounded-lg cursor-pointer"
                >Order Now
                </button>
              </div>


            </div>
          </div>


          {filteredMenuItems.length === 0 && (
            <div className="flex justify-center items-center mt-20">
              <p>
                <Lottie
                  animationData={notFound}
                  loop
                  className="w-70 h-70"
                />
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                        }
      `}
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
                          ? "bg-green-500 cursor-pointer"
                          : " cursor-pointer bg-orange-400"}`}
                    >
                      {cart.some((cartItem) => cartItem.title === item.title)
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

      {showOrders && (
        <Orders
          cart={cart}
          setCart={setCart}
          orderType={orderType}
          setOrderType={setOrderType}
          onClose={() => {
            setShowOrders(false);
            setCart([]);
          }}
        />
      )}


    </div>

  );
};





<div className="relative">
  {/* Selected button */}

</div>