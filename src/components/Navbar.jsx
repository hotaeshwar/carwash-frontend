import { useState, useEffect, useRef } from 'react';
import actionCarLogo from '../assets/images/action car logo.png';
import awardLogo from '../assets/images/award png.png';

const Navbar = ({ currentView, setCurrentView }) => {
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

  const handleNavClick = (view, href = null) => {
    if (href) {
      // Check if it's the auto-detailing service - navigate to the dedicated page
      if (href === '#auto-detailing') {
        setCurrentView('auto-detailing');
      } else if (href === '#paint-correction') {
        setCurrentView('paint-correction');
      } else if (href === '#window-tinting') {
        setCurrentView('window-tinting');
      } else if (href === '#ceramic-coating') {
        setCurrentView('ceramic-coatings');
      } else if (href === '#remediation-claims') {
        setCurrentView('remediation-claim');
      } else if (href === '#paint-protection-film') {
        setCurrentView('paint-protection-film');
      } else if (href === '#dent-repair') {
        setCurrentView('dent-repair');
      } else if (href === '#before-after') {
        setCurrentView('before-after');
      } else if (href.startsWith('#') && currentView === 'home') {
        // For other anchor links, scroll to section if we're on home page
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (href.startsWith('#')) {
        // Switch to home first, then scroll
        setCurrentView('home');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // For view changes
      setCurrentView(view);
    }
    setIsMenuOpen(false);
    setServicesDropdownOpen(false);
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
    { name: 'HOME', view: 'home' },
    { name: 'ABOUT', view: 'about' },
    { name: 'GIFT CARD', view: 'giftcard' },
    { name: 'SERVICES', href: '#services', hasDropdown: true },
    { name: 'BEFORE & AFTER', href: '#before-after' },
    { name: 'TESTIMONIALS', view: 'testimonials' },
    { name: 'REFERENCES', view: 'references' },
  ];

  const serviceItems = [
    { name: 'AUTO DETAILING', href: '#auto-detailing' }, // This will now navigate to the dedicated page
    { name: 'PAINT CORRECTION POLISHING', href: '#paint-correction' }, // This will now navigate to the dedicated page
    { name: 'WINDOW TINTING', href: '#window-tinting' },
    { name: 'CERAMIC COATING', href: '#ceramic-coating' }, // This will now navigate to the ceramic coatings page
    { name: 'PAINT PROTECTION FILM', href: '#paint-protection-film' }, // Updated to navigate to paint protection film page
    { name: 'DENT REPAIR', href: '#dent-repair' }, // Added dent repair service
    { name: 'REMEDIATION CLAIMS', href: '#remediation-claims' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-90' : 'bg-transparent'}`}>
      {/* Main Navigation */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-90' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 transform transition-transform hover:scale-105 cursor-pointer" onClick={() => handleNavClick('home')}>
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
                      className={`mafia-nav-link flex items-center text-xs md:text-sm lg:text-base ${
                        currentView === 'services' || currentView === 'auto-detailing' || currentView === 'paint-correction' || currentView === 'window-tinting' || currentView === 'ceramic-coatings' || currentView === 'remediation-claim' || currentView === 'paint-protection-film' || currentView === 'dent-repair' ? 'bg-blue-700' : ''
                      }`}
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
                    <button
                      onClick={() => handleNavClick(link.view, link.href)}
                      className={`mafia-nav-link text-xs md:text-sm lg:text-base ${
                        currentView === link.view || (link.href === '#before-after' && currentView === 'before-after') ? 'bg-blue-700' : ''
                      }`}
                    >
                      <span>{link.name}</span>
                    </button>
                  )}
                  
                  {/* Services Dropdown */}
                  {link.name === 'SERVICES' && servicesDropdownOpen && (
                    <div className="absolute mt-2 w-48 md:w-56 lg:w-64 bg-black rounded-md shadow-2xl overflow-hidden z-20 border border-blue-800">
                      <div className="py-1">
                        {serviceItems.map((service) => (
                          <button
                            key={service.name}
                            onClick={() => handleNavClick(null, service.href)}
                            className={`w-full text-left block px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-200 hover:bg-blue-800 hover:text-white transition-colors duration-200 border-l-4 border-transparent hover:border-white ${
                              (service.href === '#auto-detailing' && currentView === 'auto-detailing') ||
                              (service.href === '#paint-correction' && currentView === 'paint-correction') ||
                              (service.href === '#window-tinting' && currentView === 'window-tinting') ||
                              (service.href === '#ceramic-coating' && currentView === 'ceramic-coatings') ||
                              (service.href === '#remediation-claims' && currentView === 'remediation-claim') ||
                              (service.href === '#paint-protection-film' && currentView === 'paint-protection-film') ||
                              (service.href === '#dent-repair' && currentView === 'dent-repair')
                                ? 'bg-blue-800 border-white' : ''
                            }`}
                          >
                            {service.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Award Logo - UPDATED SIZE */}
            <div className="hidden md:flex flex-shrink-0 transform transition-transform hover:scale-110">
              <img 
                className="h-16 md:h-20 lg:h-24 w-auto filter drop-shadow-2xl" 
                src={awardLogo} 
                alt="Consumer Choice Award 2025"
                style={{ maxWidth: '190px', md: 'maxWidth: 180px', lg: 'maxWidth: 220px', objectFit: 'contain' }} 
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
                          <button
                            key={service.name}
                            onClick={() => handleNavClick(null, service.href)}
                            className={`w-full text-left block px-3 py-2 rounded-md text-xs sm:text-sm font-medium text-gray-200 hover:text-white hover:bg-blue-800 border-l-2 border-blue-700 ${
                              (service.href === '#auto-detailing' && currentView === 'auto-detailing') ||
                              (service.href === '#paint-correction' && currentView === 'paint-correction') ||
                              (service.href === '#window-tinting' && currentView === 'window-tinting') ||
                              (service.href === '#ceramic-coating' && currentView === 'ceramic-coatings') ||
                              (service.href === '#remediation-claims' && currentView === 'remediation-claim') ||
                              (service.href === '#paint-protection-film' && currentView === 'paint-protection-film') ||
                              (service.href === '#dent-repair' && currentView === 'dent-repair')
                                ? 'bg-blue-800' : ''
                            }`}
                          >
                            {service.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.view, link.href)}
                    className={`w-full text-left block px-3 py-2 rounded-md text-sm sm:text-base font-medium text-white hover:text-blue-300 hover:bg-blue-900 ${
                      currentView === link.view || (link.href === '#before-after' && currentView === 'before-after') ? 'bg-blue-800' : ''
                    }`}
                  >
                    {link.name}
                  </button>
                )}
              </div>
            ))}
          </div>
          {/* Mobile Award Logo - UPDATED SIZE */}
          <div className="flex justify-center py-3">
            <img 
              className="h-20 sm:h-24 w-auto transform transition-transform hover:scale-110 filter drop-shadow-2xl" 
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
          border: none;
          cursor: pointer;
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