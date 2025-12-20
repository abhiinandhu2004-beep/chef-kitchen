import logo from "../assets/Logo (1).png"
import { GoHome } from "react-icons/go";
import { CiDiscount1, CiHeart } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { IoNotificationsOutline, IoLogOutOutline } from "react-icons/io5";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Sidebar() {
  const [active, setActive] = useState(0);
  const Navigate = useNavigate();

  const icons = [
    GoHome,
    CiDiscount1,
    CiHeart,
    MdOutlineMail,
    IoNotificationsOutline,
  ];

  return (
    <>
      <div className="hidden lg:fixed lg:flex flex-col w-25 items-center rounded-r-2xl 
                bg-[#1F1D2B] py-8 top-0 left-0 h-screen 
                 overflow-hidden z-50">

        <img src={logo} alt="logo" className="w-14 mb-10 relative z-10" />

        <div className="flex flex-col  relative z-10">
          {icons.map((Icon, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className="w-14 h-15 flex items-center justify-center  text-white rounded-xl cursor-pointer   mb-10"
            >

              {active === index && (
                <>
                  <div className="absolute  -left-3 w-25 h-20 bg-[#2D303E] rounded-l-2xl ">
                    <div className="absolute top-0 right-3 w-22 h-20 bg-[#2D303E] rounded-l-2xl ">
                      <div className="absolute  -left-20 w-10 h-20 bg-[#2D303E] rounded-l-xl" />

                      <div className="absolute right-1 -top-9.5 w-10 h-10  z-10">
                        <div className="relative left-4.5 top-2.5 w-7 h-7 bg-[#2D303E]">

                          <div className="absolute top-0 right-0 w-7 h-7 bg-[#1F1D2B] rounded-bl-full rotate-270" />
                        </div>
                      </div>

                      <div className="absolute right-1 top-17.5 w-10 h-10  z-10">
                        <div className="relative left-4.5 top-2.5 w-7 h-7 bg-[#2D303E]">

                          <div className="absolute top-0 right-0 w-7 h-7 bg-[#1F1D2B] rounded-bl-full rotate-180" />
                        </div>
                      </div>

                    </div>
                  </div>
                </>)}

              <Icon
                className={` relative z-10 text-3xl transition-all duration-300
                  ${active === index
                    ? " text-[#fdfdfd] bg-[#F99147] rounded-lg w-13 h-13 p-2"
                    : "text-white/50 hover:text-white"
                  }
                `}
              />
            </button>
          ))}
        </div>

        <IoLogOutOutline className="text-[#F99147] hover:text-white text-3xl cursor-pointer mt-auto relative z-10" 
                                    onClick={()=>Navigate("/")}/>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 z-50 w-full h-15 bg-[#1F1D2B] flex justify-between items-center border-t border-gray-700">
        <GoHome className="text-[#F99147] text-3xl" />
        <CiDiscount1 className="text-[#F99147] text-3xl" />
        <CiHeart className="text-[#F99147] text-3xl" />
        <MdOutlineMail className="text-[#F99147] text-3xl" />
        <IoNotificationsOutline className="text-[#F99147] text-3xl" />
        <IoLogOutOutline className="text-[#F99147] text-3xl" />
      </div>
    </>
  );
}

export default Sidebar;
