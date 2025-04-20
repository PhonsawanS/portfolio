const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50  flex justify-between items-center px-6 py-4">
      {/* nav items */}
      <div className="flex-1 flex justify-center">
        <ul className="flex items-center gap-8 bg-white py-2 px-6 rounded-full shadow-md text-lg text-gray-700">
          <li className="cursor-pointer relative group">
            <a href="#home" className="block py-1">Home</a>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="cursor-pointer relative group">
            <a href="#about" className="block py-1">About</a>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="cursor-pointer relative group">
            <a href="#projects" className="block py-1">Projects</a>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="cursor-pointer relative group">
            <a href="#certificate" className="block py-1">Certificate</a>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="cursor-pointer relative group">
            <a href="#contact" className="block py-1">Contact</a>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </li>
        </ul>
      </div>


    </nav>
  );
};

export default Navbar;