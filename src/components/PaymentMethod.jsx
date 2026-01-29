import { useKitchen } from "../context/KitchenContext";
import { useState } from "react";
import { CreditCard, Wallet, CircleCheckBig } from "lucide-react";

export const PaymentMethod = () => {
  const {
    setShowpayment,
    onOrder,
    isCompleted,
    setisCompleted,
  } = useKitchen();

  const [method, setMethod] = useState("card");

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-end lg:items-center justify-center">

      {/* ✅ SUCCESS SCREEN */}
      {isCompleted ? (
        <div className="bg-[#1F1D2B] w-full lg:w-96 rounded-2xl p-8 text-center">
          <CircleCheckBig className="w-20 h-20 text-green-500 mx-auto mb-4" />

          <h2 className="text-2xl font-bold text-white mb-2">
            Order Completed
          </h2>

          <p className="text-gray-300 mb-6">
            Your order has been placed successfully
          </p>

          <button
            className="bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold w-full"
            onClick={() => {
              setisCompleted(false);
              setShowpayment(false);
            }}
          >
            Close
          </button>
        </div>
      ) : (
        /* 💳 PAYMENT SCREEN */
        <div className="bg-[#1F1D2B] text-white w-full lg:w-96 rounded-t-2xl lg:rounded-2xl p-6 relative">

          <button
            onClick={() => setShowpayment(false)}
            className="absolute right-4 top-4 text-gray-400 hover:text-white"
          >
            ✕
          </button>

          <h2 className="text-xl mb-6">Payment Methods</h2>

          <div className="grid grid-cols-3 gap-3">
            {[
              { id: "card", label: "Card", icon: CreditCard },
              { id: "paypal", label: "Paypal", icon: Wallet },
              { id: "cash", label: "Cash", icon: Wallet },
            ].map(({ id, label, icon: Icon }) => {
              const active = method === id;

              return (
                <label
                  key={id}
                  className={`relative cursor-pointer rounded-xl border p-4 flex flex-col items-center gap-2 transition
                    ${active
                      ? "border-orange-400 bg-[#2A2D3E]"
                      : "border-gray-600 hover:border-gray-400"
                    }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    className="sr-only"
                    checked={active}
                    onChange={() => setMethod(id)}
                  />

                  {active && (
                    <span className="absolute top-2 right-2 w-5 h-5 bg-orange-400 rounded-full text-xs flex items-center justify-center">
                      ✓
                    </span>
                  )}

                  <Icon className="w-6 h-6 text-gray-300" />
                  <span className="text-sm">{label}</span>
                </label>
              );
            })}
          </div>

          <button
            className="mt-6 w-full bg-[#F99147] py-3 rounded-md font-semibold"
            onClick={() => onOrder(method)}

          >
            Confirm Payment
          </button>
        </div>
      )}
    </div>
  );
};
