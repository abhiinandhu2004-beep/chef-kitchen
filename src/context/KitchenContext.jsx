// import { createContext, useState, useContext, useEffect } from "react";

// import { useDash } from "./DashContext";

// export const KitchenContext = createContext();

// export const KitchenProvider = ({ children }) => {

//     const { products } = useDash();

//     const [active, setActive] = useState("today");
//     const [cart, setCart] = useState([]);
//     const [showOrders, setShowOrders] = useState(false);
//     const [selectedSizes, setSelectedSizes] = useState({});
//     const [search, setSearch] = useState("");
//     const [orderType, setOrderType] = useState("Dine In");
//     const [showType, setShowType] = useState(false);
//     const [showReceipt, setShowReceipt] = useState(false);
//     const [isCompleted, setisCompleted] = useState(false);
//    const [orders, setOrders] = useState(() => {
//   const saved = localStorage.getItem("orders");
//   const parsed = saved ? JSON.parse(saved) : [];

//   return parsed.map(order => ({
//     ...order,
//     items: Array.isArray(order.items) ? order.items : [],
//   }));
// });


//     useEffect(() => {
//         localStorage.setItem("orders", JSON.stringify(orders));
//     }, [orders]);


//     const onOrder = () => {
//         if (cart.length === 0) return;

//         const newOrder = {
//             id: Date.now(),
//             items: cart,              // ✅ save cart items
//             orderType,
//             status: "Pending",        // ✅ admin status
//             createdAt: new Date().toLocaleString(),
//             subTotal: subtotal,
//         };

//         setOrders(prev => [...prev, newOrder]); // ✅ SAVE ORDER
//         setisCompleted(true);                   // ✅ show success screen
//     };



//     const normalizeTitle = (item) => item.title || item.name;

//     const clearOrder = () => {
//         setShowOrders(false);
//         setSelectedSizes({});
//         setCart([]);
//     };


//     const onClose = () => {
//         setShowReceipt(false);
//         setisCompleted(false);
//     };


//     const filteredMenuItems = (products || []).filter((item) => {
//         const title = normalizeTitle(item);

//         const matchesSearch = title
//             .toLowerCase()
//             .includes(search.trim().toLowerCase());

//         const matchesOrderType =
//             item.availableFor?.includes(orderType) ?? true;

//         const matchesCategory =
//             active === "today" ? true : item.category === active;

//         return matchesSearch && matchesOrderType && matchesCategory;
//     });


//     const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

//     const handleSizeSelect = (productId, sizeObj) => {
//         setSelectedSizes((prev) => ({
//             ...prev,
//             [productId]: sizeObj,
//         }));
//     };


//     const getPriceBySize = (sizes, selected) => {
//         if (!selected) return sizes?.[sizes.length - 1]?.price || 0; // default L
//         return selected.price;
//     };


//     const subtotal = cart.reduce(
//         (sum, item) => sum + item.qty * parseFloat(item.price),
//         0
//     );
//     const handleAddToCart = (item) => {
//         const selectedSize =
//             selectedSizes[item.id] || item.sizes[item.sizes.length - 1];

//         setCart((prev) => {
//             const existing = prev.find(
//                 (c) => c.id === item.id && c.size === selectedSize.size
//             );

//             if (existing) {
//                 return prev.map((c) =>
//                     c.id === item.id && c.size === selectedSize.size
//                         ? { ...c, qty: c.qty + 1 }
//                         : c
//                 );
//             }

//             return [
//                 ...prev,
//                 {
//                     id: item.id,
//                     name: item.name,
//                     image: item.image,
//                     size: selectedSize.size,
//                     price: selectedSize.price,
//                     qty: 1,
//                 },
//             ];
//         });
//     };


//     return (

//         <KitchenContext.Provider
//             value={{
//                 /* UI STATE */
//                 active,
//                 setActive,
//                 search,
//                 setSearch,
//                 showOrders,
//                 setShowOrders,
//                 showType,
//                 setShowType,
//                 showReceipt,
//                 setShowReceipt,
//                 isCompleted,
//                 setisCompleted,

//                 /* ORDER STATE */
//                 orderType,
//                 setOrderType,
//                 orders,
//                 onOrder,

//                 /* MENU */
//                 filteredMenuItems,

//                 /* CART */
//                 cart,
//                 setCart,
//                 totalQty,
//                 subtotal,

//                 /* HELPERS */
//                 selectedSizes,
//                 handleSizeSelect,
//                 handleAddToCart,
//                 getPriceBySize,
//                 clearOrder,
//                 onClose
//             }}
//         >
//             {children}
//         </KitchenContext.Provider>

