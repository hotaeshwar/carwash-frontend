import { useState, useEffect, useRef } from 'react';
import actionCarLogo from '../assets/images/action car logo.png';
import awardLogo from '../assets/images/award png.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT', href: '#' },
    { name: 'GIFT CARD', href: '#' },
    { name: 'SERVICES', href: '#', hasDropdown: true },
    { name: 'BEFORE & AFTER', href: '#' },
    { name: 'TESTIMONIALS', href: '#' },
    { name: 'REFERENCES', href: '#' },
  ];

  const serviceItems = [
    { name: 'AUTO DETAILING', href: '#auto-detailing' },
    { name: 'PAINT CORRECTION POLISHING', href: '#paint-correction' },
    { name: 'WINDOW TINTING', href: '#window-tinting' },
    { name: 'CERAMIC COATING', href: '#ceramic-coating' },
    { name: 'PAINT PROTECTION FILM', href: '#paint-protection' },
    { name: 'REMEDIATION CLAIMS', href: '#remediation-claims' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-90' : 'bg-transparent'}`}>
      {/* Main Navigation */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-90' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 transform transition-transform hover:scale-105">
              <img 
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto filter drop-shadow-lg" 
                src={actionCarLogo} 
                alt="Action Car Detailing Logo" 
                style={{ maxWidth: '150px', sm: 'maxWidth: 200px', md: 'maxWidth: 250px', objectFit: 'contain' }}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center space-x-1 lg:space-x-4">
              {navLinks.map((link) => (
                <div key={link.name} className="relative" ref={link.name === 'SERVICES' ? dropdownRef : null}>
                  {link.hasDropdown ? (
                    <button
                      onClick={toggleServicesDropdown}
                      className="mafia-nav-link flex items-center text-xs md:text-sm lg:text-base"
                    >
                      <span>{link.name}</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-3 w-3 md:h-4 md:w-4 inline ml-1 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="mafia-nav-link text-xs md:text-sm lg:text-base"
                    >
                      <span>{link.name}</span>
                    </a>
                  )}
                  
                  {/* Services Dropdown */}
                  {link.name === 'SERVICES' && servicesDropdownOpen && (
                    <div className="absolute mt-2 w-48 md:w-56 lg:w-64 bg-black rounded-md shadow-2xl overflow-hidden z-20 border border-blue-800">
                      <div className="py-1">
                        {serviceItems.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="block px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-200 hover:bg-blue-800 hover:text-white transition-colors duration-200 border-l-4 border-transparent hover:border-white"
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Award Logo */}
            <div className="hidden md:flex flex-shrink-0 transform transition-transform hover:scale-110">
              <img 
                className="h-10 md:h-12 lg:h-16 w-auto filter drop-shadow-2xl" 
                src={awardLogo} 
                alt="Consumer Choice Award 2025"
                style={{ maxWidth: '100px', md: 'maxWidth: 120px', lg: 'maxWidth: 150px', objectFit: 'contain' }} 
              />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-300 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg
                    className="block h-5 w-5 sm:h-6 sm:w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg
                    className="block h-5 w-5 sm:h-6 sm:w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black shadow-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className="w-full flex justify-between items-center px-3 py-2 rounded-md text-sm sm:text-base font-medium text-white hover:text-blue-300 hover:bg-blue-900"
                    >
                      {link.name}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {servicesDropdownOpen && (
                      <div className="pl-4 space-y-1">
                        {serviceItems.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="block px-3 py-2 rounded-md text-xs sm:text-sm font-medium text-gray-200 hover:text-white hover:bg-blue-800 border-l-2 border-blue-700"
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-sm sm:text-base font-medium text-white hover:text-blue-300 hover:bg-blue-900"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center py-3">
            <img 
              className="h-12 sm:h-16 w-auto transform transition-transform hover:scale-110 filter drop-shadow-2xl" 
              src={awardLogo} 
              alt="Consumer Choice Award 2025" 
            />
          </div>
        </div>
      )}

      {/* CSS for the trapezoid buttons and nav links */}
      <style jsx>{`
        .trapezoid-button {
          position: relative;
          display: inline-block;
          clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0% 100%);
          border: none;
          text-align: center;
          font-weight: bold;
        }
        
        .mafia-nav-link {
          position: relative;
          display: inline-block;
          padding: 0.35rem 0.5rem;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          color: white;
          background-color: #2563eb;
          clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0% 100%);
          margin: 0 0.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        @media (min-width: 768px) {
          .mafia-nav-link {
            padding: 0.4rem 0.75rem;
            font-size: 0.8rem;
            margin: 0 0.15rem;
          }
        }
        
        @media (min-width: 1024px) {
          .mafia-nav-link {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
            margin: 0 0.25rem;
          }
        }
        
        .mafia-nav-link:hover {
          background-color: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;