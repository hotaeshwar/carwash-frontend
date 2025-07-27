import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Charles Morgan",
      review: "Great personal service! Phenomenal job! Exceeded all expectations! I would highly recommend Action Car Detailing!",
      rating: 5
    },
    {
      id: 2,
      name: "Nav Boparai",
      review: "Awesome service. Quality service. Experienced staff. Meet my expectations 👌",
      rating: 5
    },
    {
      id: 3,
      name: "Thiané Diop",
      review: "Very accommodating to my time restrictions and did a spotless job. The car looks fantastic inside and out!",
      rating: 5
    },
    {
      id: 4,
      name: "Michael Singson",
      review: "Great work. Everything was done as promised. Very accommodating and great customer relationship. Kudos to Bal and his staff! :)",
      rating: 5
    },
    {
      id: 5,
      name: "Dana Coulson",
      review: "Went above and beyond my expectations. Did an amazing job and very reasonably priced!! Great customer service as well, would highly recommend bringing your vehicle here!",
      rating: 5
    },
    {
      id: 6,
      name: "Chee Tan",
      review: "Highly recommended for anyone. Staff is extremely polite and courteous. Takes pride and their work and prices are reasonable. Can't go wrong with a clean and detailed car... and fast service too!",
      rating: 5
    },
    {
      id: 7,
      name: "Adam Kennedy",
      review: "My car is absolutely spotless and well worth the cost. The owner/employee is very pleasant. Would highly recommend this business especially in comparison to other establishments, definitely going back!",
      rating: 5
    },
    {
      id: 8,
      name: "Sarah Johnson",
      review: "Exceptional service and prices are very affordable as compared to others. Had my carpets and Engine shampooed in past as well but with Action Car detailing it looks like brand new. Owner and employees are very kind and friendly. Highly recommend this place.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-all duration-300 ${
          index < rating ? 'text-yellow-400 drop-shadow-sm' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen bg-white py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-sky-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 -left-8 w-16 h-16 sm:w-24 sm:h-24 lg:w-36 lg:h-36 bg-sky-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-sky-300 rounded-full opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Header Section */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-sky-400 mb-2 sm:mb-3 md:mb-4 tracking-tight">
              Customer{' '}
              <span className="relative inline-block">
                <span className="text-sky-500 animate-pulse drop-shadow-lg">
                  Testimonials
                </span>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-sky-400 rounded-full animate-pulse"></div>
              </span>
            </h1>
          </div>
          
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 h-1 sm:h-1.5 bg-sky-400 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full shadow-lg"></div>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-sky-400 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-medium">
            Don't just take our word for it - here's what our{' '}
            <span className="relative inline-block">
              <span className="font-bold text-sky-500">
                satisfied customers
              </span>
              <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-sky-400 rounded-full"></div>
            </span>{' '}
            have to say about our{' '}
            <span className="font-bold text-sky-500">
              premium auto detailing services
            </span>{' '}
            in{' '}
            <span className="font-semibold text-sky-600 bg-sky-100 px-2 py-1 rounded-md border-l-4 border-sky-400">
              Winnipeg
            </span>.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="group bg-sky-100 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-3 sm:p-4 md:p-6 border border-sky-200 hover:border-sky-300 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Gradient Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200/50 to-sky-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
              
              {/* Quote Icon */}
              <div className="flex justify-center mb-2 sm:mb-3 md:mb-4 relative z-10">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <svg 
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-sky-400 drop-shadow-sm" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-sky-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-6 text-center italic font-medium relative z-10 group-hover:text-sky-700 transition-colors duration-300">
                "{testimonial.review}"
              </p>

              {/* Rating Stars */}
              <div className="flex justify-center mb-2 sm:mb-3 md:mb-4 relative z-10">
                <div className="flex space-x-0.5 sm:space-x-1 p-2 rounded-full bg-white/70 group-hover:bg-white/90 transition-colors duration-300">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Customer Name */}
              <div className="text-center relative z-10">
                <h3 className="font-bold text-sky-600 text-xs sm:text-sm md:text-base lg:text-lg mb-1 group-hover:text-sky-700 transition-colors duration-300">
                  {testimonial.name}
                </h3>
                <div className="inline-block">
                  <p className="text-sky-500 text-xs sm:text-sm md:text-base font-semibold bg-white/70 px-2 sm:px-3 py-1 rounded-full border border-sky-300 group-hover:bg-white/90 group-hover:border-sky-400 transition-all duration-300">
                    ✓ Verified Customer
                  </p>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-2 right-2 w-3 h-3 sm:w-4 sm:h-4 bg-sky-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400 rounded-3xl sm:rounded-4xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 tracking-tight">
                Ready to Join Our{' '}
                <span className="text-sky-100 drop-shadow-lg animate-pulse">
                  Happy Customers?
                </span>
              </h2>
              
              <p className="text-sky-100 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-medium">
                Experience the same{' '}
                <span className="text-white font-bold">exceptional service</span>{' '}
                that earned us the{' '}
                <span className="text-white font-bold bg-sky-500/20 px-2 py-1 rounded-lg">#1 auto detailing ranking</span>{' '}
                in Winnipeg.
              </p>
              
              <a
                href="https://www.yocale.com/widget/action-car-detailing/offerings?locations=49895&merchant_id=B53547-L49895&hl=en-IN&gei=bb5jaL7_LtOd4-EPm92LGA&rwg_token=ACgRB3e_quEjKK8t0y_Ggd6qwYnkGej9E-7a_d-G--123rywkA0vYtqJjUBxBcnfS2y3ds_1bpra263IwsoUkmyj1KyMIVBI3g%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-sky-500 font-black py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg lg:text-xl hover:bg-sky-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 border-2 border-white/20 hover:border-sky-300 inline-block"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Book Your Service Today</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;