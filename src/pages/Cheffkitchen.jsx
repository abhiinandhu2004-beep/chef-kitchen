import { Header } from "../components/Header";
import { MainGrids } from "../components/MainGrids";
import { Orders } from "../components/Orders";
import Sidebar from "../components/Sidebar";
import { OrderReceipt } from "../components/orderReceipt"
import { useKitchen } from "../context/KitchenContext";

export const Cheffkitchen = () => {

  const {
    showOrders,
    showReceipt
  } = useKitchen();

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#2D303E] md:flex-col lg:flex-row ">
      <Sidebar />
      <div className={`
    flex flex-col lg:flex-row lg:w-full lg:ml-30 ml-0
    transition-all duration-300
    ${showOrders ? "lg:mr-100" : "lg:mr-0"}
  `}>

     <Header />
     <MainGrids />

      </div>
      
      {
        showOrders && (
          <Orders />
        )
      }

      {
        showReceipt && (
          <OrderReceipt />
        )
      }
    </div >

  );
};
