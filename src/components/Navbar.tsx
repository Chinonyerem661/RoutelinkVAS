"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/Logo.svg";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleNav = (): void => setOpen(!open);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full fixed z-50 bg-white ">
      {/* DESKTOP NAV */}
      <div className="hidden lg:flex w-full h-[80px] px-8 xl:px-16 2xl:px-28 items-center justify-between">
        <Link href="/">
<Image src={Logo} alt="routelink VAS" height={40} className="h-[18px] w-auto" />
        </Link>

        <div className="flex items-center gap-8 xl:gap-12">
          <Link
            href="/About"
            className={`text-gray-800 hover:text-[#F05A24] transition-colors duration-300 font-medium ${
              isActive("/About") ? "text-[#F05A24]" : ""
            }`}
          >
            About us
          </Link>

          <Link
            href="/services"
            className={`text-gray-800 hover:text-[#F05A24] transition-colors duration-300 font-medium ${
              isActive("/services") ? "text-[#F05A24]" : ""
            }`}
          >
            Services
          </Link>

          <Link
            href="/contact"
            className={`text-gray-800 hover:text-[#F05A24] transition-colors duration-300 font-medium ${
              isActive("/contact") ? "text-[#F05A24]" : ""
            }`}
          >
            Contact
          </Link>

          <Link
            href="/start-building"
            className="px-6 py-2.5 border-2 border-[#F05A24] text-[#F05A24] rounded-lg hover:bg-[#F05A24] hover:text-white transition-all duration-300 font-medium"
          >
            Lets Start Building
          </Link>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className="lg:hidden flex justify-between items-center px-5 h-[70px] bg-white shadow-sm">
        <Link href="/">
{/* <Image src={Logo} alt="routelink VAS" height={34} className="h-[34px] w-auto" /> */}
        </Link>

        <button type="button" onClick={toggleNav} aria-label="Toggle menu">
          {open ? (
            <AiOutlineClose size={28} color="#333" />
          ) : (
            <HiOutlineBars3 size={33} color="#333" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed h-full w-full bg-white transition-transform duration-500 top-[70px] ${
          open ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <ul className="text-gray-800 px-7 font-medium">
          <li className="py-5 border-b border-gray-200">
            <Link
              onClick={toggleNav}
              href="/about-us"
              className={`block ${
                isActive("/about-us") ? "text-[#F05A24] font-semibold" : ""
              }`}
            >
              About us
            </Link>
          </li>
          <li className="py-5 border-b border-gray-200">
            <Link
              onClick={toggleNav}
              href="/services"
              className={`block ${
                isActive("/services") ? "text-[#F05A24] font-semibold" : ""
              }`}
            >
              Services
            </Link>
          </li>
          <li className="py-5 border-b border-gray-200">
            <Link
              onClick={toggleNav}
              href="/contact"
              className={`block ${
                isActive("/contact") ? "text-[#F05A24] font-semibold" : ""
              }`}
            >
              Contact
            </Link>
          </li>
          <li className="py-5">
            <Link
              onClick={toggleNav}
              href="/start-building"
              className="block px-6 py-2.5 border-2 border-[#F05A24] text-[#F05A24] rounded-lg text-center hover:bg-[#F05A24] hover:text-white transition-all duration-300"
            >
              Lets Start Building
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;