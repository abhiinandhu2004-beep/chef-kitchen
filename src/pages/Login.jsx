import { useState } from "react";
import { Mail, Lock, Shield, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleLogin = () => {
    // ADMIN LOGIN
    if (
      role === "admin" &&
      email === "admin@123.com" &&
      password === "admin@123"
    ) {
      localStorage.setItem("role", "admin");
      navigate("/admin");
      return;
    }

    // USER LOGIN
    if (
      role === "user" &&
      email === "user@123.com" &&
      password === "user@123"
    ) {
      localStorage.setItem("role", "user");
      navigate("/cheffkitchen");
      return;
    }

    alert("Invalid credentials for selected role");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#1F1D2B]">
      <div className="bg-[#2D303E] w-full max-w-md rounded-2xl shadow-xl p-8">

        {/* Title */}
        <h1 className="text-2xl font-bold text-white text-center">
          POS Login
        </h1>
        <p className="text-gray-400 text-sm text-center mt-1">
          Select role and login
        </p>

        {/* Role Selector */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => setRole("user")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg
              ${
                role === "user"
                  ? "bg-[#F99147] text-white"
                  : "bg-[#1F1D2B] text-gray-300 border border-gray-600"
              }`}
          >
            <User className="w-4" />
            User
          </button>

          <button
            onClick={() => setRole("admin")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg
              ${
                role === "admin"
                  ? "bg-[#F99147] text-white"
                  : "bg-[#1F1D2B] text-gray-300 border border-gray-600"
              }`}
          >
            <Shield className="w-4" />
            Admin
          </button>
        </div>

        {/* Email */}
        <div className="mt-6">
          <label className="text-gray-400 text-sm">Email</label>
          <div className="relative mt-1">
            <Mail className="absolute left-3 top-3 text-gray-400 w-4" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg
                bg-[#1F1D2B] border border-gray-600 text-white
                focus:outline-none focus:border-[#F99147]"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mt-4">
          <label className="text-gray-400 text-sm">Password</label>
          <div className="relative mt-1">
            <Lock className="absolute left-3 top-3 text-gray-400 w-4" />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg
                bg-[#1F1D2B] border border-gray-600 text-white
                focus:outline-none focus:border-[#F99147]"
            />
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="mt-6 w-full bg-[#F99147] hover:bg-[#EA7C69]
          transition-all text-white py-2 rounded-lg font-medium"
        >
          Login
        </button>

        <p className="text-xs text-gray-500 text-center mt-6">
          Access depends on selected role
        </p>
      </div>
    </div>
  );
};
