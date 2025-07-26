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
    <>
      {/* Award Logo - Now positioned inline with navbar */}
      <div className="fixed top-0 right-2 sm:right-3 md:right-4 lg:right-5 xl:right-6 z-30 flex items-center h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22">
        <div className="transform transition-transform hover:scale-110">
          <img 
            className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-36 2xl:h-44 w-auto filter drop-shadow-2xl max-w-[140px] sm:max-w-[200px] md:max-w-[260px] lg:max-w-[330px] xl:max-w-[350px] object-contain" 
            src={awardLogo} 
            alt="Consumer Choice Award 2025"
          />
        </div>
      </div>

      <nav className={`fixed w-full z-40 transition-all duration-300 bg-transparent`}>
        {/* Main Navigation */}
        <div className={`transition-all duration-300 bg-transparent`}>
          <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22">
              {/* Logo */}
              <div className="flex-shrink-0 transform transition-transform hover:scale-105 cursor-pointer" onClick={() => handleNavClick('home')}>
                <img 
                  className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto filter drop-shadow-lg max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] xl:max-w-[200px] object-contain" 
                  src={actionCarLogo} 
                  alt="Action Car Detailing Logo" 
                />
              </div>

              {/* Desktop Navigation - Hidden on mobile and tablet */}
              <div className="hidden lg:flex items-center justify-center space-x-0.5 xl:space-x-1 flex-1 max-w-4xl mx-auto ipad-pro-nav">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative" ref={link.name === 'SERVICES' ? dropdownRef : null}>
                    {link.hasDropdown ? (
                      <button
                        onClick={toggleServicesDropdown}
                        className={`mafia-nav-link flex items-center text-xs ${
                          currentView === 'services' || currentView === 'auto-detailing' || currentView === 'paint-correction' || currentView === 'window-tinting' || currentView === 'ceramic-coatings' || currentView === 'remediation-claim' || currentView === 'paint-protection-film' || currentView === 'dent-repair' ? 'bg-blue-700' : ''
                        }`}
                      >
                        <span>{link.name}</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-3 w-3 inline ml-1 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
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
                        className={`mafia-nav-link text-xs ${
                          currentView === link.view || (link.href === '#before-after' && currentView === 'before-after') ? 'bg-blue-700' : ''
                        }`}
                      >
                        <span>{link.name}</span>
                      </button>
                    )}
                    
                    {/* Services Dropdown */}
                    {link.name === 'SERVICES' && servicesDropdownOpen && (
                      <div className="absolute mt-2 w-48 lg:w-52 xl:w-56 bg-black rounded-md shadow-2xl overflow-hidden z-20 border border-blue-800">
                        <div className="py-1">
                          {serviceItems.map((service) => (
                            <button
                              key={service.name}
                              onClick={() => handleNavClick(null, service.href)}
                              className={`w-full text-left block px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm text-gray-200 hover:bg-blue-800 hover:text-white transition-colors duration-200 border-l-4 border-transparent hover:border-white ${
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

              {/* Mobile/Tablet menu button - Show on mobile and tablet */}
              <div className="lg:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-700 focus:outline-none"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isMenuOpen ? (
                    <svg
                      className="block h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  ) : (
                    <svg
                      className="block h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
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

        {/* Mobile/Tablet menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black shadow-2xl z-50">
            <div className="px-2 sm:px-3 md:px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                        className="w-full flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3 rounded-md text-sm sm:text-base md:text-lg font-medium text-white hover:text-blue-300 hover:bg-blue-900"
                      >
                        {link.name}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {servicesDropdownOpen && (
                        <div className="pl-4 sm:pl-6 md:pl-8 space-y-1">
                          {serviceItems.map((service) => (
                            <button
                              key={service.name}
                              onClick={() => handleNavClick(null, service.href)}
                              className={`w-full text-left block px-3 sm:px-4 py-2 sm:py-3 rounded-md text-xs sm:text-sm md:text-base font-medium text-gray-200 hover:text-white hover:bg-blue-800 border-l-2 border-blue-700 ${
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
                      className={`w-full text-left block px-3 sm:px-4 py-2 sm:py-3 rounded-md text-sm sm:text-base md:text-lg font-medium text-white hover:text-blue-300 hover:bg-blue-900 ${
                        currentView === link.view || (link.href === '#before-after' && currentView === 'before-after') ? 'bg-blue-800' : ''
                      }`}
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}
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
            padding: 0.3rem 0.5rem;
            font-size: 0.65rem;
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
            white-space: nowrap;
          }

          @media (min-width: 1024px) {
            .mafia-nav-link {
              padding: 0.35rem 0.6rem;
              font-size: 0.7rem;
              margin: 0 0.15rem;
            }
          }
          
          @media (min-width: 1280px) {
            .mafia-nav-link {
              padding: 0.4rem 0.75rem;
              font-size: 0.75rem;
              margin: 0 0.2rem;
            }
          }

          @media (min-width: 1536px) {
            .mafia-nav-link {
              padding: 0.45rem 0.85rem;
              font-size: 0.8rem;
              margin: 0 0.25rem;
            }
          }

          /* iPad Pro specific fix - Multiple approaches */
          @media (min-width: 1024px) and (max-width: 1366px) {
            .ipad-pro-nav {
              margin-right: 140px !important;
              padding-right: 30px !important;
              max-width: calc(100% - 180px) !important;
            }
            
            .mafia-nav-link {
              padding: 0.4rem 0.6rem !important;
              font-size: 0.7rem !important;
              margin: 0 0.1rem !important;
              min-width: auto !important;
              display: inline-flex !important;
              align-items: center !important;
              justify-content: center !important;
            }
          }
          
          /* Even more specific iPad Pro targeting */
          @media screen and (width: 1024px) and (height: 1366px) {
            .ipad-pro-nav {
              margin-right: 150px !important;
              padding-right: 40px !important;
            }
            
            .mafia-nav-link {
              padding: 0.4rem 0.65rem !important;
              font-size: 0.7rem !important;
              margin: 0 0.08rem !important;
              min-width: auto !important;
              display: inline-flex !important;
              align-items: center !important;
              justify-content: center !important;
            }
          }
          
          /* Alternative approach - force smaller navigation globally on large tablets */
          @media (min-width: 1000px) and (max-width: 1400px) and (max-height: 1400px) {
            .hidden.lg\\:flex.items-center.justify-center {
              margin-right: 120px !important;
            }
            
            .mafia-nav-link {
              padding: 0.4rem 0.6rem !important;
              font-size: 0.7rem !important;
              margin: 0 0.1rem !important;
              display: inline-flex !important;
              align-items: center !important;
              justify-content: center !important;
            }
          }
          
          .mafia-nav-link:hover {
            background-color: #1d4ed8;
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;