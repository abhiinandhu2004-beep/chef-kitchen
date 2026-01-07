// import { AiOutlineDelete } from "react-icons/ai";
// import Lottie from "lottie-react";
// import emptyCartAnimation from "../assets/empty.json"
// import { useKitchen } from "../context/KitchenContext";

// export const Orders = () => {

//   const {
//     cart,
//     setCart,
//     setShowOrders,
//     orderType,
//     setOrderType,
//     setShowReceipt
//   } = useKitchen();

//   const removeItem = (title, size) => {
//     setCart((prev) =>
//       prev
//         .map((item) => {
//           if (item.title === title && item.size === size) {
//             if (item.qty > 1) {
//               return { ...item, qty: item.qty - 1 };
//             }
//             return null;
//           }
//           return item;
//         })
//         .filter(Boolean)
//     );
//   };

//   const subtotal = cart.reduce(
//     (sum, item) => sum + item.qty * parseFloat(item.price),
//     0
//   );

//   const DELIVERY_CHARGE = 10;

//   const deliveryCharge =
//     orderType === "Delivery" ? DELIVERY_CHARGE : 0;

//   const total = subtotal + deliveryCharge;


//   return (
//     <div
//       className="
//         w-full bg-[#1F1D2B] px-5 py-5 text-white flex flex-col
//         lg:fixed lg:top-0 lg:right-0 lg:h-screen lg:w-120 lg:z-50
//         lg:rounded-l-2xl slide-in 
//       "
//     >
//       <div className="flex justify-between items-center mb-4 mt-2">
//         <h1 className="text-2xl">Orders #34562</h1>
//         <button onClick={() => setShowOrders(false)} className="text-gray-400 hover:text-white">
//           ✕
//         </button>
//       </div>

//       <div className="flex justify-around gap-4 mt-4">
//         {["Dine In", "Take Away", "Delivery"].map((type) => (
//           <button
//             key={type}
//             onClick={() => setOrderType(type)}
//             className={`
//         rounded-2xl px-4 py-2 border transition-all duration-200
//         ${orderType === type
//                 ? "bg-[#F99147] text-white border-[#F99147]"
//                 : "bg-[#1F1D2B] text-[#F99147] border-gray-600 hover:bg-[#EA7C69] hover:text-white"
//               }
//       `}
//           >
//             {type}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-6 border-b border-gray-700 pb-2 text-sm mb-3 mt-11">
//         <span className="col-span-3">Item</span>
//         <span className="text-center">Qty</span>
//         <span className="col-span-2 text-right">Price</span>
//       </div>

//       <div className="flex-1 overflow-y-auto pr-2 hide-scrollbar">

//         <div className="flex-1 overflow-y-auto pr-2 hide-scrollbar">
//           {cart.length === 0 ? (
//             <div className="flex flex-col items-center justify-center h-full text-center gap-4 mt-4">
//               <Lottie
//                 animationData={emptyCartAnimation}
//                 loop
//                 className="w-52 h-52"
//               />
//               <p className="text-gray-400 mt-4 text-sm">
//                 Your cart is empty
//               </p>
//               <p className="text-gray-500 text-xs">
//                 Add some delicious dishes 🍜
//               </p>
//             </div>
//           ) : (
//             cart.map((item, i) => (
//               <div key={i} className="border-b border-gray-700 pb-4 mb-4">
//                 <div className="grid grid-cols-6 items-center relative">
//                   <div className="col-span-3 flex gap-3">
//                     <img src={item.img} className="w-12 h-12 rounded-full" />
//                     <div>
//                       <p className="text-sm">{item.title}</p>
//                       <p className="text-xs text-gray-400">{item.price} AED <span className="px-4">{item.size}</span></p>
//                     </div>
//                   </div>
//                   <div className="text-center p-1 bg-gray-700 w-8 h-8 absolute right-37 rounded ">{item.qty}</div>
//                   <div className="col-span-2 text-right absolute right-0">
//                     {(item.qty * item.price).toFixed(2)} AED
//                   </div>
//                 </div>

//                 <div className="relative mt-3 flex flex-row gap-4">
//                   <input
//                     className="w-70 bg-[#2C3045] px-3 py-2 rounded-md text-xs"
//                     placeholder="Order Note..."
//                   />

//                   <button className="bg-[#1F1D2B] absolute right-1 top-1 p-4 border border-amber-600 rounded-sm hover:border-pink-500">
//                     <AiOutlineDelete
//                       onClick={() => removeItem(item.title, item.size)}
//                       className="absolute right-1 top-1 text-orange-400 cursor-pointer text-2xl hover:text-pink-500"
//                     />
//                   </button>

//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//       </div>

