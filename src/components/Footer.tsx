import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/Logo.svg";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2a2a2a] text-white">
      {/* Orange Top Border */}
      {/* <div className="w-full h-1 bg-[#F05A24]"></div> */}

      {/* Main Footer Content */}
      <div className="px-6 md:px-12 lg:px-20 xl:px-28 py-12 lg:py-16">
        {/* Logo and Description */}
        <div className="mb-12">
<Image src={Logo} alt="routelink VAS" className="h-[18px] w-auto mb-6" height={40} />
          <p className="text-gray-300 max-w-3xl text-base leading-relaxed">
            We prioritize transparency and user trust. All RoutelinkVAS solutions are designed with strict adherence to MNO guidelines.
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Column 1 */}
          <div>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-[#F05A24] hover:text-[#ff6b3d] transition-colors duration-300 text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-base"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-base"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-base"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/savings-products"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-base"
                >
                  Savings Products
                </Link>
              </li>
              <li>
                <Link
                  href="/blah-blah"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-base"
                >
                  Blah Blah
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-base"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-base"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Empty in design */}
          <div></div>

          {/* Column 4 - Contact Information */}
          <div>
            <address className="not-italic text-gray-300 space-y-6">
              <div className="leading-relaxed">
                Plot XA, Block X,<br />
                Routelink Road,<br />
                HQ Routelink, Lagos State.
              </div>
              <div className="space-y-2">
                <a
                  href="mailto:support@routelink.com"
                  className="block hover:text-white transition-colors duration-300"
                >
                  support@routelink.com
                </a>
                <a
                  href="tel:+1234567891234"
                  className="block hover:text-white transition-colors duration-300"
                >
                  +123 456 789 1234
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-600 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-gray-300 text-sm">
            Copyright © 2026, RoutelinkGroup. All rights Reserved
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-1">
            <span className="text-gray-300 text-sm mr-3">Connect with</span>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#F05A24] flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#F05A24] flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <FaXTwitter size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#F05A24] flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#F05A24] flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#F05A24] flex items-center justify-center transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
