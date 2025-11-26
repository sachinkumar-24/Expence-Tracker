import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  LogOut,
  Menu,
  Shuffle,
  SquareActivity,
  User,
  UserStar,
} from "lucide-react"; 
import { AuthContext } from "../context/AuthContext";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const { logout } = useContext(AuthContext);

  const menuitems = [
    { name: "Dashboard", icon: <HomeIcon size={20} />, path: "/dashboard" },
    { name: "Manage", icon: <SquareActivity size={20} />, path: "/dashboard/manage" },
    { name: "Track", icon: <Shuffle size={20} />, path: "/dashboard/track" },
    { name: "Consult", icon: <UserStar size={20} />, path: "/dashboard/consult" },
    { name: "Profile", icon: <User size={20} />, path: "/dashboard/profile" },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          isOpen ? "w-70" : "w-20 items-center"
        } bg-gradient-to-b from-pink-200  to-yellow-200 h-screen transition-all duration-300 flex flex-col justify-center`}
      >



        <div className="flex items-center justify-between p-4">
          <h2
            className={`font-bold text-lg text-blue-700 ${!isOpen && "hidden"}`}
          >
            E <span className="font-bold text-lg text-blue-700">Tracker</span>
          </h2>

          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu size={20} />
          </button>
        </div>

        <nav className="flex-1 px-2 space-y-2 mt-6">
          {menuitems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className={`flex items-center gap-3 p-2 rounded-lg transition ${
                location.pathname === item.path
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-200  "
              }`}
            >
              {item.icon}
              <span
                className={`${!isOpen ? "hidden" : ""} text-sm font-medium`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        <div className="p-4">
          <button
            onClick={() => {
              logout();
              navigate("/"); //redirect to home after logout
            }}
            className="flex items-center gap-3 p-2 w-full rounded-lg hover:bg-blue-500 transition"
          >
            <LogOut size={20} />
            <span className={`${!isOpen && "hidden"} text-sm font-medium`}>
              Logout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
