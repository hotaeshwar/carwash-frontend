import React, { useEffect, useRef } from 'react';
import carwashVideo from '../assets/images/carwash.mp4';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Enhanced mobile video optimization - target all video elements
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
      if (video) {
        // Mobile-specific optimizations
        if (window.innerWidth < 768) {
          video.setAttribute('playsinline', 'true');
          video.setAttribute('webkit-playsinline', 'true');
          video.muted = true;
          video.defaultMuted = true;
          video.volume = 0;
        }
        
        // Play with error handling
        video.play().catch(error => {
          console.warn("Autoplay blocked:", error.message);
          // Fallback: try playing again after user interaction
          document.addEventListener('touchstart', () => {
            video.play().catch(e => console.warn("Manual play failed:", e));
          }, { once: true });
        });
        
        // Optimize video quality and performance
        video.playbackRate = 1.0;
        if (video.style) {
          video.style.filter = 'none';
        }
      }
    });
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-snow">
      {/* Video background - mobile-first responsive approach */}
      <div className="absolute inset-0 z-0">
        {/* Mobile video (below md breakpoint) */}
        <video
          ref={videoRef}
          className="block md:hidden absolute top-0 left-0 w-full h-full object-fill"
          src={carwashVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          webkit-playsinline="true"
          poster=""
          controls={false}
          defaultMuted={true}
        />
        
        {/* Desktop/Tablet video (md breakpoint and above) */}
        <video
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover object-center"
          src={carwashVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          webkit-playsinline="true"
          poster=""
          controls={false}
          defaultMuted={true}
        />
      </div>

      {/* Responsive gradient overlay - height adjusts with screen size */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 sm:h-1/3 md:h-1/3 lg:h-1/3 bg-gradient-to-t from-black/40 to-transparent z-10" />

      {/* Responsive scroll indicator - position and size adjust with screen */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center">
          <span className="text-white text-xs sm:text-sm md:text-base mb-1 sm:mb-2 tracking-widest font-medium drop-shadow-md">SCROLL</span>
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-sky-500/40 animate-pulse"></div>
            <div className="animate-bounce bg-sky-600/90 p-1.5 sm:p-2 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;