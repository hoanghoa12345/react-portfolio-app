import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const socialLinks = [
    {
      id: 1,
      icon: FaLinkedin,
      background: "bg-blue-600",
      url: "",
      name: "Linkedin",
    },
    {
      id: 2,
      icon: FaGithub,
      background: "bg-[#333333]",
      url: "",
      name: "Github",
    },
    {
      id: 3,
      icon: HiOutlineMail,
      background: "bg-[#6fc2b0]",
      url: "",
      name: "Email",
    },
    {
      id: 4,
      icon: BsFillPersonLinesFill,
      background: "bg-[#565f69]",
      url: "",
      name: "Resume",
    },
  ];
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "50px" }} />
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center md:hidden"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socialLinks.map((item) => (
            <li
              key={item.id}
              className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${item.background}`}
            >
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href={item.url}
              >
                {item.name} <item.icon size={30} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
