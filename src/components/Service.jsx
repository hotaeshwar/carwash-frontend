// First, import React hooks
import React, { useState, useEffect, useRef, useCallback } from 'react';

// Import FontAwesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faSprayCan,
  faWindowMaximize,
  faCertificate,
  faUserCheck,
  faShield,
  faTrophy,
  faCheck,
  faHandshake,
  faTag,
  faStar,
  faTools,
  faPlay,
  faPause,
  faArrowRight,
  faTimes,
  faThumbsUp,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

// Import images
import car1 from '../assets/images/car1.jpg';
import car2 from '../assets/images/car2.jpg';
import car3 from '../assets/images/car3.jpg';
import car4 from '../assets/images/car4.jpg';
import car5 from '../assets/images/car5.jpg';
import wash1 from '../assets/images/wash1.png';
import wash2 from '../assets/images/wash2.png';
import awardLogo from '../assets/images/award png.png';
import blogBanner from '../assets/images/blog-banner.jpg';
import car6 from '../assets/images/car6.jpg';

// Import videos
import carwashing1 from '../assets/images/carwashing1.mp4';
import carwashing2 from '../assets/images/carwashing2.mp4';
import carwashing3 from '../assets/images/carwashing3.mp4';
import carwashing4 from '../assets/images/carwashing4.mp4';

