import React, { useEffect, useRef } from 'react';
import carwashVideo from '../assets/images/carwash.mp4';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Optimized single video handling
    const video = videoRef.current;
    
    if (video) {
      // Essential settings only
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
      
      // Minimal preload for faster start
      video.preload = 'none';
      
      // Device-specific object-fit adjustments
      const adjustVideoFit = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // Mobile screens (below 768px)
        if (width < 768) {
          video.style.objectFit = 'fill';
          video.style.objectPosition = 'center center';
          video.style.height = '100vh';
          video.style.width = '100vw';
        }
        // iPad Mini: 768x1024, iPad Air: 820x1180, iPad Pro: 1024x1366
        else if (width >= 768 && width <= 1024 && width !== 1024) {
          // iPad Mini and Air
          video.style.objectFit = 'fill';
          video.style.objectPosition = 'center center';
        } else if (width >= 1024) {
          // iPad Pro - use fill for better fitting
          video.style.objectFit = 'fill';
          video.style.objectPosition = 'center center';
          video.style.height = '100vh';
          video.style.width = '100vw';
        }
      };
      
      // Apply initial adjustments
      adjustVideoFit();
      
      // Reapply on orientation change
      window.addEventListener('resize', adjustVideoFit);
      window.addEventListener('orientationchange', adjustVideoFit);
      
      // Simple autoplay with minimal error handling
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          // Single fallback attempt
          document.addEventListener('click', () => video.play().catch(() => {}), { once: true });
        }
      };
      
      // Start playing immediately
      playVideo();
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', adjustVideoFit);
        window.removeEventListener('orientationchange', adjustVideoFit);
      };
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-snow">
      {/* Video background - single optimized video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-fill object-center sm:object-cover md:object-fill lg:object-fill xl:object-fill"
          src={carwashVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster=""
          controls={false}
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            objectPosition: window.innerWidth >= 768 && window.innerWidth <= 1024 ? 'center top' : 'center center'
          }}
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
