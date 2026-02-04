import { createContext, useContext, useState, useEffect } from "react";
import { categories as initialCategories } from "../constants/Dash";


export const DashContext = createContext();

export const DashProvider = ({ children }) => {

    const [active, setActive] = useState("Category");
    const [show, setShow] = useState(false);
    const [showcategory, setShowcategory] = useState(false)
    const [categories, setCategories] = useState(() => {
        const stored = localStorage.getItem("categories");
        return stored ? JSON.parse(stored) : initialCategories;
    });
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingCategory, setEditingCategory] = useState(null);

    const [products, setProducts] = useState(() => {
        const stored = localStorage.getItem("products");
        return stored ? JSON.parse(stored) : [];
    });

    const [showProductModal, setShowProductModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const editProduct = (product) => {
        setEditingProduct(product);
        setShowProductModal(true);
    };

    const updateProduct = (updatedProduct) => {
        setProducts((prev) =>
            prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
        );
        setEditingProduct(null);
        setShowProductModal(false);
    };



    const addProduct = (product) => {
        setProducts((prev) => [...prev, product]);
        setShowProductModal(false);
    };

    const deleteProduct = (productId) => {
        setProducts((prev) =>
            prev.filter((product) => product.id !== productId)
        );
    };

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);


    const updateCategory = (index, updatedCategory) => {
        const updated = [...categories];
        updated[index] = updatedCategory;
        setCategories(updated);
        closeModal();
    };

    const editCategory = (index) => {
        setEditingIndex(index);
        setEditingCategory(categories[index]);
        setShowcategory(true);
    };

    const closeModal = () => {
        setShowcategory(false);
        setShowProductModal(false);
        setEditingProduct(null);
        setEditingIndex(null);
        setEditingCategory(null);
    };



    useEffect(() => {
        localStorage.setItem("categories", JSON.stringify(categories));
    }, [categories]);

    const deleteCategory = (index) => {
        setCategories((prev) => prev.filter((_, i) => i !== index));
    };

    const addCategory = (newCategory) => {
        setCategories((prev) => [...prev, newCategory]);
        setShowcategory(false);
    };


    const onClose = () => {
        setShowcategory(false);
    }

    return (
        <DashContext.Provider
            value={{
                active,
                setActive,

                show,
                setShow,

                // CATEGORY
                showcategory,
                setShowcategory,
                categories,
                addCategory,
                deleteCategory,
                editCategory,
                updateCategory,
                editingIndex,
                editingCategory,

                // PRODUCT
                setProducts,
                products,
                addProduct,
                deleteProduct,
                showProductModal,
                setShowProductModal,
                editProduct,
                editingProduct,
                updateProduct,

                // COMMON
                onClose: closeModal,
            }}
        >
            {children}
        </DashContext.Provider>
    )
}

export const useDash = () => useContext(DashContext);