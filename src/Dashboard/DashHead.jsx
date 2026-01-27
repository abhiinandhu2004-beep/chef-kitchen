import { useDash } from "../context/DashContext";
import { User, Settings, Bell, LayoutList } from "lucide-react";

export const DashHead = () => {
  const { setShow } = useDash();

  return (
    <div className="flex h-16 w-full bg-gray-900 items-center px-4">
      {/* <div className="flex items-center gap-4">
        <h1 className="text-[#E0E6E9] lg:text-3xl text-sm">Dashboard</h1>
      </div> */}

      <div className="flex items-center gap-6 ml-auto">
        <Bell className="text-green-700 w-6 h-6 cursor-pointer" />

        <div className="flex items-center gap-2">
          <User className="text-green-700 w-6 h-6" />
          <span className="text-[#E0E6E9] lg:text-md text-sm">Admin</span>
        </div>

        <Settings className="text-green-700 w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};
