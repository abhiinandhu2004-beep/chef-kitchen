import { Header } from "../components/Header";
import { MainGrids } from "../components/MainGrids";
import { useState } from "react";
import { Orders } from "../components/Orders";
import Sidebar  from "../components/Sidebar";
import { OrderReceipt } from "../components/orderReceipt"
import { menuItems } from "../constants/Index";

export const Cheffkitchen = () => {
  const [active, setActive] = useState("today");
  const [cart, setCart] = useState([]);
  const [showOrders, setShowOrders] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [search, setSearch] = useState("");
  const [orderType, setOrderType] = useState("Dine In");
  const [showType, setShowType] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

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
    <div className="flex flex-col w-full min-h-screen bg-[#2D303E] md:flex-col lg:flex-row ">
      <Sidebar />
      <div className={`
    flex flex-col lg:flex-row lg:w-full lg:ml-30 ml-0
    transition-all duration-300
    ${showOrders ? "lg:mr-100" : "lg:mr-0"}
  `}>

        <div>
          <Header
            active={active}
            setActive={setActive}
            search={search}
            setSearch={setSearch}
            showOrders={showOrders}
          />
        </div>

        <div>
          <MainGrids
            showType={showType}
            setShowType={setShowType}
            orderType={orderType}
            setOrderType={setOrderType}
            showOrders={showOrders}
            setShowOrders={setShowOrders}
            selectedSizes={selectedSizes}
            setSelectedSizes={setSelectedSizes}
            totalQty={totalQty}
            filteredMenuItems={filteredMenuItems}
            getPriceBySize={getPriceBySize}
            cart={cart}
            handleAddToCart={handleAddToCart}
            handleSizeSelect={handleSizeSelect}
          />
        </div>

      </div>

      {
        showOrders && (
          <Orders
            cart={cart}
            setCart={setCart}
            orderType={orderType}
            setOrderType={setOrderType}
            onClose={() => {
              setShowOrders(false);
              setCart([]);
            }}
            setShowReceipt={setShowReceipt}

          />
        )
      }

      {
        showReceipt && (
          <OrderReceipt
            cart={cart}
            subtotal={subtotal}
            orderType={orderType}
            onClose={() => setShowReceipt(false)}
          />
        )
      }
    </div >

  );
};
