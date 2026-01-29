// import { useKitchen } from "../context/KitchenContext";
// import { CircleCheckBig } from "lucide-react";
// export const OrderReceipt = () => {

//   const {
//     cart,
//     subtotal,
//     orderType,
//     setShowReceipt,
//     isCompleted,
//     clearOrder,
//     onClose,
//     onOrder,
//     setShowpayment
//   } = useKitchen();

//   const DELIVERY_CHARGE = 10;

//   const deliveryCharge =
//     orderType === "Delivery" ? DELIVERY_CHARGE : 0;

//   const total = subtotal + deliveryCharge;

//   return (
//     <div className="fixed inset-0 bg-black/60 z-50 flex items-end lg:items-center justify-center">


//       {isCompleted ? (

//         <div className="flex flex-col items-center justify-center h-full text-center p-6">
//           <CircleCheckBig className="w-20 h-20 text-green-500 mb-4" />
//           <h2 className="text-2xl font-bold mb-2 text-white">Order Completed</h2>
//           <p className="text-white mb-6">
//             Your order has been placed successfully
//           </p>

//           <button
//             onClick={() => {
//               onClose();
//               setShowOrders(true); // 👈 show orders page
//             }}

//             className="bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold"
//           >
//             Close
//           </button>
//         </div>
//       ) : (


//         <>
//           {/* Receipt Card */}
//           <div
//             className="
//           bg-[#1F1D2B] text-white w-full lg:w-96
//           max-h-[90vh] lg:max-h-[80vh]
//           rounded-t-2xl lg:rounded-2xl
//           p-6 relative
//           overflow-y-auto
//         "
//           >
//             {/* Close */}
//             <button
//               onClick={() => setShowReceipt(false)}
//               className="absolute right-4 top-4 text-gray-400 hover:text-white"
//             >
//               ✕
//             </button>

//             <h2 className="text-xl mb-4">Order Receipt</h2>

//             <div className="text-sm text-gray-400 mb-3">
//               Order Type: <span className="text-white">{orderType}</span>
//             </div>

//             {/* Items */}
//             <div className="border-t border-gray-700 pt-3 space-y-3">
//               {cart.map((item, i) => (
//                 <div key={i} className="flex justify-between text-sm">
//                   <div>
//                     <p>{item.name}</p>
//                     <p className="text-xs text-gray-400">
//                       {item.qty} × {item.price} AED ({item.size})
//                     </p>
//                   </div>
//                   <p>{(item.qty * item.price).toFixed(2)} AED</p>
//                 </div>
//               ))}
//             </div>

//             {/* Summary */}
//             <div className="border-t border-gray-700 mt-4 pt-4 space-y-2 text-sm">
//               <div className="flex justify-between">
//                 <span>Discount</span>
//                 <span>5%</span>
//               </div>

//               {orderType === "Delivery" && (
//                 <div className="flex justify-between">
//                   <span>Delivery Charge</span>
//                   <span>{deliveryCharge.toFixed(2)} AED</span>
//                 </div>
//               )}

//               <div className="flex justify-between font-semibold text-white text-base">
//                 <span>Total</span>
//                 <span>{total.toFixed(2)} AED</span>
//               </div>
//             </div>

//             {/* CTA */}
//             <button
//               className="mt-6 w-full bg-[#F99147] py-3 rounded-md"
//               onClick={() => {
//                 setShowReceipt(false);
//                 setShowpayment(true);
//               }}
//             >
//               Proceed to Payment
//             </button>

//           </div>
//         </>
//       )
//       }
//     </div >
//   );
// };



import { useKitchen } from "../context/KitchenContext";

export const OrderReceipt = () => {
  const {
    cart,
    subtotal,
    orderType,
    setShowReceipt,
    setShowpayment,
  } = useKitchen();

  const DELIVERY_CHARGE = 10;
  const deliveryCharge = orderType === "Delivery" ? DELIVERY_CHARGE : 0;
  const total = subtotal + deliveryCharge;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-end lg:items-center justify-center">
      <div
        className="
          bg-[#1F1D2B] text-white w-full lg:w-96
          max-h-[90vh] lg:max-h-[80vh]
          rounded-t-2xl lg:rounded-2xl
          p-6 relative overflow-y-auto
        "
      >
        {/* Close */}
        <button
          onClick={() => setShowReceipt(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-xl mb-4">Order Receipt</h2>

        <div className="text-sm text-gray-400 mb-3">
          Order Type: <span className="text-white">{orderType}</span>
        </div>

        {/* Items */}
        <div className="border-t border-gray-700 pt-3 space-y-3">
          {cart.map((item, i) => (
            <div key={i} className="flex justify-between text-sm">
              <div>
                <p>{item.name}</p>
                <p className="text-xs text-gray-400">
                  {item.qty} × {item.price} AED ({item.size})
                </p>
              </div>
              <p>{(item.qty * item.price).toFixed(2)} AED</p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="border-t border-gray-700 mt-4 pt-4 space-y-2 text-sm">
          {orderType === "Delivery" && (
            <div className="flex justify-between">
              <span>Delivery Charge</span>
              <span>{deliveryCharge.toFixed(2)} AED</span>
            </div>
          )}

          <div className="flex justify-between font-semibold text-white text-base">
            <span>Total</span>
            <span>{total.toFixed(2)} AED</span>
          </div>
        </div>

        {/* CTA */}
        <button
          className="mt-6 w-full bg-[#F99147] py-3 rounded-md"
          onClick={() => {
            setShowReceipt(false);
            setShowpayment(true);
          }}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};
