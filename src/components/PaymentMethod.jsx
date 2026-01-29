import React from 'react'

export const PaymentMethod = () => {
  return (
   <div
            className="
          bg-[#1F1D2B] text-white w-full lg:w-96
          max-h-[90vh] lg:max-h-[80vh]
          rounded-t-2xl lg:rounded-2xl
          p-6 relative
          overflow-y-auto
        "
          >
            {/* Close */}
            <button
              onClick={() => setShowReceipt(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-xl mb-4">Payment Methods</h2>
    </div>
  )
}
