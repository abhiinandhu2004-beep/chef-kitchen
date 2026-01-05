import { useNavigate } from "react-router-dom";

export const Explore = () => {
  const navigate = useNavigate();

  return (
    <div className=" h-screen flex flex-col items-center w-full relative">

        <img
          src="/Android Compact - 1.png"
          className="absolute inset-0 bg-black/90 w-full h-full object-cover "
        />

      
        <div className="absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className=" justify-center-center mt-6 text-center px-4">

            <img
              src="/Frame 98.png"
              className="w-80 sm:w-100 md:w-72"
            />

            <p className="text-white text-xl sm:text-2xl font-semibold mt-4">
              Welcome to Chef Kitchen
            </p>

            <p className="text-white opacity-60 text-sm sm:text-base mt-2">
              Check out the awesome food experience! It's <br />
              super fresh, quick, and oh-so tasty!
            </p>

            <button
              onClick={() => navigate("/chffkitchen")}
              className="bg-orange-400 text-white px-6 py-3 rounded-xl mt-6 shadow-lg hover:bg-orange-500 transition w-full max-w-xs"
            >
              Explore Menu
            </button>
          </div>

        </div>
      </div>
  );
};

