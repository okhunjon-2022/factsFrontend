import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../assets/avatar.png";
import { useLogoutUserMutation } from "../redux/features/auth/authApi";
import { logout } from "../redux/features/auth/authSlice";
import { BiSearch } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

const Navbar = ({ changeLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();

  const { t } = useTranslation();
  const changeLangHandler = (e) => {
    changeLang(e.target.value);
  };

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
    } catch (error) {}
  };

  const navLists = [
    {
      name: t("home"),
      path: "/",
    },
    {
      name: t("aboutUs"),
      path: "/about-us",
    },
    {
      name: t("contactUs"),
      path: "/contact-us",
    },
  ];

  return (
    <header className="bg-white py-6 border">
      <nav className="container mx-auto flex justify-between px-5">
        <Link href="/" className="flex items-center">
          <img className=" rounded-full size-14" src={logo} alt="" />
        </Link>
        <form className="hidden sm:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg w-1/3">
          <BiSearch className="text-gray-500 size-5" />
          <input
            type="text"
            placeholder={t("search")}
            className="bg-transparent focus:outline-none w-full text-gray-700"
          />
        </form>

        {/* Language Selector */}
        <select
          className="border px-3  rounded-lg"
          onChange={changeLangHandler}
        >
          <option value="en">English</option>
          <option value="uz">O‘zbekcha</option>
          <option value="ru">Русский</option>
        </select>
        <ul className="sm:flex hidden items-center gap-8">
          {navLists.map((list, inx) => (
            <li key={inx}>
              <NavLink
                to={`${list.path}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {list.name}
              </NavLink>
            </li>
          ))}

          {/* render btn based on user login activity */}
          {user && user.role === "user" ? (
            <li className="flex items-center gap-3">
              <img src={avatar} alt="" className="size-8" />

              <button
                onClick={handleLogout}
                className="bg-[#1E73BE] px-4 py-1.5 text-white rounded-lg"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <NavLink to="/login">{t("login")}</NavLink>
            </li>
          )}

          {user && user.role === "admin" && (
            <li className="flex items-center gap-3">
              <img src={avatar} alt="" className="size-8" />
              <Link to="/dashboard">
                <button className="bg-[#1E73BE] px-4 py-1.5 text-white rounded-lg">
                  Dashboard
                </button>
              </Link>
            </li>
          )}
        </ul>
        {/* toggle menu */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-4 bg-[#fafafa] rounded text-sm text-gray-500 hover:text-gray-900"
          >
            {isMenuOpen ? (
              <IoClose className="size-6" />
            ) : (
              <IoMenuSharp className="size-6" />
            )}
          </button>
        </div>
      </nav>
      {/* mobile menu items */}
      {isMenuOpen && (
        <ul className="top-[108px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-50">
          {navLists.map((list, inx) => (
            <li className="mt-5 px-4 " key={inx}>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to={`${list.path}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {list.name}
              </NavLink>
            </li>
          ))}
          <li className="px-4 mt-5">
            <NavLink to="/login">Login</NavLink>
          </li>
          {user && user.role === "admin" && (
            <li className="flex items-center gap-3">
              <img src={avatar} alt="" className="size-8" />
              <Link to="/dashboard">
                <button className="bg-[#1E73BE] px-4 py-1.5 text-white rounded-lg">
                  Dashboard
                </button>
              </Link>
            </li>
          )}
          {user && user.role === "user" ? (
            <li className="flex items-center gap-3">
              <img src={avatar} alt="" className="size-8" />

              <button
                onClick={handleLogout}
                className="bg-[#1E73BE] px-4 py-1.5 text-white rounded-lg"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <NavLink to="/login">{t("login")}</NavLink>
            </li>
          )}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
