// import React from 'react'
// import { Search } from 'lucide-react';
// import { Plus } from 'lucide-react';
// import { EllipsisVertical } from 'lucide-react';
// import { useDash } from '../context/DashContext';
// import AddProduct from './Addproducts';



// export const Product = () => {

//   const { setShowProductModal, showProductModal, products, deleteProduct, editProduct } = useDash();

//   return (
//     <>
//       <div className='flex p-5 '>
//         <h1 className='font-bold text-xl'>Product List</h1>
//       </div>
//       <div className='flex flex-col bg-gray-600 max-w-7xl h-145 ml-9 rounded relative'>
//         <div className='flex justify-between w-full'>
//           <input type="text" placeholder='Search Here..'
//             className='w-130 bg-gray-400 h-10 border-white rounded  outline-none p-4 m-4' />
//           <Search className='absolute left-125 top-6 text-green-700' />
//           <div className='flex gap-6'>
//             <Plus className='absolute right-50 top-6 text-green-700' />
//             <button className='bg-gray-400 w-40 h-10 rounded m-4'
//               onClick={() => setShowProductModal(true)}>
//               Add New
//             </button>
//             <EllipsisVertical className=' text-green-700 mt-6 mr-3 ' />
//           </div>
//         </div>

//         <div className='p-5'>
//           <table className="max-w-7xl mt-6 mx-auto w-full ">
//             <thead className="bg-gray-100 text-gray-600 text-sm ">
//               <tr>
//                 <th className="px-3 py-4 text-left rounded-tl-2xl">Image</th>
//                 <th className="px-3 py-4 text-left">Name</th>
//                 <th className="px-3 py-4 text-left">Category</th>
//                 <th className="px-3 py-4 text-left">Stock</th>
//                 <th className="px-3 py-4 text-left">Sizes & prices</th>
//                 <th className="px-3 py-4 text-left">Order Type</th>
//                 <th className="px-3 py-4 text-left rounded-tr-2xl">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.length === 0 ? (
//                 <tr>
//                   <td colSpan="7" className="text-center py-6 text-gray-400">
//                     No products added
//                   </td>
//                 </tr>
//               ) : (
//                 products.map((item) => (
//                   <tr
//                     key={item.id}
//                     className="border-t bg-gray-700 text-white/80 hover:bg-gray-600"
//                   >
//                     <td className="px-6 py-4">
//                       {item.image ? (
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="w-12 h-12 object-cover rounded"
//                         />
//                       ) : (
//                         "—"
//                       )}
//                     </td>

//                     {/* Name */}
//                     <td className="px-6 py-4">{item.name}</td>

//                     {/* Category */}
//                     <td className="px-6 py-4">{item.category}</td>

//                     {/* Stock */}
//                     <td className="px-6 py-4">{item.stock}</td>

//                     {/* Sizes */}
//                     <td className="px-6 py-4">
//                       <div className="flex gap-2 flex-wrap">
//                         {item.sizes.map((s) => (
//                           <span
//                             key={`${item.id}-${s.size}`}
//                             // ✅ UNIQUE KEY (string)
//                             className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs"
//                           >
//                             {s.size} - ₹{s.price}
//                           </span>
//                         ))}
//                       </div>
//                     </td>


//                     {/* Order Type */}
//                     <td className="px-6 py-4">
//                       <div className="flex gap-2 flex-wrap">
//                         {item.orderType.map((o) => (
//                           <span
//                             key={`${item.id}-${o}`}

//                             className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
//                           >
//                             {o}
//                           </span>
//                         ))}
//                       </div>
//                     </td>

//                     {/* Actions */}
//                     <td className="px-6 py-4 text-right">
//                       <div className='flex gap-2'>
//                         <button className="text-white bg-green-500 w-15 rounded"
//                           onClick={() => editProduct(item)}>
//                           Edit
//                         </button>
//                         <button className="text-white bg-red-500 w-15 rounded"
//                           onClick={() => deleteProduct(item.id)}>
//                           Delete
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//         {showProductModal && <AddProduct />}
//       </div>
//     </>

//   )
// }


import React from "react";
import { Search, Plus, EllipsisVertical } from "lucide-react";
import { useDash } from "../context/DashContext";
import AddProduct from "./Addproducts";

export const Product = () => {
  const {
    setShowProductModal,
    showProductModal,
    products,
    deleteProduct,
    editProduct
  } = useDash();

  return (
    <>
      {/* Page Header */}
      <div className="flex items-center justify-between px-8 py-5">
        <h1 className="font-bold text-2xl text-white">Product List</h1>

        <button
          onClick={() => setShowProductModal(true)}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition"
        >
          <Plus size={18} />
          Add New
        </button>
      </div>

      {/* Main Container */}
      <div className="mx-auto max-w-7xl bg-gray-700 rounded-xl shadow-lg px-6 py-6">
        {/* Search Row */}
        <div className="flex items-center justify-between mb-6 gap-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-gray-600 text-white placeholder-gray-300 h-11 rounded-lg pl-10 pr-4 outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400" />
          </div>

          <EllipsisVertical className="text-green-400 cursor-pointer" />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-2">
            <thead className="bg-gray-200 text-gray-700 text-sm">
              <tr>
                <th className="px-4 py-3 text-left rounded-l-lg">Image</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Stock</th>
                <th className="px-4 py-3 text-left">Sizes & Prices</th>
                <th className="px-4 py-3 text-left">Order Type</th>
                <th className="px-4 py-3 text-right rounded-r-lg">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-8 text-gray-300"
                  >
                    No products added
                  </td>
                </tr>
              ) : (
                products.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-gray-600 text-white hover:bg-gray-500 transition rounded-lg"
                  >
                    {/* Image */}
                    <td className="px-4 py-4">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      ) : (
                        "—"
                      )}
                    </td>

                    {/* Name */}
                    <td className="px-4 py-4 font-medium">
                      {item.name}
                    </td>

                    {/* Category */}
                    <td className="px-4 py-4">{item.category}</td>

                    {/* Stock */}
                    <td className="px-4 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.stock <= 0
                            ? "bg-red-500/20 text-red-400"
                            : item.stock <= 5
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {item.stock}
                      </span>
                    </td>

                    {/* Sizes */}
                    <td className="px-4 py-4">
                      <div className="flex gap-2 flex-wrap">
                        {item.sizes.map((s) => (
                          <span
                            key={`${item.id}-${s.size}`}
                            className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs"
                          >
                            {s.size} – ₹{s.price}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Order Type */}
                    <td className="px-4 py-4">
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
                    <td className="px-4 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => editProduct(item)}
                          className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteProduct(item.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-sm"
                        >
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
      </div>

      {showProductModal && <AddProduct />}
    </>
  );
};
