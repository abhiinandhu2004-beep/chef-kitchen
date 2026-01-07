// import { Header } from "../components/Header";
// import { MainGrids } from "../components/MainGrids";
// import { Orders } from "../components/Orders";
// import Sidebar from "../components/Sidebar";
// import { OrderReceipt } from "../components/orderReceipt"
// import { useKitchen } from "../context/KitchenContext";

// export const Cheffkitchen = () => {

//   const {
//     showOrders,
//     showReceipt
//   } = useKitchen();

//   return (
//     <div className="flex flex-col w-full min-h-screen bg-[#2D303E] md:flex-col lg:flex-row ">
//       <Sidebar />
//       <div className={`
//     flex flex-col lg:flex-row lg:w-full lg:ml-30 ml-0
//     transition-all duration-300
//     ${showOrders ? "lg:mr-100" : "lg:mr-0"}
//   `}>

//      <Header />
//      <MainGrids />

//       </div>

//       {
//         showOrders && (
//           <Orders />
//         )
//       }

//       {
//         showReceipt && (
//           <OrderReceipt />
//         )
//       }
//     </div >

//   );
// };





import { Header } from "../components/Header";
import { MainGrids } from "../components/MainGrids";
import { Orders } from "../components/Orders";
import Sidebar from "../components/Sidebar";
import { OrderReceipt } from "../components/orderReceipt";
import { useKitchen } from "../context/KitchenContext";

export const Cheffkitchen = () => {
  const { showOrders, showReceipt } = useKitchen();
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
    </div>
  );
};
