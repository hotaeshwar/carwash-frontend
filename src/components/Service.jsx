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
  
  // Service data with more detailed information for modals
  const servicesData = {
    "Auto Detailing": {
      title: "Auto Detailing",
      shortDescription: "Complete interior and exterior detailing services",
      icon: faCar,
      gradientFrom: "teal-400",
      gradientTo: "blue-500",
      hoverColor: "teal-600",
      fullDescription: "Our comprehensive auto detailing service includes deep cleaning of both interior and exterior surfaces. We use premium products and professional techniques to restore your vehicle to showroom condition.",
      features: [
        "Exterior hand wash and dry",
        "Clay bar treatment to remove contaminants",
        "Interior vacuum and deep cleaning",
        "Leather conditioning and treatment",
        "Dashboard and trim restoration",
        "Tire and wheel detailing"
      ],
      image: car1,
      price: "Starting at $199"
    },
    "Paint Correction": {
      title: "Paint Correction",
      shortDescription: "Professional polishing services",
      icon: faSprayCan,
      gradientFrom: "orange-400",
      gradientTo: "pink-500",
      hoverColor: "orange-600",
      fullDescription: "Our paint correction service removes swirl marks, scratches, and oxidation to restore your vehicle's finish to a mirror-like shine. We use multi-stage polishing techniques and professional-grade compounds.",
      features: [
        "Paint depth analysis",
        "Machine polishing with multiple stages",
        "Swirl mark and scratch removal",
        "Oxidation treatment",
        "High-gloss finish restoration",
        "Final protective sealant"
      ],
      image: car3,
      price: "Starting at $299"
    },
    "Window Tinting": {
      title: "Window Tinting",
      shortDescription: "Premium tinting solutions",
      icon: faWindowMaximize,
      gradientFrom: "purple-400",
      gradientTo: "indigo-500",
      hoverColor: "purple-600",
      fullDescription: "Our window tinting service uses premium ceramic films that reduce heat, block UV rays, and enhance privacy. All installations are performed by certified technicians for a perfect, bubble-free finish.",
      features: [
        "High-quality ceramic film options",
        "UV ray blocking (99%)",
        "Heat rejection up to 80%",
        "Glare reduction",
        "Lifetime warranty",
        "Computer-cut precision fitting"
      ],
      image: car4,
      price: "Starting at $249"
    },
    "Ceramic Coating": {
      title: "Ceramic Coating",
      shortDescription: "Long-lasting protection",
      customIcon: wash1,
      gradientFrom: "amber-400",
      gradientTo: "red-500",
      hoverColor: "amber-600",
      fullDescription: "Our ceramic coating service provides long-lasting protection against environmental contaminants, UV damage, and water spots. The hydrophobic properties make maintenance easier while enhancing gloss and depth.",
      features: [
        "9H hardness ceramic protection",
        "5+ years of durability",
        "Enhanced gloss and color depth",
        "Superior hydrophobic properties",
        "Chemical resistance",
        "UV damage prevention"
      ],
      image: car2,
      price: "Starting at $599"
    },
    "Paint Protection": {
      title: "Paint Protection",
      shortDescription: "Film installation",
      customIcon: wash2,
      gradientFrom: "emerald-400",
      gradientTo: "cyan-500",
      hoverColor: "emerald-600",
      fullDescription: "Our paint protection film (PPF) installation provides the ultimate defense against rock chips, scratches, and road debris. Our self-healing film maintains clarity while providing invisible armor for your vehicle.",
      features: [
        "Self-healing technology",
        "Impact and scratch resistance",
        "Invisible protection",
        "Custom cut for perfect fit",
        "UV and stain resistance",
        "10-year warranty"
      ],
      image: car5,
      price: "Starting at $899"
    }
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
      className="cursor-pointer bg-white/90 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center" 
      onClick={() => openModal(title)}
    >
      <div className="mb-4 flex justify-center">
        <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
          {customIcon || <FontAwesomeIcon icon={icon} className="text-white text-2xl" />}
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-3 text-teal-500 hover:text-teal-600 transition-colors">
          <span className="text-sm">View Details →</span>
        </div>
      </div>
    </div>
  );

  // Sparkle Card Component for "YOUR VEHICLE DESERVES THE BEST" section
  const renderSparkleCard = (id, icon, title, description) => (
    <div className="sparkle-card h-64 sm:h-72 md:h-80 lg:h-96 group relative">
      <div className="sparkle-card-inner absolute w-full h-full">
        {/* Card Content */}
        <div className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg">
          {/* Background with gradient overlay */}
          <div className="w-full h-full bg-gradient-to-br from-blue-600/90 to-teal-500/90 relative overflow-hidden">
            {/* Sparkle elements */}
            <div className="sparkle sparkle-1"></div>
            <div className="sparkle sparkle-2"></div>
            <div className="sparkle sparkle-3"></div>
            <div className="sparkle sparkle-4"></div>
            <div className="sparkle sparkle-5"></div>
            
            {/* Shine effect */}
            <div className="card-shine"></div>
            
            {/* Glow border */}
            <div className="card-glow-border"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 z-10">
              <div className="icon-wrapper h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-white/20 flex items-center justify-center mb-3 sm:mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                <FontAwesomeIcon icon={icon} className="text-xl sm:text-2xl text-white group-hover:scale-110 transition-transform duration-700" />
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:scale-105 transition-transform duration-500">{title}</h3>
              
              <p className="text-xs sm:text-sm text-white/90 text-center max-w-xs px-2 md:px-4 group-hover:opacity-100 transition-all duration-500">{description}</p>
              
              <div className="mt-3 md:mt-4 scale-0 group-hover:scale-100 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 bg-white/20 rounded-full text-white text-xs backdrop-blur-sm">
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
      <div className="flip-card h-64 sm:h-72 md:h-80 lg:h-96 group relative perspective-1000">
        <div className="flip-card-inner relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
          {/* Front Side */}
          <div className="flip-card-front absolute w-full h-full backface-hidden bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${blogBanner})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-teal-500/80 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">{frontTitle}</h3>
                <div className="flex items-center text-white text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2">Flip to learn more</span>
                  <FontAwesomeIcon icon={faArrowRight} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Back Side */}
          <div className="flip-card-back absolute w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden rotate-y-180">
            <div className="w-full h-full bg-gradient-to-br from-teal-600 to-blue-700 p-4 sm:p-6 md:p-8">
              <div className="flex flex-col h-full justify-center items-center text-center">
                <div className="mb-3 sm:mb-4 md:mb-6">
                  {backIconComponent || (
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm mx-auto">
                      <FontAwesomeIcon icon={backIcon} className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white" />
                    </div>
                  )}
                </div>
                
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">{backTitle}</h3>
                
                <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-xs">{backContent}</p>
                
                <div className="mt-3 sm:mt-4 md:mt-6 w-8 sm:w-10 md:w-12 h-0.5 bg-white/30 rounded-full"></div>
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
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        
        <div 
          ref={modalRef}
          className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-auto overflow-hidden transform transition-all duration-500 opacity-100 scale-100"
          style={{maxHeight: '90vh'}}
        >
          {/* Modal header with image */}
          <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
            <img 
              src={selectedService.image} 
              alt={selectedService.title} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            
            {/* Close button */}
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
              aria-label="Close modal"
            >
              <FontAwesomeIcon icon={faTimes} className="text-white text-sm sm:text-base" />
            </button>
            
            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{selectedService.title}</h2>
              <p className="mt-1 text-sm sm:text-base opacity-90">{selectedService.shortDescription}</p>
            </div>
          </div>
          
          {/* Modal content */}
          <div className="p-4 sm:p-6 max-h-64 sm:max-h-80 md:max-h-96 overflow-y-auto">
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">{selectedService.fullDescription}</p>
            
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Features</h3>
            <ul className="mb-4 sm:mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedService.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className="text-teal-500 mt-1 mr-2 text-sm sm:text-base" />
                  <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base text-gray-700 font-medium">Price</span>
                <span className="text-lg sm:text-xl font-bold text-gray-800">{selectedService.price}</span>
              </div>
            </div>
          </div>
          
          {/* Modal footer */}
          <div className="border-t border-gray-200 p-3 sm:p-4 bg-gray-50 flex justify-between items-center">
            <button 
              onClick={closeModal} 
              className="px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-300 rounded-lg text-sm sm:text-base text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
            <button className="px-4 py-1.5 sm:px-6 sm:py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-sm sm:text-base text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
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
        className="py-8 md:py-12 lg:py-16 relative overflow-hidden"
        style={{
          backgroundImage: `url(${car6})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 relative">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
              CHOOSE YOUR SERVICE
            </span>
            <span className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 lg:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {renderServiceCard(faCar, "Auto Detailing", "Complete interior and exterior detailing services")}

            {renderServiceCard(faSprayCan, "Paint Correction", "Professional polishing services")}

            {renderServiceCard(faWindowMaximize, "Window Tinting", "Premium tinting solutions")}

            {renderServiceCard(null, "Ceramic Coating", "Long-lasting protection",
              <div className="flex items-center justify-center">
                <img src={wash1} alt="Ceramic Coating" className="w-8 h-8 object-contain" />
              </div>
            )}

            {renderServiceCard(null, "Paint Protection", "Film installation",
              <div className="flex items-center justify-center">
                <img src={wash2} alt="Paint Protection Film" className="w-8 h-8 object-contain" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FREE PAINT EVALUATION Banner */}
      <div
        className="relative py-8 md:py-12 lg:py-16 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${car2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-block mb-3 sm:mb-4 px-3 py-1 sm:px-4 sm:py-1 bg-white/20 rounded-full backdrop-blur-sm">
            <span className="text-xs sm:text-sm font-medium">CURRENT PROMOTION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-5 lg:mb-6">
            FREE PAINT EVALUATION AND ESTIMATE
          </h2>
          <button className="px-6 py-2 sm:px-8 sm:py-3 bg-white text-teal-700 text-sm sm:text-base font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md sm:shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 sm:hover:-translate-y-1">
            Claim Your Free Evaluation
          </button>
        </div>
      </div>

      {/* PERFECT SOLUTIONS FOR ALL VEHICLES Section - Added right after FREE PAINT EVALUATION */}
      <div className="py-8 md:py-12 lg:py-16 relative overflow-hidden"
           style={{
             backgroundImage: `url(${car6})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundAttachment: 'fixed'
           }}>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 relative">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              PERFECT SOLUTIONS FOR ALL VEHICLES
            </span>
            <span className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 lg:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></span>
          </h2>

          {/* Video Slider */}
          <div className="relative max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 sm:p-6 md:p-8">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{video.title}</h3>
                      <p className="text-white/80 text-sm sm:text-base">{video.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={handlePlayPause}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                    aria-label={isPlaying && currentSlide === index ? "Pause video" : "Play video"}
                  >
                    <span className="text-white text-xs">
                      {isPlaying && currentSlide === index ? 'PAUSE' : 'PLAY'}
                    </span>
                  </button>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-gray-800 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-md sm:shadow-lg z-20 hover:scale-105 sm:hover:scale-110"
              onClick={prevSlide}
              aria-label="Previous video"
            >
              &#10094;
            </button>
            <button
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-gray-800 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-md sm:shadow-lg z-20 hover:scale-105 sm:hover:scale-110"
              onClick={nextSlide}
              aria-label="Next video"
            >
              &#10095;
            </button>

            {/* Indicator dots */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-20">
              {videos.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-teal-500 w-4 sm:w-6' : 'bg-gray-300'
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* QUALITY SERVICE Section */}
      <div
        className="py-8 md:py-12 lg:py-16 text-white relative overflow-hidden"
        style={{
          backgroundImage: `url(${car2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 tracking-wider">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-200">
              QUALITY SERVICE
            </span>
          </h2>
          
          {/* Service Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16">
            <div className="bg-blue-600 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl backdrop-blur-sm border border-blue-400 transition-all duration-300 group relative">
              <div className="mb-2 sm:mb-3 md:mb-4">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">Professional Detailing</h3>
              </div>
              <p className="text-white text-xs sm:text-sm md:text-base">Our certified technicians use only premium products and techniques to restore your vehicle's finish.</p>
              <div className="absolute inset-0 bg-blue-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-xl">
                <span className="text-white font-bold text-lg">DETAILING SERVICE</span>
              </div>
            </div>

            <div className="bg-blue-600 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl backdrop-blur-sm border border-blue-400 transition-all duration-300 group relative">
              <div className="mb-2 sm:mb-3 md:mb-4">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">Paint Protection</h3>
              </div>
              <p className="text-white text-xs sm:text-sm md:text-base">Advanced ceramic coatings and paint protection films to preserve your vehicle's exterior.</p>
              <div className="absolute inset-0 bg-blue-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-xl">
                <span className="text-white font-bold text-lg">PROTECTION SERVICE</span>
              </div>
            </div>

            <div className="bg-blue-600 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl backdrop-blur-sm border border-blue-400 transition-all duration-300 group relative">
              <div className="mb-2 sm:mb-3 md:mb-4">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">Premium Results</h3>
              </div>
              <p className="text-white text-xs sm:text-sm md:text-base">See the difference with our award-winning detailing services that leave your vehicle looking showroom-new.</p>
              <div className="absolute inset-0 bg-blue-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-xl">
                <span className="text-white font-bold text-lg">PREMIUM SERVICE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YOUR VEHICLE DESERVES THE BEST Section - Sparkle Cards */}
      <div
        className="py-8 md:py-12 lg:py-16 relative"
        style={{
          backgroundImage: `url(${car5})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 relative">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              YOUR VEHICLE DESERVES THE BEST
            </span>
            <span className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 lg:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
        className="py-8 md:py-12 lg:py-16 relative"
        style={{
          backgroundImage: `url(${car6})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 relative">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              WHY CHOOSE ACTION CAR DETAILING
            </span>
            <span className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 lg:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm mx-auto">
                  <img src={awardLogo} alt="Award" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
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

      {/* Add custom styles */}
      <style jsx global>{`
        /* Modal animations */
        @keyframes modalFadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes modalFadeOut {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.95); }
        }
        
        /* Navbar styles for transparency when scrolled */
        .header-transparent {
          background-color: transparent;
          transition: background-color 0.3s ease;
        }
        
        .header-solid {
          background-color: rgba(0, 0, 0, 0.9);
          transition: background-color 0.3s ease;
        }
        
        /* Sparkle Card Animations */
        .sparkle-card {
          isolation: isolate;
        }
        
        .sparkle-card-inner {
          transition: transform 0.6s cubic-bezier(0.2, 0.85, 0.4, 1);
        }
        
        .sparkle-card:hover .sparkle-card-inner {
          transform: translateY(-8px) scale(1.02);
        }
        
        /* Card shine effect */
        .card-shine {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: translateX(-100%);
          transition: transform 1.5s ease;
          pointer-events: none;
          z-index: 2;
        }
        
        .sparkle-card:hover .card-shine {
          transform: translateX(100%);
        }
        
        /* Glow border */
        .card-glow-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          border-radius: inherit;
          border: 2px solid rgba(255, 255, 255, 0.5);
          transition: opacity 0.5s ease;
          z-index: 2;
        }
        
        .sparkle-card:hover .card-glow-border {
          opacity: 1;
        }
        
        /* Sparkle animations */
        .sparkle {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: white;
          opacity: 0;
          filter: blur(1px);
          z-index: 2;
          pointer-events: none;
          transform: scale(0);
        }
        
        @keyframes sparkleAnimation {
          0% { opacity: 0; transform: scale(0) translate(0, 0); }
          50% { opacity: 1; transform: scale(1) translate(var(--tx), var(--ty)); }
          100% { opacity: 0; transform: scale(0) translate(calc(var(--tx) * 2), calc(var(--ty) * 2)); }
        }
        
        .sparkle-card:hover .sparkle {
          animation: sparkleAnimation 1.5s ease-in-out infinite;
        }
        
        .sparkle-1 {
          --tx: 20px;
          --ty: -30px;
          top: 20%;
          left: 30%;
          animation-delay: 0.1s !important;
        }
        
        .sparkle-2 {
          --tx: -25px;
          --ty: -20px;
          top: 60%;
          left: 65%;
          width: 4px;
          height: 4px;
          animation-delay: 0.3s !important;
        }
        
        .sparkle-3 {
          --tx: 30px;
          --ty: 20px;
          top: 40%;
          left: 25%;
          width: 5px;
          height: 5px;
          animation-delay: 0.5s !important;
        }
        
        .sparkle-4 {
          --tx: -15px;
          --ty: 30px;
          top: 25%;
          left: 70%;
          width: 7px;
          height: 7px;
          animation-delay: 0.7s !important;
        }
        
        .sparkle-5 {
          --tx: 20px;
          --ty: -20px;
          top: 80%;
          left: 40%;
          width: 5px;
          height: 5px;
          animation-delay: 0.9s !important;
        }
        
        /* Adding a subtle background animation for the cards */
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .sparkle-card-inner > div {
          background-size: 200% 200%;
          animation: gradientShift 5s ease infinite;
        }
        
        /* Shadow effect */
        .sparkle-card::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -20px;
          height: 30px;
          background: radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 70%);
          border-radius: 50%;
          opacity: 0.5;
          transform: scaleX(0.7);
          filter: blur(5px);
          transition: transform 0.6s cubic-bezier(0.2, 0.85, 0.4, 1), opacity 0.6s ease;
          z-index: -1;
        }
        
        .sparkle-card:hover::after {
          transform: scaleX(0.85);
          opacity: 0.8;
        }
        
        /* Flip Card Styles */
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        /* Media queries for better mobile responsiveness */
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          h2 {
            font-size: 1.75rem;
          }
          
          .grid {
            gap: 1rem;
          }
        }
        
        /* Ensure videos are responsive on all devices */
        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        /* Improve tap targets on mobile */
        @media (max-width: 480px) {
          button {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </>
  );
};

export default Service;