const Service = () => {
  // State management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef([]);
  const intervalRef = useRef(null);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const modalRef = useRef(null);

  // Data
  const carImages = [car1, car2, car3, car4, car5];
  const videos = [
    { src: carwashing1, title: "Premium Detailing #1", description: "Complete exterior detailing" },
    { src: carwashing2, title: "Paint Correction", description: "Professional polishing services" },
    { src: carwashing3, title: "Interior Detailing", description: "Deep cleaning and protection" },
    { src: carwashing4, title: "Ceramic Coating", description: "Long-lasting paint protection" }
  ];
  
  // Professional service data with compelling, business-focused content
const servicesData = {
  "Auto Detailing": {
    title: "Premium Auto Detailing",
    shortDescription: "Complete interior and exterior restoration services",
    icon: faCar,
    gradientFrom: "blue-400",
    gradientTo: "blue-600",
    hoverColor: "blue-600",
    fullDescription: "Our comprehensive auto detailing service combines advanced techniques with premium-grade products to restore your vehicle to showroom condition. Every service is performed by certified technicians who take pride in delivering exceptional results that exceed industry standards.",
    features: [
      "Professional hand wash and chamois drying technique",
      "Clay bar treatment to remove embedded contaminants",
      "Deep interior cleaning with commercial-grade equipment",
      "Leather conditioning and protective treatment",
      "Dashboard and trim restoration using specialized products",
      "Complete tire and wheel detailing with protective coating"
    ],
    image: car1,
    price: "Starting at $199",
    guarantee: "100% satisfaction guaranteed or we'll make it right"
  },
  "Paint Correction": {
    title: "Professional Paint Correction",
    shortDescription: "Multi-stage polishing and restoration services",
    icon: faSprayCan,
    gradientFrom: "blue-300",
    gradientTo: "blue-500",
    hoverColor: "blue-600",
    fullDescription: "Our paint correction specialists use precision polishing techniques and professional-grade compounds to eliminate swirl marks, scratches, and oxidation. Each vehicle receives a customized treatment plan based on paint condition analysis to achieve optimal results.",
    features: [
      "Comprehensive paint depth and condition analysis",
      "Multi-stage machine polishing with graduated compounds",
      "Swirl mark and light scratch elimination",
      "Oxidation removal and color restoration",
      "High-gloss finish with enhanced clarity and depth",
      "Protective sealant application for lasting results"
    ],
    image: car3,
    price: "Starting at $299",
    guarantee: "Mirror-finish results backed by our craftsmanship warranty"
  },
  "Window Tinting": {
    title: "Ceramic Window Tinting",
    shortDescription: "Premium film installation with lifetime warranty",
    icon: faWindowMaximize,
    gradientFrom: "blue-500",
    gradientTo: "blue-700",
    hoverColor: "blue-600",
    fullDescription: "Our window tinting service utilizes the highest quality ceramic films available, installed by certified technicians using precision cutting and application techniques. Every installation meets legal requirements while maximizing heat rejection and UV protection.",
    features: [
      "Premium ceramic film technology for superior performance",
      "99% UV ray blocking for interior and occupant protection",
      "Up to 80% heat rejection for improved comfort and efficiency",
      "Significant glare reduction for safer driving",
      "Lifetime warranty against bubbling, peeling, and fading",
      "Computer-cut precision templates for perfect fitment"
    ],
    image: car4,
    price: "Starting at $249",
    guarantee: "Lifetime warranty with professional installation guarantee"
  },
  "Ceramic Coating": {
    title: "Ceramic Paint Coating",
    shortDescription: "Long-term paint protection with 5+ year durability",
    customIcon: wash1,
    gradientFrom: "blue-400",
    gradientTo: "blue-600",
    hoverColor: "blue-600",
    fullDescription: "Our ceramic coating service provides the ultimate in paint protection and enhancement. Using industry-leading 9H ceramic technology, we create a permanent bond with your vehicle's paint that delivers years of protection against environmental contaminants while enhancing gloss and color depth.",
    features: [
      "9H hardness ceramic protection exceeding OEM paint durability",
      "5+ years of verified protection and performance",
      "Enhanced gloss and color depth for premium appearance",
      "Superior hydrophobic properties for easy maintenance",
      "Chemical and contaminant resistance",
      "UV damage prevention and color fade protection"
    ],
    image: car2,
    price: "Starting at $599",
    guarantee: "5-year performance warranty with certified application"
  },
  "Paint Protection": {
    title: "Paint Protection Film",
    shortDescription: "Self-healing film installation with 10-year warranty",
    customIcon: wash2,
    gradientFrom: "blue-300",
    gradientTo: "blue-500",
    hoverColor: "blue-600",
    fullDescription: "Our paint protection film installation provides the highest level of defense against road debris, stone chips, and environmental damage. Using advanced self-healing technology, our premium films maintain optical clarity while delivering invisible protection that preserves your vehicle's value.",
    features: [
      "Self-healing technology repairs minor scratches automatically",
      "Superior impact and abrasion resistance",
      "Optically clear protection maintains original appearance",
      "Custom-cut templates ensure precise coverage and fitment",
      "UV and stain resistance for long-term clarity",
      "10-year manufacturer warranty with professional installation"
    ],
    image: car5,
    price: "Starting at $899",
    guarantee: "10-year warranty covering film performance and installation"
  }
};

// Professional service highlights
const serviceHighlights = {
  quality: "Industry-Leading Standards",
  experience: "Certified Technicians",
  warranty: "Comprehensive Guarantees",
  equipment: "Professional-Grade Products",
  service: "Personalized Consultation",
  convenience: "Flexible Scheduling"
};

// Trust indicators
const trustIndicators = [
  "Fully Licensed and Insured",
  "Certified Installation Specialists",
  "Industry-Standard Warranties",
  "Professional Equipment and Facilities",
  "Consultation and Custom Solutions",
  "Transparent Pricing and Process"
];

// Service process overview
const serviceProcess = {
  consultation: "Initial vehicle assessment and service recommendation",
  preparation: "Professional preparation and workspace setup",
  execution: "Expert application using certified techniques",
  inspection: "Quality control and final inspection",
  delivery: "Service explanation and maintenance guidance"
};
  // Handlers
  const handlePlayPause = useCallback(() => {
    if (videoRefs.current[currentSlide]) {
      if (isPlaying) {
        videoRefs.current[currentSlide].pause();
      } else {
        videoRefs.current[currentSlide].play().catch(error => {
          console.log("Play failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  }, [currentSlide, isPlaying]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    setIsPlaying(true);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % videos.length);
  }, [currentSlide, videos.length, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + videos.length) % videos.length);
  }, [currentSlide, videos.length, goToSlide]);
  
  // Modal handlers
  const openModal = (serviceName) => {
    setSelectedService(servicesData[serviceName]);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };
  
  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);
  
  // Close modal with escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen]);

  // Effects
  useEffect(() => {
    // Set up auto-advance interval
    intervalRef.current = setInterval(() => {
      if (isPlaying) {
        nextSlide();
      }
    }, 8000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, nextSlide]);

  useEffect(() => {
    // Handle video playback when slide changes
    const playCurrentVideo = async () => {
      try {
        // Pause all videos first
        videoRefs.current.forEach(video => {
          if (video) video.pause();
        });

        // Play current video if it exists
        if (videoRefs.current[currentSlide]) {
          await videoRefs.current[currentSlide].play();
        }
      } catch (error) {
        console.log("Video playback error:", error);
      }
    };

    playCurrentVideo();
  }, [currentSlide]);

  // Render helpers
  const renderServiceCard = (icon, title, description, customIcon = null) => (
    <div 
      className="group cursor-pointer bg-gradient-to-br from-white via-gray-50 to-white/80 backdrop-blur-lg rounded-2xl shadow-xl shadow-gray-300/30 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 p-6 sm:p-8 text-center transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden border border-white/50" 
      onClick={() => openModal(title)}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-400/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Sparkle effects */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
      <div className="absolute bottom-8 left-6 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700"></div>
      <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl shadow-blue-500/30 group-hover:shadow-2xl group-hover:shadow-blue-500/40 transform group-hover:rotate-12 transition-all duration-500 relative overflow-hidden">
            {/* Icon glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {customIcon || <FontAwesomeIcon icon={icon} className="text-white text-2xl sm:text-3xl z-10 relative group-hover:scale-110 transition-transform duration-300" />}
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{description}</p>
          <div className="flex items-center justify-center text-blue-500 hover:text-blue-600 transition-colors group-hover:scale-110 group-hover:font-semibold">
            <span className="text-sm sm:text-base mr-2">View Details</span>
            <FontAwesomeIcon icon={faArrowRight} className="transform group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );

  // Sparkle Card Component for "YOUR VEHICLE DESERVES THE BEST" section
  const renderSparkleCard = (id, icon, title, description) => (
    <div className="group h-64 sm:h-72 md:h-80 lg:h-96 relative perspective-1000">
      <div className="relative w-full h-full transform-gpu transition-all duration-700 group-hover:rotate-y-12 group-hover:-translate-y-4 group-hover:scale-105">
        {/* Card Content */}
        <div className="absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/50 group-hover:shadow-3xl group-hover:shadow-blue-500/50">
          {/* Background with animated gradient overlay */}
          <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
            {/* Animated mesh background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-transparent to-blue-600/30 animate-pulse"></div>
            
            {/* Floating sparkle elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-white/80 rounded-full opacity-60 group-hover:opacity-100 animate-bounce transition-opacity duration-300 delay-100"></div>
            <div className="absolute bottom-8 left-6 w-2 h-2 bg-blue-300/80 rounded-full opacity-50 group-hover:opacity-100 animate-bounce transition-opacity duration-300 delay-300"></div>
            <div className="absolute top-1/3 right-8 w-2.5 h-2.5 bg-blue-200/80 rounded-full opacity-40 group-hover:opacity-100 animate-bounce transition-opacity duration-300 delay-500"></div>
            <div className="absolute bottom-1/3 left-4 w-1.5 h-1.5 bg-white/70 rounded-full opacity-50 group-hover:opacity-100 animate-bounce transition-opacity duration-300 delay-700"></div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>
            
            {/* Glow border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 sm:mb-6 shadow-xl shadow-black/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border border-white/30">
                <FontAwesomeIcon icon={icon} className="text-2xl sm:text-3xl md:text-4xl text-white group-hover:scale-110 transition-transform duration-700" />
              </div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-500 text-center drop-shadow-lg">{title}</h3>
              
              <p className="text-sm sm:text-base text-white/90 text-center max-w-xs px-2 md:px-4 leading-relaxed group-hover:opacity-100 transition-all duration-500 drop-shadow-md">{description}</p>
              
              <div className="mt-4 md:mt-6 scale-0 group-hover:scale-100 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm border border-white/30 shadow-lg">
                  Premium Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Flip Card Component for "WHY CHOOSE ACTION CAR DETAILING" section
  const renderFlipCard = (id, frontTitle, iconOrComponent, backTitle, backContent) => {
    // Determine if we're using an icon or a custom component
    let backIconComponent;
    let backIcon;
    
    if (typeof iconOrComponent === 'object' && !React.isValidElement(iconOrComponent)) {
      // It's a FontAwesome icon
      backIcon = iconOrComponent;
      backIconComponent = null;
    } else {
      // It's a custom component
      backIcon = null;
      backIconComponent = iconOrComponent;
    }
    
    return (
      <div className="h-64 sm:h-72 md:h-80 lg:h-96 group relative" style={{ perspective: '1000px' }}>
        <div className="relative w-full h-full transition-transform duration-700 transform-gpu group-hover:rotate-y-180" style={{ transformStyle: 'preserve-3d' }}>
          {/* Front Side */}
          <div className="absolute w-full h-full rounded-2xl shadow-2xl shadow-gray-900/50 overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${blogBanner})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-blue-700/80 to-blue-800/90 flex flex-col justify-end p-6 sm:p-8">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
                </div>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">{frontTitle}</h3>
                <div className="flex items-center text-white text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="mr-3 font-medium">Flip to learn more</span>
                  <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Back Side */}
          <div className="absolute w-full h-full rounded-2xl shadow-2xl shadow-gray-900/50 overflow-hidden transform rotate-y-180" style={{ backfaceVisibility: 'hidden' }}>
            <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-6 sm:p-8 relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/20 rounded-full translate-y-12 -translate-x-12 animate-pulse delay-300"></div>
              
              <div className="flex flex-col h-full justify-center items-center text-center relative z-10">
                <div className="mb-4 sm:mb-6 md:mb-8">
                  {backIconComponent || (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto shadow-2xl shadow-black/40 border border-white/30">
                      <FontAwesomeIcon icon={backIcon} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white" />
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">{backTitle}</h3>
                
                <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xs leading-relaxed drop-shadow-md">{backContent}</p>
                
                <div className="mt-4 sm:mt-6 md:mt-8 w-12 sm:w-16 md:w-20 h-1 bg-gradient-to-r from-white/50 to-white/20 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Service Modal Component
  const ServiceModal = () => {
    if (!isModalOpen || !selectedService) return null;
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
        
        <div 
          ref={modalRef}
          className="relative bg-white rounded-2xl shadow-3xl max-w-2xl w-full mx-auto overflow-hidden transform transition-all duration-500 opacity-100 scale-100 border border-gray-200"
          style={{maxHeight: '90vh'}}
        >
          {/* Modal header with image */}
          <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
            <img 
              src={selectedService.image} 
              alt={selectedService.title} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            {/* Close button */}
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 border border-white/30 shadow-lg hover:scale-110"
              aria-label="Close modal"
            >
              <FontAwesomeIcon icon={faTimes} className="text-white text-lg sm:text-xl" />
            </button>
            
            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">{selectedService.title}</h2>
              <p className="text-base sm:text-lg opacity-90 drop-shadow-md">{selectedService.shortDescription}</p>
            </div>
          </div>
          
          {/* Modal content */}
          <div className="p-6 sm:p-8 max-h-64 sm:max-h-80 md:max-h-96 overflow-y-auto">
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">{selectedService.fullDescription}</p>
            
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3"></div>
              Features
            </h3>
            <ul className="mb-6 sm:mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {selectedService.features.map((feature, index) => (
                <li key={index} className="flex items-start p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <FontAwesomeIcon icon={faCheck} className="text-blue-500 mt-1 mr-3 text-lg flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-2xl mb-6 sm:mb-8 border border-blue-200">
              <div className="flex justify-between items-center">
                <span className="text-base sm:text-lg text-gray-700 font-semibold">Starting Price</span>
                <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">{selectedService.price}</span>
              </div>
            </div>
          </div>
          
          {/* Modal footer */}
          <div className="border-t border-gray-200 p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-gray-100 flex justify-between items-center">
            <button 
              onClick={closeModal} 
              className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-gray-300 rounded-xl text-base sm:text-lg text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 font-medium"
            >
              Close
            </button>
            <button className="px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-base sm:text-lg text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-semibold">
              Book Service
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* CHOOSE YOUR SERVICE Section */}
      <div
        className="py-12 md:py-20 lg:py-28 relative overflow-hidden"
        style={{
          backgroundImage: `url(${car6})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-white/90 text-sm sm:text-base font-medium tracking-wide">PREMIUM SERVICES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 drop-shadow-2xl">
                CHOOSE YOUR SERVICE
              </span>
              <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 lg:w-48 h-1 sm:h-2 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 rounded-full shadow-xl shadow-blue-500/50"></div>
            </h2>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Transform your vehicle with our premium detailing services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {renderServiceCard(faCar, "Auto Detailing", "Complete interior and exterior detailing services")}

            {renderServiceCard(faSprayCan, "Paint Correction", "Professional polishing services")}

            {renderServiceCard(faWindowMaximize, "Window Tinting", "Premium tinting solutions")}

            {renderServiceCard(null, "Ceramic Coating", "Long-lasting protection",
              <div className="flex items-center justify-center">
                <img src={wash1} alt="Ceramic Coating" className="w-10 h-10 object-contain" />
              </div>
            )}

            {renderServiceCard(null, "Paint Protection", "Film installation",
              <div className="flex items-center justify-center">
                <img src={wash2} alt="Paint Protection Film" className="w-10 h-10 object-contain" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FREE PAINT EVALUATION Banner */}
      <div
        className="relative py-16 md:py-24 lg:py-32 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${car2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-black/70 to-blue-800/80 backdrop-blur-sm"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-500"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 sm:mb-8 px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-white/20 to-white/10 rounded-full backdrop-blur-md border border-white/30 shadow-xl">
            <span className="text-base sm:text-lg font-bold tracking-wider text-blue-200">🎉 LIMITED TIME OFFER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-6 sm:mb-8 lg:mb-10">
            <span className="block text-white drop-shadow-2xl">FREE PAINT EVALUATION</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 drop-shadow-2xl">
              & ESTIMATE
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Professional assessment of your vehicle's paint condition - absolutely free!
          </p>
          <button className="group relative px-10 py-4 sm:px-12 sm:py-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 text-white text-lg sm:text-xl font-bold rounded-2xl transition-all duration-300 shadow-2xl shadow-blue-500/50 hover:shadow-3xl hover:shadow-blue-500/70 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10">Claim Your Free Evaluation</span>
          </button>
        </div>
      </div>

      {/* PERFECT SOLUTIONS FOR ALL VEHICLES Section */}
      <div className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
           style={{
             backgroundImage: `url(${car6})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundAttachment: 'fixed'
           }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/60 to-blue-900/80 backdrop-blur-sm"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-white/90 text-sm sm:text-base font-medium tracking-wide">SHOWCASE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 drop-shadow-2xl">
                PERFECT SOLUTIONS
              </span>
              <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 lg:w-48 h-1 sm:h-2 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 rounded-full shadow-xl shadow-blue-500/50"></div>
            </h2>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              FOR ALL VEHICLES
            </p>
          </div>

          {/* Video Slider */}
          <div className="relative max-w-6xl mx-auto rounded-3xl shadow-3xl shadow-black/50 overflow-hidden border-4 border-white/20">
            <div className="relative aspect-video">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <video
                    ref={el => videoRefs.current[index] = el}
                    src={video.src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex items-end p-6 sm:p-8 md:p-10">
                    <div className="w-full">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">{video.title}</h3>
                      <p className="text-white/90 text-lg sm:text-xl drop-shadow-md">{video.description}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button
              className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl hover:shadow-2xl z-20 hover:scale-110 border-2 border-white/50"
              onClick={prevSlide}
              aria-label="Previous video"
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-bold">‹</span>
            </button>
            <button
              className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl hover:shadow-2xl z-20 hover:scale-110 border-2 border-white/50"
              onClick={nextSlide}
              aria-label="Next video"
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-bold">›</span>
            </button>


          </div>
        </div>
      </div>
      
      {/* QUALITY SERVICE Section */}
      <div
        className="py-16 md:py-24 lg:py-32 text-white relative overflow-hidden"
        style={{
          backgroundImage: `url(${car2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-black/80 to-blue-800/90 backdrop-blur-sm"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-24 h-24 bg-blue-500/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 bg-blue-400/20 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-float delay-2000"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 sm:mb-8 px-8 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-white/90 text-sm sm:text-base font-medium tracking-wide">EXCELLENCE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-12 sm:mb-16 lg:mb-20 tracking-wider">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-300 drop-shadow-2xl">
              QUALITY SERVICE
            </span>
          </h2>
          
          {/* Service Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mt-12 sm:mt-16 md:mt-20">
            <div className="group relative bg-gradient-to-br from-blue-600/80 to-blue-800/80 p-8 sm:p-10 md:p-12 rounded-3xl backdrop-blur-md border border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faCar} className="text-2xl sm:text-3xl text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Professional Detailing</h3>
                </div>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed">Our certified technicians use only premium products and techniques to restore your vehicle's finish.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-blue-600/80 to-blue-800/80 p-8 sm:p-10 md:p-12 rounded-3xl backdrop-blur-md border border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faShield} className="text-2xl sm:text-3xl text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Paint Protection</h3>
                </div>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed">Advanced ceramic coatings and paint protection films to preserve your vehicle's exterior.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-blue-600/80 to-blue-800/80 p-8 sm:p-10 md:p-12 rounded-3xl backdrop-blur-md border border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faTrophy} className="text-2xl sm:text-3xl text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Premium Results</h3>
                </div>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed">See the difference with our award-winning detailing services that leave your vehicle looking showroom-new.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YOUR VEHICLE DESERVES THE BEST Section - Sparkle Cards */}
      <div
        className="py-16 md:py-24 lg:py-32 relative"
        style={{
          backgroundImage: `url(${car5})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/70 to-black/80 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-white/90 text-sm sm:text-base font-medium tracking-wide">PREMIUM QUALITY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 drop-shadow-2xl">
                YOUR VEHICLE DESERVES
              </span>
              <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 lg:w-48 h-1 sm:h-2 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 rounded-full shadow-xl shadow-blue-500/50"></div>
            </h2>
            <p className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 drop-shadow-2xl">
              THE BEST
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {renderSparkleCard(
              'card1',
              faShield,
              'Licensed & Insured',
              'We got it covered! Our company is fully licensed and insured with over 14 years experience in the service industry.'
            )}

            {renderSparkleCard(
              'card2',
              faUserCheck,
              'Professional Installation',
              'Our experienced detailing and installation team has the knowledge and ability to provide superior service on any make and model.'
            )}

            {renderSparkleCard(
              'card3',
              faCertificate,
              'Certified Experts',
              'All our installers have been extensively trained. We really believe in the quality of our work and our people.'
            )}

            {renderSparkleCard(
              'card4',
              faCheck,
              'Quality Guarantee',
              'We guarantee our customers the best installation services and manufacture warranty options in the industry.'
            )}
          </div>
        </div>
      </div>
{/* WHY CHOOSE ACTION CAR DETAILING Section - Flip Cards */}
      <div
        className="py-16 md:py-24 lg:py-32 relative"
        style={{
          backgroundImage: `url(${car6})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/70 to-black/80 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-white/90 text-sm sm:text-base font-medium tracking-wide">WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 drop-shadow-2xl">
                ACTION CAR DETAILING
              </span>
              <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 lg:w-48 h-1 sm:h-2 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 rounded-full shadow-xl shadow-blue-500/50"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {renderFlipCard(
              'card5',
              'Reputable Since 2011',
              faThumbsUp,
              'Reputable Since 2011',
              'Locally owned and operated serving Winnipeg with excellence for over a decade.'
            )}

            {renderFlipCard(
              'card6',
              'MPI Accredited',
              faTrophy,
              'MPI Accredited',
              'Only Auto Detailing shop in Winnipeg accredited by MPI.'
            )}

            {renderFlipCard(
              'card7',
              'Award Winning',
              (
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto shadow-2xl shadow-black/40 border border-white/30">
                  <img src={awardLogo} alt="Award" className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 object-contain" />
                </div>
              ),
              'Award Winning',
              'Winner of Consumer Choice Award 2025 in Auto Detailing Category.'
            )}

            {renderFlipCard(
              'card8',
              'Transparent Pricing',
              faTag,
              'Transparent Pricing',
              'Up front pricing with no hidden fees. One stop shop for all your auto detailing needs.'
            )}
          </div>
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal />

      {/* Custom Tailwind animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  );
};

export default Service;