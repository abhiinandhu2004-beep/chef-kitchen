import { useDash } from '../context/DashContext';
import { tab } from '../constants/Dash';

export const Menubar = () => {
  const { active, setActive } = useDash();

  return (
    <div className="flex h-screen w-60 bg-[#1F1D2B]">
      <div className="flex flex-col gap-4 text-[#E0E6E9] mt-10 w-full">

        {tab.map((tabs) => {
          const Icon = tabs.icon;
          const isActive = active === tabs.id;

          return (
            <div
              key={tabs.id}
              onClick={() => setActive(tabs.id)}
              className={`relative flex items-center gap-5 px-6 py-3 cursor-pointer
                transition-all duration-300
                ${isActive ? "bg-[#2D303E]" : "bg-transparent"}`}
            >
              {/* ICON */}
              <Icon
                className={`w-6 h-6 transition-colors duration-300
                  ${isActive ? "text-green-700" : "text-gray-400"}`}
              />

              {/* LABEL */}
              <h2
                className={`text-xl transition-colors duration-300
                  ${isActive ? "text-white" : "text-gray-400"}`}
              >
                {tabs.label}
              </h2>

              {/* ORANGE ACTIVE INDICATOR */}
              <span
                className={`absolute right-0 top-1/2 -translate-y-1/2
                  h-12 w-1 rounded-l-full bg-green-700
                  transition-all duration-300
                  ${isActive ? "opacity-100" : "opacity-0"}`}
              />
            </div>
          );
        })}

      </div>
    </div>
  );
};
