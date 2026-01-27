import { useDash } from "../context/DashContext";
import { tab } from "../constants/Dash";
import { X } from 'lucide-react';


export const SidebarMobile = () => {
  const { active, setActive, show, setShow } = useDash();

  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300
        ${show ? "bg-black/40 opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={() => setShow(false)}
    >
      
      <div
        className={`absolute left-0 top-0 h-screen w-60 bg-[#1F1D2B]
          transform transition-transform duration-300 ease-in-out
          ${show ? "translate-x-0" : "-translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className="flex justify-between relative">
            <h1 className="text-[#E0E6E9] text-2xl p-4">Chef Kitchen</h1>
          <X
            className="text-white cursor-pointer text-xs absolute top-5 right-2"
            onClick={() => setShow(false)}
          />
        </div>

    
        <div className="flex flex-col gap-4 text-[#E0E6E9] mt-6">
          {tab.map((tabs) => {
            const Icon = tabs.icon;
            const isActive = active === tabs.id;

            return (
              <div
                key={tabs.id}
                onClick={() => {
                  setActive(tabs.id);
                  setShow(false);
                }}
                className={`relative flex items-center gap-5 px-6 py-3 cursor-pointer
                  transition-colors duration-300
                  ${isActive ? "bg-[#2D303E]" : ""}`}
              >
                <Icon className="w-6 h-6 text-green-700" />

                <h2
                  className={`text-md ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                >
                  {tabs.label}
                </h2>

                <span
                  className={`absolute right-0 top-1/2 -translate-y-1/2
                    h-12 w-1 bg-green-700 rounded-l-full
                    ${isActive ? "opacity-100" : "opacity-0"}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
