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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const videoRefs = useRef([]);
  const intervalRef = useRef(null);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const modalRef = useRef(null);

  // Flip card state and modal state for small screens
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const cardModalRef = useRef(null);

  // Updated data arrays using imported assets
  const carImages = [car1, car2, car3, car4, car5];

  const videos = [
    { 
      src: carwashing1, 
      title: "Premium Detailing #1", 
      description: "Complete exterior detailing" 
    },
    { 
      src: carwashing2, 
      title: "Paint Correction", 
      description: "Professional polishing services" 
    },
    { 
      src: carwashing3, 
      title: "Interior Detailing", 
      description: "Deep cleaning and protection" 
    },
    { 
      src: carwashing4, 
      title: "Ceramic Coating", 
      description: "Long-lasting paint protection" 
    }
  ];
  
  // Professional service data
  const servicesData = {
    "Auto Detailing": {
      title: "Premium Auto Detailing",
      shortDescription: "Complete interior and exterior restoration services",
      icon: faCar,
      gradientFrom: "sky-400",
      gradientTo: "sky-600",
      hoverColor: "sky-600",
      fullDescription: "Our comprehensive auto detailing service combines advanced techniques with premium-grade products to restore your vehicle to showroom condition.",
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
      gradientFrom: "sky-300",
      gradientTo: "sky-500",
      hoverColor: "sky-600",
      fullDescription: "Our paint correction specialists use precision polishing techniques and professional-grade compounds to eliminate swirl marks, scratches, and oxidation.",
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
      gradientFrom: "sky-500",
      gradientTo: "sky-700",
      hoverColor: "sky-600",
      fullDescription: "Our window tinting service utilizes the highest quality ceramic films available, installed by certified technicians using precision cutting and application techniques.",
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
      icon: faShield,
      gradientFrom: "sky-400",
      gradientTo: "sky-600",
      hoverColor: "sky-600",
      fullDescription: "Our ceramic coating service provides the ultimate in paint protection and enhancement using industry-leading 9H ceramic technology.",
      features: [
        "9H hardness ceramic protection exceeding OEM paint durability",
        "5+ years of verified protection and performance",
        "Enhanced gloss and color depth for premium appearance",
        "Superior hydrophobic properties for easy maintenance",
        "Chemical and contaminant resistance",
        "UV damage prevention and color fade protection"
      ],
      image: wash1,
      price: "Starting at $599",
      guarantee: "5-year performance warranty with certified application"
    },
    "Paint Protection": {
      title: "Paint Protection Film",
      shortDescription: "Self-healing film installation with 10-year warranty",
      icon: faCheck,
      gradientFrom: "sky-300",
      gradientTo: "sky-500",
      hoverColor: "sky-600",
      fullDescription: "Our paint protection film installation provides the highest level of defense against road debris, stone chips, and environmental damage.",
      features: [
        "Self-healing technology repairs minor scratches automatically",
        "Superior impact and abrasion resistance",
        "Optically clear protection maintains original appearance",
        "Custom-cut templates ensure precise coverage and fitment",
        "UV and stain resistance for long-term clarity",
        "10-year manufacturer warranty with professional installation"
      ],
      image: wash2,
      price: "Starting at $899",
      guarantee: "10-year warranty covering film performance and installation"
    }
  };

  // Custom SVG Icons
  const MPIIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Shield background */}
      <path
        d="M50 10 L75 20 L75 45 Q75 65 50 85 Q25 65 25 45 L25 20 Z"
        fill="rgba(255,255,255,0.9)"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1"
      />
      {/* MPI letters */}
      <text
        x="50"
        y="38"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill="#0ea5e9"
        fontFamily="Arial, sans-serif"
      >
        MPI
      </text>
      {/* Checkmark */}
      <path
        d="M35 50 L45 58 L65 40"
        stroke="#10b981"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Decorative stars */}
      <circle cx="30" cy="30" r="1.5" fill="rgba(255,255,255,0.8)" />
      <circle cx="70" cy="30" r="1.5" fill="rgba(255,255,255,0.8)" />
      <circle cx="50" cy="70" r="1.5" fill="rgba(255,255,255,0.8)" />
    </svg>
  );

  const AwardIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Trophy base */}
      <rect x="42" y="70" width="16" height="8" fill="rgba(255,255,255,0.9)" rx="2" />
      <rect x="38" y="78" width="24" height="6" fill="rgba(255,255,255,0.9)" rx="3" />
      
      {/* Trophy cup */}
      <path
        d="M35 25 L65 25 Q70 25 70 30 L70 45 Q70 55 60 60 L60 70 L40 70 L40 60 Q30 55 30 45 L30 30 Q30 25 35 25 Z"
        fill="rgba(255,255,255,0.9)"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1"
      />
      
      {/* Trophy handles */}
      <path
        d="M25 35 Q20 35 20 40 Q20 45 25 45"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M75 35 Q80 35 80 40 Q80 45 75 45"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Award ribbon */}
      <path
        d="M42 25 L42 15 L46 18 L50 15 L54 18 L58 15 L58 25"
        fill="#fbbf24"
        stroke="#f59e0b"
        strokeWidth="0.5"
      />
      
      {/* Star in trophy */}
      <path
        d="M50 35 L52 41 L58 41 L53.5 45 L55.5 51 L50 47.5 L44.5 51 L46.5 45 L42 41 L48 41 Z"
        fill="#fbbf24"
      />
      
      {/* Sparkles */}
      <circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.8)" />
      <circle cx="75" cy="25" r="1" fill="rgba(255,255,255,0.8)" />
      <circle cx="20" cy="60" r="1.5" fill="rgba(255,255,255,0.8)" />
      <circle cx="80" cy="60" r="1.5" fill="rgba(255,255,255,0.8)" />
    </svg>
  );

  // Card data for Why Choose Us section
  const cardData = {
    'card5': {
      frontTitle: 'Reputable Since 2011',
      icon: faThumbsUp,
      backTitle: 'Reputable Since 2011',
      backContent: 'Locally owned and operated serving Winnipeg with excellence for over a decade. Our commitment to quality has made us the trusted choice for thousands of satisfied customers.',
      features: [
        'Over 14 years of experience',
        'Thousands of satisfied customers',
        'Locally owned and operated',
        'Established reputation in Winnipeg'
      ]
    },
    'card6': {
      frontTitle: 'MPI Accredited',
      icon: faTrophy,
      customSVG: MPIIcon, // Custom SVG for MPI
      backTitle: 'MPI Accredited',
      backContent: 'Only Auto Detailing shop in Winnipeg accredited by MPI. This exclusive accreditation demonstrates our commitment to meeting the highest industry standards.',
      features: [
        'Exclusive MPI accreditation',
        'Meets highest industry standards',
        'Recognized quality and reliability',
        'Insurance approved services'
      ]
    },
    'card7': {
      frontTitle: 'Award Winning',
      icon: faStar, // Keep as fallback
      customSVG: AwardIcon, // Custom SVG for Award
      backTitle: 'Award Winning',
      backContent: 'Winner of Consumer Choice Award 2025 in Auto Detailing Category. This prestigious award recognizes our outstanding service and customer satisfaction.',
      features: [
        'Consumer Choice Award 2025 winner',
        'Outstanding customer satisfaction',
        'Industry recognition',
        'Proven track record of excellence'
      ]
    },
    'card8': {
      frontTitle: 'Transparent Pricing',
      icon: faTag,
      backTitle: 'Transparent Pricing',
      backContent: 'Up front pricing with no hidden fees. One stop shop for all your auto detailing needs. We believe in honest, straightforward pricing you can trust.',
      features: [
        'No hidden fees or surprises',
        'Upfront transparent pricing',
        'Complete service packages',
        'One-stop shop convenience'
      ]
    }
  };

  // Section Divider Component
  const SectionDivider = () => (
    <div className="relative py-8 sm:py-12 md:py-16">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-white px-4 sm:px-6">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse delay-150"></div>
            <div className="w-2 h-2 bg-sky-600 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </div>
  );

  // Screen size state
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and device type on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      // iPad Pro (up to 1366px) and smaller should use modals
      // Large desktop screens (1600px+) should use flip cards
      const width = window.innerWidth;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      console.log('Screen width detected:', width);
      setIsMobile(width < 1600);
      setIsMobileDevice(isMobile || width < 768);
      console.log('isMobile set to:', width < 1600, '(true = modal, false = flip)');
      console.log('isMobileDevice set to:', isMobile || width < 768);
    };

    // Check on mount
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Flip card handler - Proper logic for desktop vs mobile/tablet
  const handleFlipCard = (cardId) => {
    console.log('=== FLIP CARD HANDLER ===');
    console.log('Card ID:', cardId);
    console.log('Screen width:', window.innerWidth);
    console.log('isMobile state:', isMobile);
    
    // Mobile/tablet devices (including iPad Pro) use modals
    // Large desktop screens use flip cards
    if (isMobile) {
      console.log('Opening modal for mobile/tablet device');
      const cardInfo = cardData[cardId];
      console.log('Card data found:', !!cardInfo);
      
      if (cardInfo) {
        console.log('Opening modal for card:', cardInfo.frontTitle);
        
        // Use a small delay to ensure the click event is fully processed
        setTimeout(() => {
          setSelectedCard(cardInfo);
          setIsCardModalOpen(true);
          document.body.style.overflow = 'hidden';
          console.log('Modal state updated - isOpen: true');
        }, 50);
      } else {
        console.error('No card data found for:', cardId);
      }
    } else {
      console.log('Using flip behavior for large desktop');
      // Original flip behavior for large desktop screens
      setFlippedCards(prev => {
        const newSet = new Set(prev);
        if (newSet.has(cardId)) {
          newSet.delete(cardId);
        } else {
          newSet.add(cardId);
        }
        console.log('Flip state updated for card:', cardId);
        return newSet;
      });
    }
  };

  // Card modal handlers
  const closeCardModal = () => {
    console.log('Closing card modal...');
    setIsCardModalOpen(false);
    setSelectedCard(null);
    document.body.style.overflow = 'auto';
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
  
  // Service modal handlers
  const openModal = (serviceName) => {
    setSelectedService(servicesData[serviceName]);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close if clicking the backdrop, not the modal content
      if (modalRef.current && !modalRef.current.contains(event.target) && event.target.classList.contains('modal-backdrop')) {
        closeModal();
      }
      if (cardModalRef.current && !cardModalRef.current.contains(event.target) && event.target.classList.contains('card-modal-backdrop')) {
        closeCardModal();
      }
    };
    
    if (isModalOpen || isCardModalOpen) {
      // Use a slight delay to prevent immediate closing
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
      }, 100);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isModalOpen, isCardModalOpen]);
  
  // Close modals with escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        if (isCardModalOpen) closeCardModal();
        if (isModalOpen) closeModal();
      }
    };
    
    if (isModalOpen || isCardModalOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen, isCardModalOpen]);

  // Listen for window resize to handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      // Close card modal if screen becomes large
      if (!isMobile && isCardModalOpen) {
        closeCardModal();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, isCardModalOpen]);

  // Effects - Optimized video management
  useEffect(() => {
    // Longer interval for mobile devices to reduce performance strain
    const interval = isMobileDevice ? 10000 : 8000;
    
    intervalRef.current = setInterval(() => {
      if (isPlaying) {
        nextSlide();
      }
    }, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, nextSlide, isMobileDevice]);

  // Optimized video loading and playback
  useEffect(() => {
    const playCurrentVideo = async () => {
      try {
        // Pause all videos first
        videoRefs.current.forEach((video, index) => {
          if (video && index !== currentSlide) {
            video.pause();
            video.currentTime = 0; // Reset to beginning
          }
        });

        // Play current video with mobile optimization
        const currentVideo = videoRefs.current[currentSlide];
        if (currentVideo) {
          // For mobile devices, ensure video is ready before playing
          if (isMobileDevice) {
            currentVideo.load(); // Reload video for mobile
            await new Promise(resolve => {
              currentVideo.addEventListener('loadeddata', resolve, { once: true });
              setTimeout(resolve, 2000); // Fallback timeout
            });
          }
          
          // Attempt to play with error handling
          try {
            await currentVideo.play();
            setIsVideoLoaded(true);
          } catch (playError) {
            console.log("Video play failed, retrying:", playError);
            // Retry once after a short delay
            setTimeout(async () => {
              try {
                await currentVideo.play();
              } catch (retryError) {
                console.log("Video play retry failed:", retryError);
              }
            }, 500);
          }
        }
      } catch (error) {
        console.log("Video management error:", error);
      }
    };

    playCurrentVideo();
  }, [currentSlide, isMobileDevice]);

  // Render helpers
  const renderServiceCard = (icon, title, description, customIcon = null) => (
    <div 
      className="group cursor-pointer bg-gradient-to-br from-sky-50 via-sky-100 to-sky-50 backdrop-blur-lg rounded-2xl shadow-xl shadow-sky-300/30 hover:shadow-2xl hover:shadow-sky-500/30 transition-all duration-500 p-6 sm:p-8 text-center transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden border border-sky-200/50" 
      onClick={() => openModal(title)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-sky-400/10 to-sky-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="absolute top-4 right-4 w-2 h-2 bg-sky-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
      <div className="absolute bottom-8 left-6 w-1 h-1 bg-sky-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700"></div>
      <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-sky-600 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-xl shadow-sky-500/30 group-hover:shadow-2xl group-hover:shadow-sky-500/40 transform group-hover:rotate-12 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Show imported images for Ceramic Coating and Paint Protection */}
            {title === "Ceramic Coating" ? (
              <img 
                src={wash1} 
                alt="Ceramic Coating" 
                className="w-16 h-16 sm:w-18 sm:h-18 object-contain z-10 relative group-hover:scale-110 transition-transform duration-300"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            ) : title === "Paint Protection" ? (
              <img 
                src={wash2} 
                alt="Paint Protection" 
                className="w-16 h-16 sm:w-18 sm:h-18 object-contain z-10 relative group-hover:scale-110 transition-transform duration-300"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            ) : customIcon ? (
              customIcon
            ) : (
              <FontAwesomeIcon icon={icon} className="text-white text-2xl sm:text-3xl z-10 relative group-hover:scale-110 transition-transform duration-300" />
            )}
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 text-sky-800 group-hover:text-sky-600 transition-colors duration-300">{title}</h3>
          <p className="text-sm sm:text-base text-sky-600 mb-4 leading-relaxed">{description}</p>
          <div className="flex items-center justify-center text-sky-500 hover:text-sky-600 transition-colors group-hover:scale-110 group-hover:font-semibold">
            <span className="text-sm sm:text-base mr-2">View Details</span>
            <FontAwesomeIcon icon={faArrowRight} className="transform group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSparkleCard = (id, icon, title, description) => (
    <div className="group min-h-[16rem] sm:min-h-[18rem] md:min-h-[20rem] lg:min-h-[24rem] xl:min-h-[26rem] relative perspective-1000">
      <div className="relative w-full h-full transform-gpu transition-all duration-700 group-hover:rotate-y-12 group-hover:-translate-y-2 sm:group-hover:-translate-y-4 group-hover:scale-105">
        <div className="absolute w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-sky-900/50 group-hover:shadow-3xl group-hover:shadow-sky-500/50">
          <div className="w-full h-full bg-gradient-to-br from-sky-600 via-sky-700 to-sky-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/30 via-transparent to-sky-600/30 animate-pulse"></div>
            
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full opacity-60 group-hover:opacity-100 animate-bounce transition-opacity duration-300 delay-100"></div>
            <div className="absolute bottom-4 left-3 sm:bottom-8 sm:left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sky-300/80 rounded-full opacity-50 group-hover:opacity-100 animate-bounce transition-opacity duration-300 delay-300"></div>
            <div className="absolute top-1/3 right-4 sm:right-8 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-sky-200/80 rounded-full opacity-40 group-hover:opacity-100 animate-bounce transition-opacity duration-300 delay-500"></div>
            <div className="absolute bottom-1/3 left-2 sm:left-4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/70 rounded-full opacity-50 group-hover:opacity-100 animate-bounce transition-opacity duration-300 delay-700"></div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>
            
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-white/30 sm:border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-3 xs:p-4 sm:p-6 md:p-8 z-10">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2 xs:mb-3 sm:mb-4 md:mb-6 shadow-xl shadow-black/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border border-white/30">
                <FontAwesomeIcon icon={icon} className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white group-hover:scale-110 transition-transform duration-700" />
              </div>
              
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 xs:mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-500 text-center drop-shadow-lg leading-tight px-1">{title}</h3>
              
              <p className="text-xs xs:text-sm sm:text-base text-white/90 text-center max-w-xs px-1 xs:px-2 md:px-4 leading-relaxed group-hover:opacity-100 transition-all duration-500 drop-shadow-md">{description}</p>
              
              <div className="mt-2 xs:mt-3 sm:mt-4 md:mt-6 scale-0 group-hover:scale-100 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <span className="inline-block px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm border border-white/30 shadow-lg">
                  Premium Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Complete Flip Card Component with proper front/back sides
  const renderFlipCard = (id, frontTitle, iconOrComponent, backTitle, backContent) => {
    const isFlipped = flippedCards.has(id);
    const icon = typeof iconOrComponent === 'object' && !React.isValidElement(iconOrComponent) ? iconOrComponent : faThumbsUp;
    
    return (
      <div 
        className="min-h-[16rem] sm:min-h-[18rem] md:min-h-[20rem] lg:min-h-[24rem] xl:min-h-[26rem] group relative cursor-pointer touch-manipulation" 
        style={{ perspective: '1000px' }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('Card clicked:', id, 'Event target:', e.target);
          handleFlipCard(id);
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('Card touched:', id, 'isMobile:', isMobile);
          handleFlipCard(id);
        }}
      >
        <div 
          className={`relative w-full h-full transition-transform duration-700 transform-gpu ${isFlipped ? 'mobile-flip-card-flipped' : ''} ${!isMobile ? 'group-hover:rotate-y-180' : ''}`} 
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front Side */}
          <div 
            className="absolute w-full h-full rounded-xl sm:rounded-2xl shadow-2xl shadow-sky-900/50 overflow-hidden mobile-flip-card-front" 
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="w-full h-full bg-gradient-to-br from-sky-500 via-sky-600 to-sky-700 relative mirror-card">
              {/* Mirror effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out skew-x-12 mirror-shine"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-70"></div>
              <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mirror-reflection"></div>
              <div className="absolute bottom-0 right-0 w-1/4 h-2/3 bg-gradient-to-l from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></div>
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-500"></div>
              
              {/* Main Content - Properly Centered */}
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 text-center z-10">
                {/* Top Corner Decoration */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border border-white/30 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/30 rounded-full animate-pulse"></div>
                </div>
                
                {/* Icon Circle */}
                <div className="mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-xl shadow-black/30 border border-white/30 group-hover:scale-110 transition-all duration-300">
                    {/* Check if this card has a custom SVG */}
                    {cardData[id]?.customSVG ? (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                        {React.createElement(cardData[id].customSVG)}
                      </div>
                    ) : frontTitle === 'Award Winning' ? (
                      <img 
                        src={awardLogo} 
                        alt="Award" 
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                        onError={(e) => {
                          console.log('Award logo failed to load, using fallback');
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                    ) : null}
                    {/* Fallback icon for award card if image fails */}
                    {frontTitle === 'Award Winning' && !cardData[id]?.customSVG ? (
                      <FontAwesomeIcon 
                        icon={faStar} 
                        className="text-2xl sm:text-3xl md:text-4xl text-white" 
                        style={{display: 'none'}}
                      />
                    ) : !cardData[id]?.customSVG ? (
                      <FontAwesomeIcon icon={icon} className="text-2xl sm:text-3xl md:text-4xl text-white" />
                    ) : null}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg leading-tight px-2 text-center">
                  {frontTitle}
                </h3>
                
                {/* Call to Action */}
                <div className="flex items-center text-white/80 text-sm sm:text-base group-hover:text-white transition-all duration-300">
                  <span className="mr-2 font-medium">
                    {isMobile ? 'Tap' : 'Hover'} for details
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Back Side - Show on large desktop screens */}
          <div 
            className={`${isMobile ? 'hidden' : 'hidden lg:block'} absolute w-full h-full rounded-xl sm:rounded-2xl shadow-2xl shadow-sky-900/50 overflow-hidden mobile-flip-card-back`} 
            style={{ 
              backfaceVisibility: 'hidden', 
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-sky-600 via-sky-700 to-sky-800 p-4 xs:p-5 sm:p-6 md:p-8 relative overflow-hidden mirror-card">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out skew-x-12 mirror-shine delay-300"></div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-70"></div>
              
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-500"></div>
              
              <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-white/10 rounded-full -translate-y-10 sm:-translate-y-16 translate-x-10 sm:translate-x-16 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-sky-400/20 rounded-full translate-y-8 sm:translate-y-12 -translate-x-8 sm:-translate-x-12 animate-pulse delay-300"></div>
              
              <div className="flex flex-col h-full justify-center items-center text-center relative z-10">
                <div className="mb-3 xs:mb-4 sm:mb-6 md:mb-8">
                  <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto shadow-2xl shadow-black/40 border border-white/30 mirror-element">
                    {/* Use custom SVG for back side too */}
                    {cardData[id]?.customSVG ? (
                      <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20">
                        {React.createElement(cardData[id].customSVG)}
                      </div>
                    ) : backTitle === 'Award Winning' ? (
                      <img 
                        src={awardLogo} 
                        alt="Award" 
                        className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 object-contain"
                        style={{filter: 'brightness(0) invert(1)'}}
                      />
                    ) : (
                      <FontAwesomeIcon icon={icon} className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white" />
                    )}
                  </div>
                </div>
                
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 xs:mb-3 sm:mb-4 drop-shadow-lg leading-tight px-1">{backTitle}</h3>
                
                <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white/90 max-w-xs leading-relaxed drop-shadow-md px-1">{backContent}</p>
                
                <div className="mt-3 xs:mt-4 sm:mt-6 md:mt-8 w-8 sm:w-12 md:w-16 lg:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-white/50 to-white/20 rounded-full shadow-lg"></div>
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
          <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
            {/* Use a clean white background for Ceramic Coating and Paint Protection */}
            {selectedService.title === "Ceramic Paint Coating" ? (
              <div className="w-full h-full bg-white flex items-center justify-center">
                <img 
                  src={wash1} 
                  alt="Ceramic Coating" 
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
                />
              </div>
            ) : selectedService.title === "Paint Protection Film" ? (
              <div className="w-full h-full bg-white flex items-center justify-center">
                <img 
                  src={wash2} 
                  alt="Paint Protection" 
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
                />
              </div>
            ) : (
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover object-center"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 border border-white/30 shadow-lg hover:scale-110"
              aria-label="Close modal"
            >
              <FontAwesomeIcon icon={faTimes} className="text-white text-lg sm:text-xl" />
            </button>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">{selectedService.title}</h2>
              <p className="text-base sm:text-lg opacity-90 drop-shadow-md">{selectedService.shortDescription}</p>
            </div>
          </div>
          
          <div className="p-6 sm:p-8 max-h-64 sm:max-h-80 md:max-h-96 overflow-y-auto">
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">{selectedService.fullDescription}</p>
            
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full mr-3"></div>
              Features
            </h3>
            <ul className="mb-6 sm:mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {selectedService.features.map((feature, index) => (
                <li key={index} className="flex items-start p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <FontAwesomeIcon icon={faCheck} className="text-sky-500 mt-1 mr-3 text-lg flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-gradient-to-r from-sky-50 to-sky-100 p-4 sm:p-6 rounded-2xl mb-6 sm:mb-8 border border-sky-200">
              <div className="flex justify-between items-center">
                <span className="text-base sm:text-lg text-gray-700 font-semibold">Starting Price</span>
                <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-800">{selectedService.price}</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-gray-100 flex justify-between items-center">
            <button 
              onClick={closeModal} 
              className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-gray-300 rounded-xl text-base sm:text-lg text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 font-medium"
            >
              Close
            </button>
            <button className="px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-base sm:text-lg text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-semibold">
              Book Service
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Card Modal Component for small screens
  const CardModal = () => {
    console.log('CardModal render - isCardModalOpen:', isCardModalOpen, 'selectedCard:', selectedCard);
    
    if (!isCardModalOpen || !selectedCard) return null;
    
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
         style={{ display: isMobile ? 'flex' : 'none' }}>
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md"></div>
        
        <div 
          ref={cardModalRef}
          className="relative bg-gradient-to-br from-sky-600 via-sky-700 to-sky-800 rounded-2xl shadow-3xl max-w-sm w-full mx-auto overflow-hidden transform transition-all duration-500 opacity-100 scale-100 border-2 border-white/20"
          style={{maxHeight: '85vh'}}
          onClick={(e) => {
            // Prevent modal from closing when clicking inside the modal content
            e.stopPropagation();
          }}
        >
          {/* Header with close button */}
          <div className="relative p-6 text-center border-b border-white/20">
            <button 
              onClick={closeCardModal} 
              className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 border border-white/30 shadow-lg"
              aria-label="Close modal"
            >
              <FontAwesomeIcon icon={faTimes} className="text-white text-sm" />
            </button>
            
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-4 shadow-xl shadow-black/40 border border-white/30">
              {/* Use custom SVG for modal icons */}
              {selectedCard.customSVG ? (
                <div className="w-8 h-8">
                  {React.createElement(selectedCard.customSVG)}
                </div>
              ) : selectedCard.frontTitle === 'Award Winning' ? (
                <img 
                  src={awardLogo} 
                  alt="Award" 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    console.log('Modal award logo failed to load');
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
              ) : null}
              {selectedCard.frontTitle === 'Award Winning' && !selectedCard.customSVG ? (
                <FontAwesomeIcon 
                  icon={faStar} 
                  className="text-2xl text-white" 
                  style={{display: 'none'}}
                />
              ) : !selectedCard.customSVG ? (
                <FontAwesomeIcon icon={selectedCard.icon} className="text-2xl text-white" />
              ) : null}
            </div>
            
            <h2 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{selectedCard.backTitle}</h2>
          </div>
          
          {/* Content */}
          <div className="p-6 overflow-y-auto" style={{maxHeight: '60vh'}}>
            <p className="text-white/90 text-base leading-relaxed mb-6 drop-shadow-md">
              {selectedCard.backContent}
            </p>
            
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <div className="w-4 h-4 bg-white/30 rounded-full mr-3"></div>
              Key Benefits
            </h3>
            
            <ul className="space-y-3">
              {selectedCard.features.map((feature, index) => (
                <li key={index} className="flex items-start p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <FontAwesomeIcon icon={faCheck} className="text-white mt-1 mr-3 text-sm flex-shrink-0" />
                  <span className="text-white/90 text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-center">
                <div className="w-12 h-0.5 bg-gradient-to-r from-white/50 to-white/20 rounded-full mx-auto mb-3"></div>
                <span className="text-white/80 text-sm font-medium">
                  Trusted by thousands of customers
                </span>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="border-t border-white/20 p-4 bg-white/5">
            <button 
              onClick={closeCardModal}
              className="w-full py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl transition-all duration-300 font-semibold backdrop-blur-sm border border-white/30"
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* CHOOSE YOUR SERVICE Section */}
      <div className="py-12 md:py-20 lg:py-28 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <div className="inline-block mb-4 px-6 py-2 bg-sky-100/60 backdrop-blur-md rounded-full border border-sky-200/50">
              <span className="text-sky-800 text-sm sm:text-base font-medium tracking-wide">PREMIUM SERVICES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 drop-shadow-2xl">
                CHOOSE YOUR SERVICE
              </span>
              <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 lg:w-48 h-1 sm:h-2 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-full shadow-xl shadow-sky-500/50"></div>
            </h2>
            <p className="text-xl sm:text-2xl text-sky-700 max-w-3xl mx-auto leading-relaxed">
              Transform your vehicle with our premium detailing services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {renderServiceCard(faCar, "Auto Detailing", "Complete interior and exterior detailing services")}
            {renderServiceCard(faSprayCan, "Paint Correction", "Professional polishing services")}
            {renderServiceCard(faWindowMaximize, "Window Tinting", "Premium tinting solutions")}
            {renderServiceCard(faShield, "Ceramic Coating", "Long-lasting protection")}
            {renderServiceCard(faCheck, "Paint Protection", "Film installation")}
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <SectionDivider />

      {/* FREE PAINT EVALUATION Banner */}
      <div className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute top-10 left-10 w-20 h-20 bg-sky-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-sky-400/20 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-500"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 sm:mb-8 px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full backdrop-blur-md border border-gray-200 shadow-xl">
            <span className="text-base sm:text-lg font-bold tracking-wider text-sky-600">LIMITED TIME OFFER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-6 sm:mb-8 lg:mb-10">
            <span className="block text-sky-700 drop-shadow-2xl">FREE PAINT EVALUATION</span>
            <span className="block text-sky-600 drop-shadow-2xl">
              & ESTIMATE
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-sky-700 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Professional assessment of your vehicle's paint condition - absolutely free!
          </p>
          <button className="group relative px-10 py-4 sm:px-12 sm:py-6 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 hover:from-sky-500 hover:via-sky-600 hover:to-sky-700 text-white text-lg sm:text-xl font-bold rounded-2xl transition-all duration-300 shadow-2xl shadow-sky-500/50 hover:shadow-3xl hover:shadow-sky-500/70 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10">Claim Your Free Evaluation</span>
          </button>
        </div>
      </div>

      {/* Section Divider */}
      <SectionDivider />

      {/* PERFECT SOLUTIONS FOR ALL VEHICLES Section */}
      <div className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <div className="inline-block mb-4 px-6 py-2 bg-gray-100 backdrop-blur-md rounded-full border border-gray-200">
              <span className="text-gray-700 text-sm sm:text-base font-medium tracking-wide">SHOWCASE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 drop-shadow-2xl">
                PERFECT SOLUTIONS
              </span>
              <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 lg:w-48 h-1 sm:h-2 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-full shadow-xl shadow-sky-500/50"></div>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              FOR ALL VEHICLES
            </p>
          </div>

          {/* Video Slider - Mobile Optimized */}
          <div className="relative max-w-6xl mx-auto rounded-3xl shadow-3xl shadow-black/50 overflow-hidden border-4 border-white/20">
            <div className="relative aspect-video bg-black">
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
                    preload={index === 0 ? "auto" : isMobileDevice ? "none" : "metadata"}
                    poster={index === currentSlide ? undefined : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E"}
                    onLoadedData={() => {
                      if (index === currentSlide) {
                        setIsVideoLoaded(true);
                      }
                    }}
                    onError={(e) => {
                      console.log(`Video ${index} error:`, e);
                    }}
                    onWaiting={() => {
                      console.log(`Video ${index} buffering...`);
                    }}
                    onCanPlay={() => {
                      if (index === currentSlide) {
                        console.log(`Video ${index} can play`);
                      }
                    }}
                    style={{
                      willChange: 'transform',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)', // Force GPU acceleration
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex items-end justify-center p-4 sm:p-6 md:p-8 lg:p-10">
                    <div className="w-full text-center">
                      <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-sky-400 mb-1 sm:mb-2 drop-shadow-lg leading-tight">
                        {video.title}
                      </h3>
                      <p className="text-sky-300/90 text-sm sm:text-lg md:text-xl drop-shadow-md leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Loading indicator for mobile */}
                  {isMobileDevice && !isVideoLoaded && index === currentSlide && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
                      <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Video indicators - Mobile friendly */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {videos.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <SectionDivider />
      
      {/* QUALITY SERVICE Section */}
      <div className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-white">
        <div className="absolute top-20 left-20 w-24 h-24 bg-sky-500/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 bg-sky-400/20 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-float delay-2000"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 sm:mb-8 px-8 py-3 bg-gray-100 backdrop-blur-md rounded-full border border-gray-200">
            <span className="text-gray-700 text-sm sm:text-base font-medium tracking-wide">EXCELLENCE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-12 sm:mb-16 lg:mb-20 tracking-wider">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 drop-shadow-2xl">
              QUALITY SERVICE
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mt-12 sm:mt-16 md:mt-20">
            <div className="group relative bg-gradient-to-br from-sky-600/80 to-sky-800/80 p-8 sm:p-10 md:p-12 rounded-3xl backdrop-blur-md border border-sky-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

            <div className="group relative bg-gradient-to-br from-sky-600/80 to-sky-800/80 p-8 sm:p-10 md:p-12 rounded-3xl backdrop-blur-md border border-sky-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

            <div className="group relative bg-gradient-to-br from-sky-600/80 to-sky-800/80 p-8 sm:p-10 md:p-12 rounded-3xl backdrop-blur-md border border-sky-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

      {/* Section Divider */}
      <SectionDivider />

      {/* YOUR VEHICLE DESERVES THE BEST Section - Sparkle Cards */}
      <div className="py-16 md:py-24 lg:py-32 relative bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <div className="inline-block mb-4 px-6 py-2 bg-gray-100 backdrop-blur-md rounded-full border border-gray-200">
              <span className="text-gray-700 text-sm sm:text-base font-medium tracking-wide">PREMIUM QUALITY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 drop-shadow-2xl">
                YOUR VEHICLE DESERVES
              </span>
              <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 lg:w-48 h-1 sm:h-2 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-full shadow-xl shadow-sky-500/50"></div>
            </h2>
            <p className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 drop-shadow-2xl">
              THE BEST
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {renderSparkleCard('card1', faShield, 'Licensed & Insured', 'We got it covered! Our company is fully licensed and insured with over 14 years experience in the service industry.')}
            {renderSparkleCard('card2', faUserCheck, 'Professional Installation', 'Our experienced detailing and installation team has the knowledge and ability to provide superior service on any make and model.')}
            {renderSparkleCard('card3', faCertificate, 'Certified Experts', 'All our installers have been extensively trained. We really believe in the quality of our work and our people.')}
            {renderSparkleCard('card4', faCheck, 'Quality Guarantee', 'We guarantee our customers the best installation services and manufacture warranty options in the industry.')}
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <SectionDivider />

      {/* WHY CHOOSE ACTION CAR DETAILING Section - Enhanced Flip Cards with Modal Support */}
      <div className="py-16 md:py-24 lg:py-32 relative bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <div className="inline-block mb-4 px-6 py-2 bg-gray-100 backdrop-blur-md rounded-full border border-gray-200">
              <span className="text-gray-700 text-sm sm:text-base font-medium tracking-wide">WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 drop-shadow-2xl">
                ACTION CAR DETAILING
              </span>
              <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 lg:w-48 h-1 sm:h-2 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-full shadow-xl shadow-sky-500/50"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {renderFlipCard('card5', 'Reputable Since 2011', faThumbsUp, 'Reputable Since 2011', 'Locally owned and operated serving Winnipeg with excellence for over a decade.')}
            {renderFlipCard('card6', 'MPI Accredited', faTrophy, 'MPI Accredited', 'Only Auto Detailing shop in Winnipeg accredited by MPI.')}
            {renderFlipCard('card7', 'Award Winning', faStar, 'Award Winning', 'Winner of Consumer Choice Award 2025 in Auto Detailing Category.')}
            {renderFlipCard('card8', 'Transparent Pricing', faTag, 'Transparent Pricing', 'Up front pricing with no hidden fees. One stop shop for all your auto detailing needs.')}
          </div>
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal />

      {/* Card Modal for Small Screens */}
      <CardModal />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes mirrorShine {
          0% { transform: translateX(-100%) skewX(12deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%) skewX(12deg); opacity: 0; }
        }
        
        @keyframes mirrorReflection {
          0% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.1); }
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

        /* Mirror Effect Styles */
        .mirror-card {
          position: relative;
          overflow: hidden;
        }
        
        .mirror-shine {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transform: translateX(-100%) skewX(12deg);
          transition: transform 1.5s ease-in-out;
        }
        
        .group:hover .mirror-shine {
          transform: translateX(200%) skewX(12deg);
        }
        
        .mirror-reflection {
          position: absolute;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
          opacity: 0;
          transition: all 0.7s ease-in-out;
        }
        
        .group:hover .mirror-reflection {
          opacity: 1;
          animation: mirrorReflection 2s ease-in-out;
        }
        
        .mirror-element {
          position: relative;
          overflow: hidden;
        }
        
        .mirror-element::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
          transition: left 1s ease-in-out;
          z-index: 10;
        }
        
        .group:hover .mirror-element::before {
          left: 100%;
        }
        
        /* Enhanced mirror chrome effect */
        .mirror-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, 
            rgba(255,255,255,0.1) 0%, 
            transparent 25%, 
            transparent 50%, 
            rgba(255,255,255,0.05) 75%, 
            transparent 100%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }
        
        .group:hover .mirror-card::after {
          opacity: 1;
        }

        /* Mobile flip card fixes */
        .mobile-flip-card-flipped {
          transform: rotateY(180deg) !important;
        }
        
        .mobile-flip-card-front {
          transform: rotateY(0deg);
        }
        
        .mobile-flip-card-back {
          transform: rotateY(180deg);
        }
        
        .mobile-flip-card-back-flipped {
          transform: rotateY(0deg) !important;
        }
        
        /* Ensure proper 3D transforms on mobile */
        @media (max-width: 640px) {
          .group [style*="transform-style: preserve-3d"] {
            transform-style: preserve-3d !important;
          }
          
          /* Disable hover flip effects on mobile */
          .group:hover [class*="rotate-y-180"] {
            transform: none;
          }
          
          /* Force mobile flip behavior to not show */
          .mobile-flip-card-flipped [class*="mobile-flip-card-front"] {
            transform: rotateY(-180deg) !important;
          }
          
          .mobile-flip-card-flipped [class*="mobile-flip-card-back"] {
            transform: rotateY(0deg) !important;
          }
          
          /* Improve touch targets */
          .cursor-pointer.touch-manipulation {
            -webkit-tap-highlight-color: transparent;
            tap-highlight-color: transparent;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            user-select: none;
          }
          
          /* Mirror effects work on mobile touch */
          .mirror-shine {
            animation-duration: 2s;
          }
          
          /* Modal optimization for mobile */
          .fixed.inset-0.z-50 {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 9999;
          }
          
          /* Enhanced modal backdrop for mobile */
          .fixed.inset-0.z-50 > .absolute.inset-0 {
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
          }
          
          /* Smooth modal animations */
          .relative.bg-gradient-to-br {
            animation: modalSlideIn 0.3s ease-out;
          }
          
          @keyframes modalSlideIn {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        }

        /* iPad specific responsive breakpoints */
        @media (min-width: 768px) and (max-width: 1024px) {
          /* Fix grid layout for iPad */
          .grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.5rem;
          }
          
          /* Ensure proper card sizing on iPad */
          .min-h-\\[16rem\\].sm\\:min-h-\\[18rem\\].md\\:min-h-\\[20rem\\].lg\\:min-h-\\[24rem\\].xl\\:min-h-\\[26rem\\] {
            min-height: 22rem !important;
          }
          
          /* Fix flip card content layout for iPad */
          .relative.w-full.h-full.flex.flex-col.items-center.justify-center {
            padding: 1.5rem !important;
          }
          
          /* Icon sizing for iPad */
          .w-16.h-16.sm\\:w-20.sm\\:h-20.md\\:w-24.md\\:h-24 {
            width: 5rem !important;
            height: 5rem !important;
          }
          
          /* Text sizing for iPad */
          .text-base.sm\\:text-lg.md\\:text-xl.lg\\:text-2xl {
            font-size: 1.25rem !important;
            line-height: 1.4 !important;
          }
          
          /* Call to action text for iPad */
          .text-white\\/80.text-sm.sm\\:text-base {
            font-size: 0.9rem !important;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          .grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4 {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 1rem;
          }
          
          .min-h-\\[16rem\\].sm\\:min-h-\\[18rem\\].md\\:min-h-\\[20rem\\].lg\\:min-h-\\[24rem\\].xl\\:min-h-\\[26rem\\] {
            min-height: 18rem !important;
          }
        }

        /* iPad specific fixes for Quality Service section */
        @media (min-width: 768px) and (max-width: 1024px) {
          .grid.grid-cols-1.md\\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1.5rem;
          }
          
          .group.relative.bg-gradient-to-br.from-sky-600\\/80.to-sky-800\\/80 {
            padding: 1.5rem;
            min-height: 280px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          
          .group.relative.bg-gradient-to-br.from-sky-600\\/80.to-sky-800\\/80 h3 {
            font-size: 1.25rem;
            line-height: 1.4;
            margin-bottom: 0.75rem;
          }
          
          .group.relative.bg-gradient-to-br.from-sky-600\\/80.to-sky-800\\/80 p {
            font-size: 0.9rem;
            line-height: 1.5;
          }
          
          .group.relative.bg-gradient-to-br.from-sky-600\\/80.to-sky-800\\/80 .w-16.h-16.sm\\:w-20.sm\\:h-20,
          .group.relative.bg-gradient-to-br.from-sky-600\\/80.to-sky-800\\/80 .w-20.h-20 {
            width: 3.5rem;
            height: 3.5rem;
            margin-bottom: 1rem;
          }
          
          .group.relative.bg-gradient-to-br.from-sky-600\\/80.to-sky-800\\/80 .text-2xl.sm\\:text-3xl {
            font-size: 1.5rem;
          }
          
          /* Fix sparkle cards for iPad */
          .group.min-h-\\[16rem\\].sm\\:min-h-\\[18rem\\].md\\:min-h-\\[20rem\\].lg\\:min-h-\\[24rem\\].xl\\:min-h-\\[26rem\\] {
            min-height: 20rem !important;
          }
          
          /* Fix sparkle card icons */
          .w-12.h-12.xs\\:w-14.xs\\:h-14.sm\\:w-16.sm\\:h-16.md\\:w-20.md\\:h-20.lg\\:w-24.lg\\:h-24 {
            width: 4rem !important;
            height: 4rem !important;
          }
          
          /* Fix sparkle card text */
          .text-sm.xs\\:text-base.sm\\:text-lg.md\\:text-xl.lg\\:text-2xl {
            font-size: 1.125rem !important;
          }
          
          .text-xs.xs\\:text-sm.sm\\:text-base {
            font-size: 0.875rem !important;
          }
        }
        
        /* Portrait iPad specific adjustments */
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
          /* Force 2-column layout for flip cards in portrait */
          .grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1.5rem !important;
          }
          
          /* Adjust quality service cards for portrait iPad */
          .grid.grid-cols-1.md\\:grid-cols-3 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.5rem;
          }
          
          .group.relative.bg-gradient-to-br.from-sky-600\\/80.to-sky-800\\/80 {
            min-height: 300px;
            padding: 1.75rem;
          }
          
          /* Ensure flip cards have proper height in portrait */
          .min-h-\\[16rem\\].sm\\:min-h-\\[18rem\\].md\\:min-h-\\[20rem\\].lg\\:min-h-\\[24rem\\].xl\\:min-h-\\[26rem\\] {
            min-height: 24rem !important;
          }
          
          /* Sparkle cards adjustments for portrait iPad */
          .group.min-h-\\[16rem\\].sm\\:min-h-\\[18rem\\].md\\:min-h-\\[20rem\\].lg\\:min-h-\\[24rem\\].xl\\:min-h-\\[26rem\\] {
            min-height: 22rem !important;
          }
        }

        /* Mobile and tablet behavior (including iPad Pro) */
        @media (max-width: 1599px) {
          /* This covers phones, iPads, iPad Pros, and most desktop screens */
          
          /* Ensure cards have proper minimum height */
          .min-h-\\[16rem\\] {
            min-height: 18rem !important;
          }
          
          /* Better touch feedback */
          .cursor-pointer.touch-manipulation:active {
            transform: scale(0.98);
            transition: transform 0.1s ease;
          }
          
          /* Improve touch targets */
          .cursor-pointer.touch-manipulation {
            -webkit-tap-highlight-color: transparent;
            tap-highlight-color: transparent;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            user-select: none;
          }
          
          /* Responsive grid layout */
          .grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1.5rem !important;
          }
          
          /* iPad Pro specific - larger screen gets 3 columns */
          @media (min-width: 1024px) and (max-width: 1599px) {
            .grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4 {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
              gap: 2rem !important;
            }
            
            .min-h-\\[16rem\\].sm\\:min-h-\\[18rem\\].md\\:min-h-\\[20rem\\].lg\\:min-h-\\[24rem\\].xl\\:min-h-\\[26rem\\] {
              min-height: 20rem !important;
            }
          }
          
          /* Modal optimization */
          .fixed.inset-0.z-50 {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            z-index: 9999 !important;
            display: flex !important;
          }
          
          /* Enhanced modal backdrop */
          .card-modal-backdrop {
            backdrop-filter: blur(8px) !important;
            -webkit-backdrop-filter: blur(8px) !important;
          }
        }
        
        /* Large desktop behavior - flip cards */
        @media (min-width: 1600px) {
          /* Enable flip animations for large desktop screens */
          .group:hover .rotate-y-180 {
            transform: rotateY(180deg);
          }
          
          /* Ensure back side is visible on large screens */
          .mobile-flip-card-back {
            display: block !important;
          }
          
          /* Grid layout for large desktop */
          .grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4 {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
            gap: 2rem !important;
          }
        }

        /* High-performance mirror effects */
        .mirror-card,
        .mirror-element,
        .mirror-shine,
        .mirror-reflection {
          will-change: transform, opacity;
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .mirror-shine,
          .mirror-reflection,
          .mirror-element::before {
            animation: none !important;
            transition: none !important;
          }
          
          .mobile-flip-card-flipped,
          .group:hover [class*="rotate"],
          .group:hover [class*="scale"],
          .group:hover [class*="translate"] {
            transition: none !important;
            animation: none !important;
          }
        }

        /* Enhanced accessibility */
        .cursor-pointer:focus-visible {
          outline: 2px solid #0ea5e9;
          outline-offset: 2px;
          border-radius: 0.5rem;
        }
        
        /* Better contrast for text readability */
        .text-white\\/90 {
          color: rgba(255, 255, 255, 0.95);
        }
        
        /* Improved button states */
        button:focus-visible {
          outline: 2px solid #0ea5e9;
          outline-offset: 2px;
        }
        
        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        /* Smooth transitions for better UX */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Optimized for touch devices */
        @media (hover: none) and (pointer: coarse) {
          .group:hover .mirror-shine {
            transform: translateX(200%) skewX(12deg);
          }
          
          .cursor-pointer.touch-manipulation {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </>
  );
};

export default Service;