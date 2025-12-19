import { AiOutlineDelete } from "react-icons/ai";

export const Orders = ({ cart, setCart, onClose }) => {
  const removeItem = (title) => {
    setCart((prev) => prev.filter((item) => item.title !== title));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.qty * parseFloat(item.price),
    0
  );

  return (
    <div
      className="
        w-full bg-[#1F1D2B] px-5 py-5 text-white flex flex-col
        lg:fixed lg:top-0 lg:right-0 lg:h-screen lg:w-96 lg:z-50
        lg:rounded-l-2xl
      "
    >
      <div className="flex justify-between items-center mb-4 mt-2">
        <h1 className="text-2xl">Orders #34562</h1>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          ✕
        </button>
      </div>

      <div className="grid grid-cols-6 border-b border-gray-700 pb-2 text-sm mb-3 mt-11">
        <span className="col-span-3">Item</span>
        <span className="text-center">Qty</span>
        <span className="col-span-2 text-right">Price</span>
      </div>

      <div className="flex-1 overflow-y-auto pr-2">
        {cart.map((item, i) => (
          <div key={i} className="border-b border-gray-700 pb-4 mb-4">
            <div className="grid grid-cols-6 items-center">
              <div className="col-span-3 flex gap-3">
                <img src={item.img} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="text-sm">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.price} AED</p>
                </div>
              </div>
              <div className="text-center">{item.qty}</div>
              <div className="col-span-2 text-right">
                {(item.qty * item.price).toFixed(2)} AED
              </div>
            </div>

            <div className="relative mt-3">
              <input
                className="w-full bg-[#2C3045] px-3 py-2 rounded-md text-xs"
                placeholder="Order Note..."
              />
              <AiOutlineDelete
                onClick={() => removeItem(item.title)}
                className="absolute right-3 top-2 text-orange-400 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between text-sm text-gray-400 mt-4">
        <span>Sub total</span>
        <span>{subtotal.toFixed(2)} AED</span>
      </div>

      <button className="mt-4 bg-[#F99147] py-3 rounded-md">
        Order Now
      </button>
    </div>
  );
};
