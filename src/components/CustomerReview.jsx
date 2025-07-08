import React, { useState } from 'react';
import { Star, MessageCircle } from 'lucide-react';
import car4 from '../assets/images/car4.jpg';

const CustomerReview = () => {
  const [visibleReviews, setVisibleReviews] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);

  const reviews = [
    {
      date: 'May 3, 2025',
      name: 'Serge Martel',
      text: 'Did a great job',
      rating: 5
    },
    {
      date: 'May 3, 2025',
      name: 'Thomas Knight',
      text: 'Well I was warmly greeted by Bal and he took care of my needs. Did a fabulous job on my Golf R. I so impressed with the detailing of my car and wheels and the tint looks fabulous. I am so thankful for his attention to all the details.',
      rating: 5
    },
    {
      date: 'Apr 25, 2025',
      name: 'Yurii NikFear',
      text: 'Perfect service, no any problem',
      rating: 5
    },
    {
      date: 'Apr 24, 2025',
      name: 'k c',
      text: 'First time using them and they did an amazing job. Looked brand new in the inside that I feel bad stepping inside of it haha. They did everything within the timeframe they gave as well as made sure that the things we left in the car, are all in a bag. They also uninstalled and cleaned out our infant seat attachment. Will definately go back again. Thank you!',
      rating: 5
    },
    {
      date: 'Apr 21, 2025',
      name: 'Nhan',
      text: 'The service was great, my car came out of clean',
      rating: 5
    },
    {
      date: 'Apr 12, 2025',
      name: 'parveen kaur',
      text: 'It was great experience at Action car detailing, I gave them my car for one day for ceramic coating and after it looks so clean and shiny… they did really good job .',
      rating: 5
    },
    {
      date: 'Apr 11, 2025',
      name: 'Michel Henri',
      text: 'The place to get your car looking and smelling new to you! Fast, friendly, professional service. 5 star Clean.',
      rating: 5
    },
    {
      date: 'Apr 11, 2025',
      name: 'Walter Ajogbor',
      text: 'Go see Babir, he is very friendly. Great customer service, and they do a great job.',
      rating: 5
    },
    {
      date: 'Apr 6, 2025',
      name: 'Kevin Michel',
      text: '10 years of daily use. After one trip to Action car detailing and the interior looks and feels new. Thank you',
      rating: 5
    },
    {
      date: 'Apr 5, 2025',
      name: 'Jeffery',
      text: 'After watching countless videos of ceramic coating on YouTube, I was a bit skeptical on where to go. So I trusted everyone else\'s reviews and picked action, the price was right very polite and my car is coated perfectly. I actually waited a few weeks for our Winnipeg weather to hit it and see how it washes off. Seeing the beads of water beat off, that\'s what you can call it,, makes you feel good..... A year later... went there for a ceramic coating warranty check and touch-up. Car came out looking like a shiny diamond. Great work!',
      rating: 5
    }
  ];

  const toggleReviews = () => {
    if (isExpanded) {
      setVisibleReviews(6);
      setIsExpanded(false);
    } else {
      setVisibleReviews(reviews.length);
      setIsExpanded(true);
    }
  };

  return (
    <section 
      id="customer-reviews" 
      className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      {/* Blurred background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${car4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'blur(15px)',
          transform: 'scale(1.1)'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-white">
          Customer Reviews
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {reviews.slice(0, visibleReviews).map((review, index) => (
            <div 
              key={index} 
              className="backdrop-blur-sm bg-white/30 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-white font-medium">{review.date}</span>
                </div>
                
                <div className="mb-3 sm:mb-4">
                  <span className="font-bold text-white text-sm sm:text-base block mb-1 sm:mb-2">
                    {review.name}
                  </span>
                  <p className="text-white text-xs sm:text-sm backdrop-blur-md bg-black/20 p-2 sm:p-3 rounded line-clamp-4 sm:line-clamp-5 md:line-clamp-none">
                    {review.text}
                  </p>
                </div>
                
                <div className="flex items-center text-white text-xs sm:text-sm">
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span>Verified Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {reviews.length > 6 && (
          <div className="text-center mt-6 sm:mt-8">
            <button 
              onClick={toggleReviews}
              className="bg-blue-600 text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
            >
              {isExpanded ? 'Show Less Reviews' : 'Load More Reviews'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomerReview;