import { categories } from "../constants/Dash"
import { useDash } from "../context/DashContext"

export const Category = () => {

  const { setShowcategory, categories, deleteCategory, editCategory } = useDash();

  return (
    <div className='flex flex-col max-w-5xl mx-auto p-6 items-center'>
      <div className='flex flex-row justify-between w-full items-center mt-5'>
        <h1 className='text-2xl font-bold mb-4 text-white/40'>Category List</h1>
        <button className='bg-blue-500 text-white px-4 py-2 rounded'
          onClick={() => setShowcategory(true)}>
          Add Category</button>
      </div>

      <div className='flex bg-gray-600 w-5xl h-145  rounded relative'>
        <div className='flex flex-col w-300 mt-20 px-30'>
          <table className='w-full  '>
            <thead className='bg-gray-50 text-gray-600'>
              <tr>
                <th className='py-2 px-4 border-b'>Name</th>
                <th className='py-2 px-4 border-b'>Products</th>
                <th className='py-2 px-4 border-b'>Stock</th>
                <th className='py-2 px-4 border-b'>Actions</th>
              </tr>
            </thead>

            <tbody>
              {categories.map((items, index) => (
                <tr key={index} className='bg-gray-700 text-white/70 hover:bg-gray-600 text-center '>
                  <td className='py-2 px-4 border-b'>{items.name}</td>
                  <td className='py-2 px-4 border-b'>{items.products}</td>
                  <td className='py-2 px-4 border-b'>{items.stock}</td>
                  <td className='py-2 px-4 border-b'>
                    <button className='bg-green-600 text-white px-2 py-1 rounded mr-2'
                      onClick={() => editCategory(index)}>Edit</button>
                    <button className='bg-red-600 text-white px-2 py-1 rounded'
                      onClick={() => deleteCategory(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>

    </div>
  )
}
