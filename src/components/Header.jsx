import img from '../assets/bitcoin.jpeg';
import { NavLink , Link } from 'react-router-dom';
import { CoinContext } from '../context/context';
import { useContext, useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const data = useContext(CoinContext);

  const handleCurrencyChange = (e) => {
    if (e.target.value == "usd") {
      data.setCurrency({
        name: "USD",
        symbol: "$"
      });
    } else {
      data.setCurrency({
        name: "inr",
        symbol: "₹"
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="animate-lightrun bg-black sticky top-0 w-full text-white border-b border-gray-600">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-5">
          <div>
            <img src={img} alt="img" className='w-11 h-11 rounded-xl' />
          </div>
          <div className='animate-pulse'>
            CryptoX
          </div>
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink to="/" className={(e) => e.isActive ? "text-red-600" : "hover:text-gray-300"}>Home</NavLink>
          <NavLink to="/about" className={(e) => e.isActive ? "text-red-600" : "hover:text-gray-300"}>About</NavLink>
          <select
            className="text-white bg-black block p-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
            value={data.currency.name}
            onChange={handleCurrencyChange}
          >
            <option className='text-white bg-transparent' value="usd">USD</option>
            <option className='text-white bg-transparent' value="inr">Rupees</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {/* Mobile menu icon (Hamburger icon) */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Transition */}
      <div className={`md:hidden bg-black border-t border-gray-600 overflow-hidden transition-max-height duration-1000 ease-in-out ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 py-2 flex-col justify-center items-center text-center space-y-2 opacity-100">
          <NavLink to="/" className={(e) => e.isActive ? "block text-red-600" : "block hover:text-gray-300"}>Home</NavLink>
          <NavLink to="/about" className={(e) => e.isActive ? "block text-red-600" : "block hover:text-gray-300"}>About</NavLink>
          {/* <select
            className="text-white text-center bg-black block p-1 pl-4 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 w-full"
            value={data.currency.name}
            onChange={handleCurrencyChange}
          >
            <option className='text-white bg-transparent' value="inr">Rupees</option>
            <option className='text-white bg-transparent' value="usd">USD</option>
          </select> */}
          <select
            className="text-white bg-black block p-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 mx-auto text-center"
            value={data.currency.name}
            onChange={handleCurrencyChange}
          >
            <option className='text-white bg-transparent mx-auto' value="usd">USD</option>
            <option className='text-white bg-transparent' value="inr">Rupees</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
