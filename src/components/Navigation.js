import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from './NEXAlogo.png';
import { useAuth } from '../components/AuthContext';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout, user } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSignIn = () => {
    navigate('/AuthPage');
  };

  const handleLogout = () => {
    logout();
    navigate('/AuthPage');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  useEffect(() => {
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dropdownRef]);


  const isAuthPage = location.pathname === '/AuthPage';

  return (
    <div className="w-full h-[8vh] fixed top-0 left-0 flex items-center justify-between bg-white z-50">
      <div className='pl-8'>
        <img src={logo} alt="logo" className="w-32 h-auto" />
      </div>
      <div className='pr-10 flex flex-col gap-2 relative'>
        {/* Conditionally render the Sign In or Log Out button based on authentication status */}
        {!isAuthPage && (
          !isAuthenticated ? (
            <button
              className="h-10 bg-blue-600 text-white p-3 rounded-lg cursor-pointer flex items-center"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                className="h-10 bg-blue-600 text-white p-3 rounded-lg cursor-pointer flex items-center"
                onClick={toggleDropdown}
              >
                Hi, {user?.name} {/* Display the user's name */}
                <span className="ml-2">&#9660;</span> {/* Dropdown icon */}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                  <div className="px-4 py-2 border-b">
                    <p className="text-sm">Hi! {user?.name}</p>
                    <p className="text-xs text-gray-600">{user?.email}</p>
                  </div>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Navigation;
