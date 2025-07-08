import React from 'react';
import carImage from '../assets/images/car2.jpg';

const ActionCarAbout = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* About Us Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center justify-center">
            {/* Text Content - Left Side */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-3 sm:mb-4">About Us</h2>
                <div className="w-8 sm:w-10 md:w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mb-6 sm:mb-8"></div>
              </div>
              
              <div className="space-y-4 sm:space-y-6 text-blue-700 text-sm sm:text-base md:text-lg leading-relaxed">
                <p className="text-base sm:text-lg md:text-xl">
                  Our city has spoken! Consumer Choice Award announced us{' '}
                  <span className="relative inline-block">
                    <span className="text-blue-600 font-bold text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent shadow-lg">
                      #1 Auto Detailing Service
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"></span>
                  </span>{' '}
                  in Winnipeg.
                </p>
                
                <p className="text-sm sm:text-base md:text-lg">
                  We are a family-owned business that has been providing our city of 
                  Winnipeg with the finest quality auto detailing services since{' '}
                  <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded-md border-l-4 border-blue-400">
                    2011
                  </span>. 
                  We are truly passionate about our clients and level of quality they're 
                  receiving. We've spent over a decade mastering our craft to ensure that we 
                  are delivering a product we're proud to stand by!
                </p>
                
                <p className="text-sm sm:text-base md:text-lg">
                  Action car detailing is made up of a team of{' '}
                  <span className="font-bold text-blue-800 bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded-lg shadow-sm border border-blue-300">
                    experts
                  </span>{' '}
                  who can handle any size vehicles in any conditioned. We are dedicated to getting the job done right, 
                  there is no better place in Winnipeg to get your car detailed.{' '}
                  <span className="font-semibold text-blue-900 bg-blue-100 px-2 py-1 rounded-md border-l-4 border-blue-400 shadow-sm">
                    Quality products, quality work and quality service
                  </span>{' '}
                  is our promise.
                </p>
              </div>
            </div>

            {/* Image Content - Right Side */}
            <div className="relative mt-6 lg:mt-0">
              <img 
                src={carImage}
                alt="Professional car detailing - hand polishing car dashboard with blue polishing pad" 
                className="w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default ActionCarAbout;