import { X } from "lucide-react";
import { useDash } from "../context/DashContext"
import { useState, useEffect } from "react";
import { Category } from "./Category";
import { Product } from "./Product";

const Addcategory = () => {
    const { onClose,
        addCategory,
        updateCategory,
        editingIndex,
        editingCategory,
    } = useDash();

    const [name, setName] = useState("");
    const [products, setProducts] = useState("");
    const [stock, setStock] = useState("");

    useEffect(() => {
        if (editingCategory) {
            setName(editingCategory.name);
            setProducts(editingCategory.products);
            setStock(editingCategory.stock);
        }
    }, [editingCategory]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name,
            products: Number(products),
            stock: Number(stock),
        };

        if (editingIndex !== null) {
            updateCategory(editingIndex, data);
        } else {
            addCategory(data);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-end lg:items-center justify-center">
            <div className="flex flex-col items-center justify-center 
      text-center p-10 border border-gray-300 bg-white rounded gap-8 w-100 h-70 ">

                <div className="flex w-full justify-between">
                    <h1 className="text-gray-600 font-semibold">Add Category</h1>
                    <X size={18} onClick={() => onClose()} />
                </div>
                <form onSubmit={handleSubmit} >
                    <div className="flex flex-col gap-4 ">

                        <input type="text" placeholder='Category Name' value={name}
                            className='w-80 p-2 bg-gray-300 rounded focus:outline-none '
                            onChange={(e) => setName(e.target.value)} required />

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded"
                        >
                            {editingCategory ? "Update Category" : "Save Category"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Addcategory
