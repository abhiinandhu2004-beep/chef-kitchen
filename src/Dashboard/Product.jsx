import React from 'react'
import { Search } from 'lucide-react';
import { Plus } from 'lucide-react';
import { EllipsisVertical } from 'lucide-react';
import { useDash } from '../context/DashContext';
import AddProduct from './Addproducts';



export const Product = () => {

  const { setShowProductModal, showProductModal, products, deleteProduct, editProduct } = useDash();

  return (
    <>
      <div className='flex p-5 '>
        <h1 className='font-bold text-xl'>Product List</h1>
      </div>
      <div className='flex flex-col bg-gray-600 max-w-7xl h-145 ml-9 rounded relative'>
        <div className='flex justify-between w-full'>
          <input type="text" placeholder='Search Here..'
            className='w-130 bg-gray-400 h-10 border-white rounded  outline-none p-4 m-4' />
          <Search className='absolute left-125 top-6 text-green-700' />
          <div className='flex gap-6'>
            <Plus className='absolute right-50 top-6 text-green-700' />
            <button className='bg-gray-400 w-40 h-10 rounded m-4'
              onClick={() => setShowProductModal(true)}>
              Add New
            </button>
            <EllipsisVertical className=' text-green-700 mt-6 mr-3 ' />
          </div>
        </div>

        <div className='p-5'>
          <table className="max-w-7xl mt-6 mx-auto w-full ">
            <thead className="bg-gray-100 text-gray-600 text-sm ">
              <tr>
                <th className="px-3 py-4 text-left rounded-tl-2xl">Image</th>
                <th className="px-3 py-4 text-left">Name</th>
                <th className="px-3 py-4 text-left">Category</th>
                <th className="px-3 py-4 text-left">Stock</th>
                <th className="px-3 py-4 text-left">Sizes & prices</th>
                <th className="px-3 py-4 text-left">Order Type</th>
                <th className="px-3 py-4 text-left rounded-tr-2xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-6 text-gray-400">
                    No products added
                  </td>
                </tr>
              ) : (
                products.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t bg-gray-700 text-white/80 hover:bg-gray-600"
                  >
                    <td className="px-6 py-4">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                      ) : (
                        "—"
                      )}
                    </td>

                    {/* Name */}
                    <td className="px-6 py-4">{item.name}</td>

                    {/* Category */}
                    <td className="px-6 py-4">{item.category}</td>

                    {/* Stock */}
                    <td className="px-6 py-4">{item.stock}</td>

                    {/* Sizes */}
                    <td className="px-6 py-4">
                      <div className="flex gap-2 flex-wrap">
                        {item.sizes.map((s) => (
                          <span
                            key={`${item.id}-${s.size}`}
                            // ✅ UNIQUE KEY (string)
                            className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs"
                          >
                            {s.size} - ₹{s.price}
                          </span>
                        ))}
                      </div>
                    </td>


                    {/* Order Type */}
                    <td className="px-6 py-4">
                      <div className="flex gap-2 flex-wrap">
                        {item.orderType.map((o) => (
                          <span
                            key={`${item.id}-${o}`}

                            className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
                          >
                            {o}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 text-right">
                      <div className='flex gap-2'>
                        <button className="text-white bg-green-500 w-15 rounded"
                          onClick={() => editProduct(item)}>
                          Edit
                        </button>
                        <button className="text-white bg-red-500 w-15 rounded"
                          onClick={() => deleteProduct(item.id)}>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {showProductModal && <AddProduct />}
      </div>
    </>

  )
}
