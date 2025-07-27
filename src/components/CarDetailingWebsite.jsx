import React from 'react';
import { Star, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import googleIcon from '../assets/images/google png.png';


const CarDetailingWebsite = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-900 via-sky-800 to-sky-900 overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-sky-900/40"></div>
        
        {/* Hero Car Image */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full h-full">
          <img 
            src="https://actioncardetailing.ca/wp-content/uploads/2019/03/home-bannerx1920x700.jpg.webp" 
            alt="BMW Car" 
            className="w-full h-full object-cover object-center opacity-80"
          />
        </div>
        
         {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            AUTO DETAILING
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 font-light opacity-90 max-w-2xl mx-auto">
            Professional car detailing services that make your vehicle shine like new
          </p>
          <a 
            href="https://www.yocale.com/widget/action-car-detailing/offerings?gei=009eaMj_I7qdseMPjsjDiQc&hl=en-IN&index=0&locations=49895&merchant_id=B53547-L49895&rwg_token=ACgRB3eVv8FcyHcBwdjLyYYzxJndWpDdj5JwjbK0BM3Q95FVj7UlEJnsWUcag15NXETRnCinPLVndetSrXO4qeadV66Tuio0hQ%3D%3D&sort=alphabetically"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-sky-50 text-sky-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
          >
            Book Your Service
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-400 mb-6">
              About Action Car Detailing
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-sky-400 leading-relaxed">
                Action car detailing is made up of a team of experts who can handle any size vehicles in any condition. We are dedicated to getting the job done right, there is no better place in Winnipeg to get your car detailed. Quality products, quality work and quality service is our promise.
              </p>
              
              <p className="text-lg text-sky-400 leading-relaxed">
                We are passionate about cars that's why we take our time with each vehicle. Our chemical and allergy-free interior cleaning methods will leave your car's interior spotless and scentless- the way it should be.
              </p>
              
              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-600">
                <p className="text-lg text-sky-400 font-medium">
                  Action car Detailing offers a very thorough, deep cleaning of interior and exterior. We specialize in paint correction, ceramic coating and complete interior reconditioning. In Business for 14 years. Better Business Bureau accredited with an A+ rating. We are MPI accredited.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-sky-50 rounded-lg">
                <div className="text-3xl font-bold text-sky-400 mb-2">14+</div>
                <div className="text-sky-400">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-sky-50 rounded-lg">
                <div className="text-3xl font-bold text-sky-400 mb-2">A+</div>
                <div className="text-sky-400">BBB Rating</div>
              </div>
              <div className="text-center p-6 bg-sky-50 rounded-lg">
                <CheckCircle className="w-8 h-8 text-sky-400 mx-auto mb-2" />
                <div className="text-sky-400">MPI Accredited</div>
              </div>
              <div className="text-center p-6 bg-sky-50 rounded-lg">
                <Star className="w-8 h-8 text-sky-400 mx-auto mb-2" />
                <div className="text-sky-400">Premium Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-400 mb-6">
              OUR EXCLUSIVE 5-STEP SYSTEM
            </h2>
            <p className="text-sky-400 text-lg max-w-3xl mx-auto">
              Our proven process ensures your vehicle receives the most thorough cleaning possible
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-sky-600 text-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white text-sky-600 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  1
                </div>
                <h3 className="text-2xl font-bold">Step 1:</h3>
              </div>
              <p className="leading-relaxed">
                Our Forced Air Extractor thoroughly cleans between and under seats, inside the dash seams and venting ducts, and all other hard-to-reach areas.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-sky-600 text-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white text-sky-600 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  2
                </div>
                <h3 className="text-2xl font-bold">Step 2:</h3>
              </div>
              <p className="leading-relaxed">
                Turbo brush vacuuming removes deeply embedded sand, dirt, hair and animal dander.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-sky-600 text-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white text-sky-600 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  3
                </div>
                <h3 className="text-2xl font-bold">Step 3:</h3>
              </div>
              <p className="leading-relaxed">
                Dual action brushing and biodegradable shampoo loosens and emulsifies dirt, oils, and stubborn stains.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-sky-600 text-white p-8 rounded-xl shadow-lg md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white text-sky-600 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  4
                </div>
                <h3 className="text-2xl font-bold">Step 4:</h3>
              </div>
              <p className="leading-relaxed">
                Our exclusive Italian Dry Steam System™ lifts and removes any remaining residue, leaving your carpets and upholstery bright, soft, and dry.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-sky-600 text-white p-8 rounded-xl shadow-lg md:col-span-2 lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white text-sky-600 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  5
                </div>
                <h3 className="text-2xl font-bold">Step 5:</h3>
              </div>
              <p className="leading-relaxed">
                Final turbo brush vacuuming removes any remaining residue, leaving your interior perfectly clean and fresh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-400 mb-6">
              Our Services
            </h2>
            <p className="text-sky-400 text-lg max-w-3xl mx-auto">
              Comprehensive detailing services to keep your vehicle in pristine condition
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Interior Detailing",
                description: "Deep cleaning of seats, carpets, dashboard, and all interior surfaces",
                features: ["Steam cleaning", "Stain removal", "Odor elimination", "Leather conditioning"]
              },
              {
                title: "Exterior Detailing",
                description: "Complete exterior wash, polish, and protection services",
                features: ["Paint correction", "Ceramic coating", "Wax application", "Chrome polishing"]
              },
              {
                title: "Full Service Package",
                description: "Complete interior and exterior detailing for the ultimate clean",
                features: ["Interior deep clean", "Exterior polish", "Paint protection", "Quality guarantee"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-sky-600">
                <h3 className="text-2xl font-bold text-sky-400 mb-4">{service.title}</h3>
                <p className="text-sky-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sky-400">
                      <CheckCircle className="w-5 h-5 text-sky-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-400 mb-6">
              Read some of our Reviews
            </h2>
            
            {/* Google Reviews Badge */}
            <div className="inline-flex items-center justify-center bg-white border-2 border-sky-500 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <img 
                src={googleIcon} 
                alt="Google Reviews" 
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                review: "Absolutely amazing service! My car looks brand new. The attention to detail is incredible and the team is very professional."
              },
              {
                name: "Mike Chen",
                rating: 5,
                review: "Been using Action Car Detailing for 3 years now. Consistently excellent results every time. Highly recommend!"
              },
              {
                name: "Lisa Rodriguez",
                rating: 5,
                review: "The 5-step system really works. My interior was completely transformed. Worth every penny!"
              }
            ].map((review, index) => (
              <div key={index} className="bg-sky-50 p-8 rounded-xl border-l-4 border-sky-600">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-sky-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sky-400 mb-4 italic">"{review.review}"</p>
                <p className="font-semibold text-sky-400">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



    </div>
  );
};

export default CarDetailingWebsite;