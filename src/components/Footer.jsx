import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import blogBanner from '../assets/images/blog-banner.jpg';
import actionCarLogo from '../assets/images/action car logo.png';
import awardLogo from '../assets/images/award png.png';

const Footer = () => {
  return (
    <footer className="relative w-full">
      {/* Wave curve top border */}
      <div className="w-full h-12 sm:h-14 md:h-16 bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full">
          <path fill="#0a5e7d" d="M0,0 C240,100 480,100 720,50 C960,0 1200,0 1440,100 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
      
      {/* Footer content with background image */}
      <div 
        className="w-full py-6 sm:py-8 md:py-10 text-white"
        style={{
          backgroundImage: `url(${blogBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-teal-900 opacity-90"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
            {/* Contact Information */}
            <div className="mb-6 sm:mb-0">
              <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 border-b border-teal-500 pb-2">Contact Information</h3>
              <p className="mb-1 sm:mb-2 text-sm sm:text-base">Action Car Detailing</p>
              <p className="mb-1 sm:mb-2 text-sm sm:text-base">1380 Sargent avenue,</p>
              <p className="mb-1 sm:mb-2 text-sm sm:text-base">Winnipeg, MB, R3E 0G5</p>
            </div>
            
            {/* Phone & Email */}
            <div className="mb-6 sm:mb-0">
              <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 border-b border-teal-500 pb-2">Get In Touch</h3>
              <p className="mb-1 sm:mb-2 text-sm sm:text-base"><span className="font-bold">Phone:</span> (204) 775-0005</p>
              <p className="mb-2 sm:mb-4 text-sm sm:text-base"><span className="font-bold">Email:</span> info@actioncardetailing.ca</p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-3 sm:space-x-4 mt-3 sm:mt-4">
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-500 transition-colors">
                  <FaFacebook size={16} className="sm:text-lg md:text-xl" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-500 transition-colors">
                  <FaTwitter size={16} className="sm:text-lg md:text-xl" />
                </a>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="mb-6 sm:mb-0">
              <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 border-b border-teal-500 pb-2">Business Hours</h3>
              <p className="mb-1 sm:mb-2 text-sm sm:text-base">Monday – Friday | 8 AM – 6 PM</p>
              <p className="mb-1 sm:mb-2 text-sm sm:text-base">Saturday | 8AM – 3 PM</p>
              <p className="mb-1 sm:mb-2 text-sm sm:text-base">Sunday | Closed</p>
            </div>
            
            {/* Logo and Award */}
            <div className="flex flex-col items-center justify-center mt-2 sm:mt-0">
              <img src={actionCarLogo} alt="Action Car Detailing" className="w-36 sm:w-40 md:w-48 mb-4 sm:mb-6" />
              <img src={awardLogo} alt="Consumer Choice Award 2025" className="w-24 sm:w-28 md:w-32" />
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 border-t border-teal-700 text-center">
            <p className="text-sm sm:text-base">© {new Date().getFullYear()} Action Car Detailing. All Rights Reserved.</p>
            <p className="text-xs sm:text-sm mt-1 sm:mt-2">Website Design by BreezeMaxWeb</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;