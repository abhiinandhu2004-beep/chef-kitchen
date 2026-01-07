import { createContext, useState,useContext } from "react";
import { tabs,menuItems } from "../constants/Index";

export const KitchenContext = createContext();

export const KitchenProvider = ({ children }) => {

    const [active, setActive] = useState("today");
    const [cart, setCart] = useState([]);
    const [showOrders, setShowOrders] = useState(false);
    const [selectedSizes, setSelectedSizes] = useState({});
    const [search, setSearch] = useState("");
    const [orderType, setOrderType] = useState("Dine In");
    const [showType, setShowType] = useState(false);
    const [showReceipt, setShowReceipt] = useState(false);
    const [isCompleted, setisCompleted] = useState(false);


    const clearOrder = () =>{
        setShowOrders(false);
        setSelectedSizes([]);
        setCart([]);
    }

    const onClose = ()=> {
        setShowReceipt(false);
    }
    
    const filteredMenuItems = menuItems.filter((item) => {
        const matchesSearch = item.title
            .toLowerCase()
            .includes(search.trim().toLowerCase());

        const matchesOrderType = item.availableFor.includes(orderType);
        const matchesCategory =
            active === "today" ? true : item.category === active;
        return matchesSearch && matchesOrderType && matchesCategory;
    });

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

    const handleSizeSelect = (title, size) => {
        setSelectedSizes((prev) => ({
            ...prev,
            [title]: size,
        }));
    };

    const getPriceBySize = (price, size) => {
        const base = parseFloat(price);

        if (size === "M") return (base / 2).toFixed(2);
        if (size === "S") return (base / 3).toFixed(2);

        return base.toFixed(2);

    };

    const subtotal = cart.reduce(
        (sum, item) => sum + item.qty * parseFloat(item.price),
        0
    );
    const handleAddToCart = (item) => {
        const selectedSize = selectedSizes[item.title] || "L";

        const basePrice = parseFloat(item.price);
        let finalPrice = basePrice;

        if (selectedSize === "M") finalPrice = basePrice / 2;
        if (selectedSize === "S") finalPrice = basePrice / 3;

        setCart((prev) => {
            const existingItem = prev.find(
                (cartItem) =>
                    cartItem.title === item.title &&
                    cartItem.size === selectedSize
            );

            if (existingItem) {
                return prev.map((cartItem) =>
                    cartItem.title === item.title && cartItem.size === selectedSize
                        ? { ...cartItem, qty: cartItem.qty + 1 }
                        : cartItem
                );
            }

            return [
                ...prev,
                {
                    ...item,
                    size: selectedSize,
                    price: finalPrice.toFixed(2),
                    qty: 1,
                },
            ];
        });
    };

    return (
        
         <KitchenContext.Provider
            value={{
                /* UI STATE */
                active,
                setActive,
                search,
                setSearch,
                showOrders,
                setShowOrders,
                showType,
                setShowType,
                showReceipt,
                setShowReceipt,
                isCompleted,
                setisCompleted,

                /* ORDER STATE */
                orderType,
                setOrderType,

                /* MENU */
                filteredMenuItems,

                /* CART */
                cart,
                setCart,
                totalQty,
                subtotal,

                /* HELPERS */
                selectedSizes,
                handleSizeSelect,
                handleAddToCart,
                getPriceBySize,
                clearOrder,
                onClose
            }}
        >
            {children}
        </KitchenContext.Provider>

    )
}

export const useKitchen = () => useContext(KitchenContext);