//     )
// }

// export const useKitchen = () => useContext(KitchenContext);



import { createContext, useState, useContext, useEffect } from "react";
import { useDash } from "./DashContext";

export const KitchenContext = createContext();
const MAX_ORDERS = 50; // or any number you want


export const KitchenProvider = ({ children }) => {
    const { products } = useDash();

    const [active, setActive] = useState("today");
    const [cart, setCart] = useState([]);
    const [showOrders, setShowOrders] = useState(false);
    const [selectedSizes, setSelectedSizes] = useState({});
    const [search, setSearch] = useState("");
    const [orderType, setOrderType] = useState("Dine In");
    const [showType, setShowType] = useState(false);
    const [showReceipt, setShowReceipt] = useState(false);
    const [isCompleted, setisCompleted] = useState(false);
    const [payment, setPayment] = useState(false);
    const [showpayment, setShowpayment] = useState(false);



    const [orders, setOrders] = useState(() => {
        try {
            const saved = localStorage.getItem("orders");
            const parsed = saved ? JSON.parse(saved) : [];

            return parsed.map(order => ({
                ...order,
                items: Array.isArray(order.items) ? order.items : [],
            }));
        } catch {
            return [];
        }
    });

    useEffect(() => {
        console.log("ORDERS STATE →", orders);
    }, [orders]);



    useEffect(() => {
        try {
            const limitedOrders = orders.slice(-MAX_ORDERS);
            localStorage.setItem("orders", JSON.stringify(limitedOrders));
        } catch (e) {
            console.error("LocalStorage full, clearing old orders");
            localStorage.removeItem("orders");
        }
    }, [orders]);

    const deleteOrder = (orderId) => {
        setOrders(prev => prev.filter(order => order.id !== orderId));
    };


    const subtotal = cart.reduce(
        (sum, item) => sum + item.qty * parseFloat(item.price),
        0
    );

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);


    const onOrder = (paymentMethod) => {

        if (cart.length === 0) return;

        const newOrder = {
            id: Date.now(),
            orderType,
             paymentMethod, 
            status: "Pending",
            createdAt: Date.now(),
            subTotal: subtotal,

            items: cart.map(item => ({
                id: item.id,
                image: item.image,
                name: item.name,
                size: item.size,
                qty: item.qty,
                price: item.price,
            })),
        };

        console.log("NEW ORDER →", newOrder);

        setOrders(prev => [...prev, newOrder]);
        setCart([]);                 // ✅ clear cart
        setSelectedSizes({});
        setisCompleted(true);
    
    };

    /* ===============================
       HELPERS
    =============================== */
    const normalizeTitle = (item) => item.title || item.name;

    const clearOrder = () => {
        setShowOrders(false);
        setSelectedSizes({});
        setCart([]);
    };

    const onClose = () => {
        setShowReceipt(false);
        setisCompleted(false);
    };

    const filteredMenuItems = (products || []).filter((item) => {
        const title = normalizeTitle(item);

        const matchesSearch = title
            .toLowerCase()
            .includes(search.trim().toLowerCase());

        const matchesOrderType =
            item.availableFor?.includes(orderType) ?? true;

        const matchesCategory =
            active === "today" ? true : item.category === active;

        return matchesSearch && matchesOrderType && matchesCategory;
    });

    const handleSizeSelect = (productId, sizeObj) => {
        setSelectedSizes(prev => ({
            ...prev,
            [productId]: sizeObj,
        }));
    };

    const getPriceBySize = (sizes, selected) => {
        if (!selected) return sizes?.[sizes.length - 1]?.price || 0;
        return selected.price;
    };

    const handleAddToCart = (item) => {
        const selectedSize =
            selectedSizes[item.id] || item.sizes[item.sizes.length - 1];

        setCart(prev => {
            const existing = prev.find(
                c => c.id === item.id && c.size === selectedSize.size
            );

            if (existing) {
                return prev.map(c =>
                    c.id === item.id && c.size === selectedSize.size
                        ? { ...c, qty: c.qty + 1 }
                        : c
                );
            }

            return [


                ...prev,
                {
                    id: item.id,
                    image: item.image,
                    name: item.name,
                    size: selectedSize.size,
                    price: selectedSize.price,
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
                orders,
                onOrder,
                deleteOrder,
                setPayment,
                setShowpayment,
                showpayment,

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
                onClose,
            }}
        >
            {children}
        </KitchenContext.Provider>
    );
};

export const useKitchen = () => useContext(KitchenContext);
