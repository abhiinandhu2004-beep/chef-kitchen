import { AiOutlineDelete } from "react-icons/ai";

export const Orders = ({ cart, setCart, onClose, }) => {
  const removeItem = (title) => {
    setCart((prev) => prev.filter((item) => item.title !== title));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.qty * parseFloat(item.price),
    0
  );

  return (
    <div className="  fixed top-0 right-0 h-screen w-96 z-50
       bg-[#1F1D2B] px-5 py-5 text-white flex flex-col rounded-l-2xl">
      <div className="flex justify-between items-center mb-4 mt-2 ">
        <h1 className="text-2xl">Orders #34562</h1>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>

      <div className='flex flex-row gap-6 mt-5'>
        <button className='bg-[#1F1D2B] rounded-xl px-3 text-[#F99147] hover:bg-[#EA7C69] hover:text-white cursor-pointer border border-gray-600'>Dine In</button>
        <button className='bg-[#1F1D2B] rounded-xl px-3 text-[#F99147] hover:bg-[#EA7C69] hover:text-white cursor-pointer border border-gray-600'>Take Away</button>
        <button className='bg-[#1F1D2B] rounded-xl px-3 py-2 text-[#F99147] hover:bg-[#EA7C69] hover:text-white cursor-pointer border border-gray-600'>Delivery</button>
      </div>

      <div className="grid grid-cols-6 border-b border-gray-700 pb-2 text-sm mb-3 mt-11">
        <span className="col-span-3">Item</span>
        <span className="text-center">Qty</span>
        <span className="col-span-2 text-right">Price</span>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 hide-scrollbar">
        <div className="flex flex-col gap-6">
          {cart.map((item, i) => (
            <div key={i} className="border-b border-gray-700 pb-4">
              <div className="grid grid-cols-6 items-center">
                <div className="col-span-3 flex items-center gap-3">
                  <img
                    src={item.img}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-400">
                      {item.price} AED
                    </p>
                  </div>
                </div>

                <div className="text-center">{item.qty}</div>

                <div className="col-span-2 text-right">
                  {(item.qty * item.price).toFixed(2)} AED
                </div>
              </div>

              <div className="relative mt-3">
                <input
                  className="w-72 bg-[#2C3045] px-3 py-2 rounded-md text-xs outline-none"
                  placeholder="Order Note..."
                />
                <AiOutlineDelete
                  onClick={() => removeItem(item.title)}
                  className="absolute right-3 top-1 text-orange-400 text-xl cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="flex justify-between text-sm text-gray-400 mb-3 mt-6">
        <span>Sub total</span>
        <span>{subtotal.toFixed(2)} AED</span>
      </div>

      <button className="w-full bg-[#F99147] py-3 rounded-md font-medium">
        Order Now
      </button>

    </div>
  );
};
