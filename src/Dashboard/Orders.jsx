import { Search } from 'lucide-react';
import { useKitchen } from '../context/KitchenContext';

export const Orders = () => {

  const { orders, deleteOrder } = useKitchen();
  console.log(orders, "orderss");

  return (
    <>
      <div className='flex p-5 '>
        <h1 className='font-bold text-xl'>Orders List</h1>
      </div>
      <div className='flex flex-col bg-gray-600 max-w-7xl h-145 ml-9 rounded relative'>
        <div className='flex justify-between w-full'>
          <input type="text" placeholder='Search Here..'
            className='w-130 bg-gray-400 h-10 border-white rounded  outline-none p-4 m-4' />
          <Search className='absolute left-125 top-6 text-green-700' />
        </div>

        <div className='p-5'>
          <table className="w-full mt-4 border-collapse text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-3 py-2 text-left w-16 rounded-tl-2xl">Img</th>
                <th className="px-2 py-2 text-left">Name</th>
                <th className="px-2 py-2 text-center ">Size</th>
                <th className="px-2 py-2 text-center ">Quantity</th>
                <th className="px-2 py-2 text-center ">Price</th>
                <th className="px-2 py-2 text-center ">Order  Type</th>
                <th className="px-2 py-2 text-center rounded-tr-2xl">
                  Actions
                </th>
              </tr>
            </thead>

         <tbody>
  {orders.length === 0 && (
    <tr>
      <td colSpan="7" className="text-center py-4 text-gray-300">
        No orders yet
      </td>
    </tr>
  )}

  {orders.map(order =>
    Array.isArray(order.items) &&
    order.items.map((item, i) => (
      <tr
        key={`${order.id}-${i}`}
        className="border-t bg-gray-700 text-white/90 hover:bg-gray-600"
      >
        <td className="p-3">
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-12 object-cover rounded"
          />
        </td>

        <td className="px-2 py-2 font-medium truncate max-w-[220px]">
          {item.name}
        </td>

        <td className="px-2 py-2 text-center">{item.size}</td>

        <td className="px-2 py-2 text-center">{item.qty}</td>

        <td className="px-2 py-2 text-center">
          {(item.qty * Number(item.price)).toFixed(2)} AED
        </td>

        <td className="px-2 py-2 text-center">
          {order.orderType}
        </td>

        <td className="px-2 py-2 text-center">
          <button
            className="px-2 py-1 text-xs rounded bg-red-500 hover:bg-red-600"
            onClick={() => deleteOrder(order.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>


          </table>

        </div>
      </div>
    </>

  )
}



