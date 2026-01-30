import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { useDash } from "../context/DashContext";

const AddProduct = () => {
    const {
        addProduct,
        onClose,
        editingProduct,
        updateProduct,
        categories, // ✅ add this
    } = useDash();

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState("");
    const [sizes, setSizes] = useState([]);
    const [orderType, setOrderType] = useState([]);
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (editingProduct) {
            setName(editingProduct.name);
            setCategory(editingProduct.category);
            setStock(editingProduct.stock);
            setSizes(editingProduct.sizes || []);
            setOrderType(editingProduct.orderType || []);
            setImage(editingProduct.image || null);
        }
    }, [editingProduct]);
    /* ---------- ORDER TYPE TOGGLE ---------- */
    const toggleOrderType = (value) => {
        setOrderType((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
    };

    /* ---------- SIZE TOGGLE (FIXED) ---------- */
    const toggleSize = (size) => {
        const exists = sizes.find((s) => s.size === size);

        if (exists) {
            setSizes((prev) => prev.filter((s) => s.size !== size));
        } else {
            setSizes((prev) => [
                ...prev,
                {
                    id: crypto.randomUUID(), // ✅ UNIQUE ID
                    size,
                    price: "",
                },
            ]);
        }
    };

    /* ---------- UPDATE PRICE (FIXED) ---------- */
    const updatePrice = (id, value) => {
        setSizes((prev) =>
            prev.map((s) =>
                s.id === id ? { ...s, price: value } : s
            )
        );
    };

    /* ---------- SUBMIT ---------- */
    const handleSubmit = (e) => {
        e.preventDefault();

        const productData = {
            id: editingProduct ? editingProduct.id : Date.now(),
            name,
            category,
            stock: Number(stock),
            sizes,
            orderType,
            image,
        };

        editingProduct
            ? updateProduct(productData)
            : addProduct(productData);

        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl w-[460px] p-6 shadow-xl">

                {/* Header */}
                <div className="flex justify-between items-center border-b pb-3 mb-5">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Add New Product
                    </h2>
                    <X
                        className="cursor-pointer text-gray-500 hover:text-red-500"
                        size={20}
                        onClick={onClose}
                    />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                    {/* Image */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-600">Product Image</label>

                        <input
                            type="file"
                            accept="image/*"
                            className="p-2.5 bg-gray-100 rounded-lg"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (!file) return;

                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    setImage(reader.result); // ✅ BASE64 STRING
                                };
                                reader.readAsDataURL(file);
                            }}
                        />

                        {/* 👀 IMAGE PREVIEW */}
                        {/* {image && (
                            <img
                                src={image}
                                alt="preview"
                                className="w-28 h-28 object-cover rounded-lg border mt-2"
                            />
                        )} */}
                    </div>


                    {/* Name */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-600">Product Name</label>
                        <input
                            type="text"
                            className="p-2.5 bg-gray-100 rounded-lg"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Category */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-600">Category</label>

                        <select
                            className="p-2.5 bg-gray-100 rounded-lg"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="">Select category</option>

                            {categories.map((cat, index) => (
                                <option key={index} value={cat.name}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>


                    {/* Stock */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-600">Stock</label>
                        <input
                            type="number"
                            className="p-2.5 bg-gray-100 rounded-lg"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            required
                        />
                    </div>

                    {/* Sizes */}
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Sizes & Prices</p>
                        <div className="grid grid-cols-3 gap-4">
                            {["S", "M", "L"].map((label) => {
                                const selected = sizes.find((x) => x.size === label);

                                return (
                                    <div
                                        key={label}
                                        className={`border rounded-lg p-3 text-center ${selected
                                            ? "border-green-600 bg-green-50"
                                            : "border-gray-300"
                                            }`}
                                    >
                                        <label className="flex items-center justify-center gap-2">
                                            <input
                                                type="checkbox"
                                                checked={!!selected}
                                                onChange={() => toggleSize(label)}
                                            />
                                            <span className="font-medium">{label}</span>
                                        </label>

                                        {selected && (
                                            <input
                                                type="number"
                                                placeholder="₹ Price"
                                                className="mt-2 w-full p-2 text-sm rounded border"
                                                value={selected.price}
                                                onChange={(e) =>
                                                    updatePrice(selected.id, e.target.value)
                                                }
                                                required
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Order Type */}
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Order Type</p>
                        <div className="flex gap-3">
                            {["DINE_IN", "TAKEAWAY", "DELIVERY"].map((o) => (
                                <label key={o} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={orderType.includes(o)}
                                        onChange={() => toggleOrderType(o)}
                                    />
                                    {o.replace("_", " ")}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="mt-4 bg-green-600 text-white py-2.5 rounded-xl"
                    >
                        Save Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
