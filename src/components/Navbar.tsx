'use client';
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certificate", href: "#certificate" },
    { name: "Contact", href: "#contact" },
  ];


  return (
    <nav className="fixed top-0 w-full z-50  flex justify-between items-center px-6 py-4">
      {/* nav items */}
      <div className="flex-1 flex justify-center">
        {/* เมนูสำหรับ Desktop เท่านั้น */}
        <ul className="hidden md:flex items-center gap-8 bg-white py-2 px-6 rounded-full shadow-md text-lg text-gray-700">
          {navItems.map((item) => (
            <li key={item.name} className="cursor-pointer relative group">
              <a href={item.href} className="block py-1">{item.name}</a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger icon สำหรับ Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* เมนูแบบ Mobile */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-6 text-lg text-gray-700">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;