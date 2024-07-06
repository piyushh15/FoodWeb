import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const checkLoginStatus = () => {
    const authToken = localStorage.getItem('authToken');
    setIsLoggedIn(!!authToken);
  };

  useEffect(() => {
    checkLoginStatus();
  }, []); // Run the check when the component mounts

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    clearCart();
    setIsLoggedIn(false);
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='flex items-center justify-center '>
      <nav className="w-full py-3 m-0 text-white shadow-md rounded-xl bg-opacity-80 px-[2rem] ">
        <div className="flex items-center justify-between px-4 text-white">
          <a
            href="/"
            className="mr-4 font-briem block cursor-pointer py-1.5 text-3xl font-semibold leading-relaxed tracking-normal text-inherit antialiased"
          >
            FoodWeb
          </a>
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="block p-1 font-montserrat text-sm antialiased font-semibold leading-normal ">
                <a
                  href="/"
                  className="flex text-white font-montserrat text-xl items-center transition-colors hover:text-blue-500"
                >
                  Home
                </a>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="block p-1 font-montserrat text-sm antialiased font-semibold leading-normal">
                    <a
                      href="/myorders"
                      className="flex font-montserrat text-xl text-white items-center transition-colors hover:text-blue-500"
                    >
                      My Orders
                    </a>
                  </li>
                  <li className="block p-1 font-montserrat text-sm antialiased font-semibold leading-normal">
                    <a
                      href="/cart"
                      className="flex text-white font-montserrat text-xl items-center transition-colors hover:text-blue-500"
                    >
                      Cart
                    </a>
                  </li>
                  <li className="block p-1 text-white font-montserrat text-sm antialiased font-semibold leading-normal">
                    <a
                      href="#"
                      onClick={handleLogout}
                      className="flex items-center font-montserrat text-xl transition-colors hover:text-blue-500"
                    >
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="block p-1 text-white font-montserrat text-sm antialiased font-semibold leading-normal">
                    <a
                      href="/login"
                      className="flex items-center text-xl font-montserrat transition-colors hover:text-blue-500"
                    >
                      Login
                    </a>
                  </li>
                  <li className="block p-1 text-white font-montserrat text-sm antialiased font-semibold leading-normal">
                    <a
                      href="/createuser"
                      className="flex items-center text-xl font-montserrat transition-colors hover:text-blue-500"
                    >
                      Sign Up
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
          <button
            className="relative h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-montserrat text-xs font-semibold uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
              </svg>
            </span>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <ul className="flex flex-col gap-2 my-2 px-4">
              <li className="block p-1 font-montserrat text-sm antialiased font-semibold leading-normal">
                <a
                  href="/"
                  className="flex text-white font-montserrat text-xl items-center transition-colors hover:text-blue-500"
                >
                  Home
                </a>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="block p-1 font-montserrat text-sm antialiased font-semibold leading-normal">
                    <a
                      href="/myorders"
                      className="flex font-montserrat text-xl text-white items-center transition-colors hover:text-blue-500"
                    >
                      My Orders
                    </a>
                  </li>
                  <li className="block p-1 font-montserrat text-sm antialiased font-semibold leading-normal">
                    <a
                      href="/cart"
                      className="flex text-white font-montserrat text-xl items-center transition-colors hover:text-blue-500"
                    >
                      Cart
                    </a>
                  </li>
                  <li className="block p-1 text-white font-montserrat text-sm antialiased font-semibold leading-normal">
                    <a
                      href="#"
                      onClick={handleLogout}
                      className="flex items-center font-montserrat text-xl transition-colors hover:text-blue-500"
                    >
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="block p-1 text-white font-montserrat text-sm antialiased font-semibold leading-normal">
                    <a
                      href="/login"
                      className="flex items-center text-xl font-montserrat transition-colors hover:text-blue-500"
                    >
                      Login
                    </a>
                  </li>
                  <li className="block p-1 text-white font-montserrat text-sm antialiased font-semibold leading-normal">
                    <a
                      href="/createuser"
                      className="flex items-center text-xl font-montserrat transition-colors hover:text-blue-500"
                    >
                      Sign Up
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
