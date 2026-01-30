import { useDash } from '../context/DashContext';
import { tab } from '../constants/Dash';
import { NavLink } from 'react-router-dom';
import { LogOut} from "lucide-react";
import { useNavigate } from 'react-router-dom';


export const Menubar = () => {
  const { active, setActive } = useDash();
  const navigate = useNavigate();

  return (

    <>

      <div className="flex flex-col min-h-full bg-gray-900">

        <div className="flex mt-3 justify-center">
          <h1 className="text-[#E0E6E9] lg:text-xl text-sm ">
            Chef Kitchen
          </h1>
        </div>

        <div className="border border-green-700 w-full mt-6"></div>

        <div className="mt-10">
          {tab.map(({ to, end, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-50 cursor-pointer
              ${isActive ? "bg-gray-700 border-r-4 border-green-700" : ""}`
              }
            >
              <Icon className="min-w-7 w-8 text-green-700" />
              <p className="hidden md:inline-block text-gray-200">
                {label}
              </p>
            </NavLink>
          ))}
        </div>

        <div className="mb-0 px-3 md:px-9 mt-100">
          <button
            onClick={()=>navigate("/")}
            className="w-full flex items-center gap-3 py-3.5
          text-red-400 hover:bg-red-500/10 rounded-lg transition"
          >
            <LogOut className="w-6" />
            <span className="hidden md:inline">Logout</span>
          </button>
        </div>

      </div>
    </>
  );
};
