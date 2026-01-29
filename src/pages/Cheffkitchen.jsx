
import { Header } from "../components/Header";
import { MainGrids } from "../components/MainGrids";
import { Orders } from "../components/Orders";
import { PaymentMethod } from "../components/PaymentMethod";
import Sidebar from "../components/Sidebar";
import { OrderReceipt } from "../components/orderReceipt";
import { useKitchen } from "../context/KitchenContext";

export const Cheffkitchen = () => {
  const { showOrders, showReceipt,showpayment } = useKitchen();
  const ordersWidth = 380; // width of Orders panel in px

  return (
    <div className="flex w-full min-h-screen bg-[#2D303E] overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main + Orders wrapper */}
      <div className="flex flex-1 relative">

        {/* Main content */}
        <div
          className="flex flex-col flex-1 overflow-hidden transition-all duration-300 lg:ml-25"
          style={{ marginRight: showOrders ? `${ordersWidth}px` : '0px' }}
        >
          <Header />
          <MainGrids />
        </div>

        {/* Orders panel fixed */}
        {showOrders && (
          <div
            className="fixed top-0 right-0 h-full w-96 z-40"
          >
            <Orders />
          </div>
        )}

      </div>

      {/* Receipt overlay */}
      {showReceipt && <OrderReceipt />}
      {showpayment && <PaymentMethod/>}
    </div>
  );
};