//       <div className="pb-11 lg:pb-1">
//         <div className="flex justify-between text-sm text-gray-400 mt-4">
//           <span>Discount</span>
//           <span>5%</span>
//         </div>

//         <div className="flex justify-between text-sm text-gray-400 mt-4">
//           <span>Sub total</span>
//           <span>{subtotal.toFixed(2)} AED</span>
//         </div>

//         <button
//           onClick={() => setShowReceipt(true)}
//           className="mt-4 bg-[#F99147] py-3 rounded-md w-full"
//         >
//           Order Now
//         </button>

//       </div>
//     </div>
//   );
// };






import { AiOutlineDelete } from "react-icons/ai";
import Lottie from "lottie-react";
import emptyCartAnimation from "../assets/empty.json";
import { useKitchen } from "../context/KitchenContext";

export const Orders = () => {
  const {
    cart,
    setCart,
    setShowOrders,
    orderType,
    setOrderType,
    setShowReceipt
  } = useKitchen();

  const removeItem = (title, size) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.title === title && item.size === size) {
            if (item.qty > 1) {
              return { ...item, qty: item.qty - 1 };
            }
            return null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.qty * parseFloat(item.price),
    0
  );

  const DELIVERY_CHARGE = 10;
  const deliveryCharge = orderType === "Delivery" ? DELIVERY_CHARGE : 0;
  const total = subtotal + deliveryCharge;

  return (
    <div
      className="
        h-full w-full bg-[#1F1D2B] px-5 py-5 text-white
        flex flex-col rounded-l-2xl slide-in 
      "
    >
      <div className="flex justify-between items-center mb-4 mt-2">
        <h1 className="text-2xl">Orders #34562</h1>
        <button
          onClick={() => setShowOrders(false)}
          className="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>

      <div className="flex justify-around gap-4 mt-4">
        {["Dine In", "Take Away", "Delivery"].map((type) => (
          <button
            key={type}
            onClick={() => setOrderType(type)}
            className={`
              rounded-2xl px-4 py-2 border transition-all duration-200
              ${
                orderType === type
                  ? "bg-[#F99147] text-white border-[#F99147]"
                  : "bg-[#1F1D2B] text-[#F99147] border-gray-600 hover:bg-[#EA7C69] hover:text-white"
              }
            `}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-6 border-b border-gray-700 pb-2 text-sm mb-3 mt-11">
        <span className="col-span-3">Item</span>
        <span className="text-center">Qty</span>
        <span className="col-span-2 text-right">Price</span>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 hide-scrollbar">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center gap-4 mt-4">
            <Lottie
              animationData={emptyCartAnimation}
              loop
              className="w-52 h-52"
            />
            <p className="text-gray-400 mt-4 text-sm">
              Your cart is empty
            </p>
            <p className="text-gray-500 text-xs">
              Add some delicious dishes 🍜
            </p>
          </div>
        ) : (
          cart.map((item, i) => (
            <div key={i} className="border-b border-gray-700 pb-4 mb-4">
              <div className="grid grid-cols-6 items-center relative">
                <div className="col-span-3 flex gap-3">
                  <img src={item.img} className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="text-sm">{item.title}</p>
                    <p className="text-xs text-gray-400">
                      {item.price} AED <span className="px-4">{item.size}</span>
                    </p>
                  </div>
                </div>

                <div className="text-center p-1 bg-gray-700 w-8 h-8 absolute lg:right-37 right-30 rounded">
                  {item.qty}
                </div>

                <div className="col-span-2 text-right absolute right-0">
                  {(item.qty * item.price).toFixed(2)} AED
                </div>
              </div>

              <div className="relative mt-3 flex flex-row gap-4">
                <input
                  className="w-70 bg-[#2C3045] px-3 py-2 rounded-md text-xs"
                  placeholder="Order Note..."
                />

                <button className="bg-[#1F1D2B] absolute right-1 top-1 p-4 border border-amber-600 rounded-sm hover:border-pink-500">
                  <AiOutlineDelete
                    onClick={() => removeItem(item.title, item.size)}
                    className="absolute right-1 top-1 text-orange-400 cursor-pointer text-2xl hover:text-pink-500"
                  />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="pb-11 lg:pb-1">
        <div className="flex justify-between text-sm text-gray-400 mt-4">
          <span>Discount</span>
          <span>5%</span>
        </div>

        <div className="flex justify-between text-sm text-gray-400 mt-4">
          <span>Sub total</span>
          <span>{subtotal.toFixed(2)} AED</span>
        </div>

        <button
          onClick={() => setShowReceipt(true)}
          className="mt-4 bg-[#F99147] py-3 rounded-md w-full"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};
