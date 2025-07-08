import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Play, Shield, Star, Award, Clock, Zap } from 'lucide-react';

const PaintProtectionFilm = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [currentText, setCurrentText] = useState(0);

  const runningTexts = [
    "ROAD DEBRIS",
    "HIGHWAY SCRATCHES", 
    "ROCK CHIPS",
    "WEATHER DAMAGE"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % runningTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const packages = [
    {
      name: "BUMPER ONLY",
      price: "$599",
      serviceTime: "1 Day",
      features: [
        "Essential shield for maintaining the pristine condition of the most impact-prone portion of your vehicle",
        "Provides robust protection against impacts, scratches, and road debris",
        "Specifically designed for non-chrome bumpers",
        "Expertly installed, computer cut kits that wrap all leading edges",
        "10-year warranty against peeling, cracking, and yellowing"
      ]
    },
    {
      name: "ECONOMY KIT", 
      price: "$999",
      serviceTime: "1.5 Day",
      features: [
        "Full bumper",
        "Mirror caps",
        "24\" hood / fender tips",
        "Expertly installed, computer cut kits that wrap all leading edges",
        "10-year warranty against peeling, cracking, and yellowing"
      ]
    },
    {
      name: "FULL FRONT",
      price: "$1499", 
      serviceTime: "1.5 Day",
      features: [
        "Everything in the partial front",
        "Full hood / fender",
        "Pillars & Partial Roof",
        "Mirror and doors handles insert"
      ]
    },
    {
      name: "OFFSET TIRE PACKAGE",
      price: "$1999",
      serviceTime: "2 Days", 
      features: [
        "Everything in full front",
        "Rockers",
        "Lower doors"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Preserve Your Car's Resale Value",
      description: "Paint Protection Film will lock-in and enhance your paint's gloss and shine to keep your car looking new at all times."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Enhance Long Term Aesthetics", 
      description: "Scratches from years of driving and washing won't be an issue, scratches fade away once heat is applied."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Reduce Maintenance Costs",
      description: "Action car Detailing installs the world's number one paint protection film. This advanced PPF comes backed with a 10-year warranty."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Guard Against Rock Chips And Scratches",
      description: "Paint Protection Film is the highest level of paint protection and is the #1 recommended solution."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Peace Of Mind With Warranty",
      description: "Paint Protection Film comes with a fully transferable warranty to ensure the next owners peace of mind."
    }
  ];

  const faqData = [
    {
      question: "Preserve Car's Resale Value",
      answer: [
        "PPF prevents scratches and chips, maintaining your car's pristine condition.",
        "Potential buyers are willing to pay more for a well-preserved vehicle.",
        "Resale value can increase significantly, offsetting the cost of PPF.",
        "You avoid the depreciation associated with paint damage",
        "PPF adds to the appeal of your vehicle when you decide to sell or trade it."
      ]
    },
    {
      question: "Enhance Long-Term Aesthetics", 
      answer: [
        "PPF is nearly invisible, so it doesn't alter your car's original appearance.",
        "It shields your car's paint from UV rays, preventing fading and oxidation.",
        "Environmental factors like bird droppings and tree sap won't harm your paint.",
        "Your car will maintain a showroom shine for years to come.",
        "PPF ensures that your vehicle always looks brand new."
      ]
    },
    {
      question: "Reduce Maintenance Costs",
      answer: [
        "PPF eliminates the need for frequent waxing and polishing.",
        "Paint touch-ups and repairs become less necessary.",
        "You save money on detailing and cosmetic maintenance",
        "PPF simplifies the upkeep of your vehicle's exterior.",
        "Over time, the cost savings from reduced maintenance add up."
      ]
    },
    {
      question: "Guard Against Road Hazards",
      answer: [
        "PPF acts as a shield against rocks, gravel, and debris on the road.",
        "It prevents unsightly dings, dents, and paint chips.",
        "Insect impacts and road tar won't damage your paint.",
        "Your car's front end remains free from damage caused by road hazards.",
        "PPF provides proactive protection for high-impact areas."
      ]
    },
    {
      question: "Peace Of Mind With Warranty",
      answer: [
        "Our PPF installations come with 10-Year warranty for added security.",
        "You're covered in case of damage or defects in the film.",
        "Our warranty offer long-term protection.",
        "It provides peace of mind, knowing your investment is safeguarded.",
        "You can enjoy your new car without worrying about potential paint damage and repair costs."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/65 to-blue-700/60 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3)_0%,transparent_50%)] z-10"></div>
        <img 
          src="https://actioncardetailing.ca/wp-content/uploads/2024/06/ppf_banner.jpg" 
          alt="Paint Protection Film Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
            PAINT PROTECTION FILM
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-200">Say Goodbye To...</p>
          <div className="h-12 md:h-16 mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-300 animate-pulse">
              {runningTexts[currentText]}
            </h2>
          </div>
          <p className="text-lg md:text-xl mb-8 text-blue-200">Before It Ever Happens</p>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-blue-200 mx-auto rounded-full mb-8"></div>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Get A Free Quote
          </button>
        </div>
      </section>

      {/* PPF Specialist Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              PAINT PROTECTION FILM SPECIALIST
            </h2>
            <p className="text-blue-700 max-w-4xl mx-auto text-lg leading-relaxed">
              Below you will find our Paint Protection Film options, these packages are custom tailored to your vehicle needs. Our PPF installation comes with a 10 Year Manufacturer Warranty, self healing properties and installed by trained and experienced technicians.
            </p>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-900">
              WATCH VIDEO
            </h3>
            <div className="relative bg-blue-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe 
                  src="https://www.youtube.com/embed/hI4lW8uNRqY" 
                  title="XPEL ULTIMATE PLUS Paint Protection Film"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why PPF Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-blue-900">
            WHY PAINT PROTECTION FILM?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-b from-blue-600 to-blue-700 p-6 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300 shadow-xl text-white">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peace of Mind Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-8">
              Enjoy Peace of Mind and Protect Your Investment
            </h2>
            <p className="text-blue-700 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
              PPF or "Clear Bra" is designed to minimize damage from rock chips, scratches, and road debris. 
              We use templates that have been modified to custom wrap edges where applicable for an invisible install and because of our 
              meticulous installation process we stand behind our workmanship and your satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://actioncardetailing.ca/wp-content/uploads/2021/05/car2-removebg-preview.png"
                alt="Protected Car"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">INCREASE AND RETAIN RESELL VALUE</h3>
                <p className="text-blue-700 leading-relaxed">
                  Enhance the long-term value of your vehicle with our premium protection solutions. Our cutting-edge products not only shield your car from the elements but also ensure that it's resell value remains at its peak, making it a smart investment for years to come.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">HIGHEST LEVEL OF PROTECTION</h3>
                <p className="text-blue-700 leading-relaxed">
                  Experience unmatched defense. Our advanced solutions provide the utmost protection against chips, scratches, and the elements.
                </p>
              </div>
            </div>
          </div>

          {/* XPEL Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8">
                  <img 
                    src="https://actioncardetailing.ca/wp-content/uploads/2021/05/img.png"
                    alt="XPEL Ultimate Plus"
                    className="h-16 mb-4"
                  />
                  <h3 className="text-3xl font-bold mb-4">Why XPEL?</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Not all Paint Protection Film is created equally. XPEL ULTIMATE PLUS is the industry leader for a reason. A trusted non-yellowing paint protection film that can self-heal minor scratches and swirls in the top coat.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <img 
                    src="https://actioncardetailing.ca/wp-content/uploads/2021/05/XPEL_ULTIMATE_PLUS_767_510.png"
                    alt="XPEL Ultimate Plus Logo"
                    className="w-full h-auto rounded-lg"
                  />
                  <img 
                    src="https://actioncardetailing.ca/wp-content/uploads/2021/05/b57d36_73bcb0b03ef9418c8fd49d59f165adedmv2.png"
                    alt="Tesla with XPEL"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-blue-200 mb-3">Self-Healing Topcoat</h4>
                  <p className="text-blue-100">Constructed from a polyurethane, ULTIMATE PLUS will self-heal light scratches & swirls</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-blue-200 mb-3">Non-Yellowing</h4>
                  <p className="text-blue-100">Proprietary film will not yellow from UV exposure, staying nearly invisible</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-blue-200 mb-3">Stain Resistant</h4>
                  <p className="text-blue-100">ULTIMATE PLUS is stain resistant & will maintain clarity against contaminants</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-blue-200 mb-3">Prevents Wear & Tear</h4>
                  <p className="text-blue-100">Stop rock chips, nicks & scratches in the paint, and keep your vehicle looking new</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-blue-200 mb-3">Edge Seal Technology</h4>
                  <p className="text-blue-100">Lifting & delamination are a thing of the past as our Edge Seal Technology ensures film stays stuck & keeps surfaces protected</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-blue-200 mb-3">Warranty and Durability</h4>
                  <p className="text-blue-100">Superior Impact Protection and Industry Leading 10 Year Warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
            FINANCING AVAILABLE
          </h2>
          <p className="text-blue-700 mb-8">Click below to learn more</p>
          <img 
            src="https://actioncardetailing.ca/wp-content/uploads/2021/05/financeit.jpg.webp"
            alt="Financeit"
            className="mx-auto h-16"
          />
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-blue-900">
            SELECT YOUR COVERAGE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-gradient-to-b from-blue-600 to-blue-700 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 shadow-2xl text-white">
                <div className="text-center mb-6">
                  <img 
                    src="https://actioncardetailing.ca/wp-content/uploads/2021/05/Bumper.png"
                    alt={pkg.name}
                    className="w-full h-32 object-contain mb-4"
                  />
                  <h3 className="text-xl font-bold text-blue-200 mb-2">{pkg.name}</h3>
                  <div className="text-2xl font-bold mb-2">Starting at {pkg.price}</div>
                  <div className="text-blue-100">Service Time {pkg.serviceTime}</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <h4 className="text-blue-200 font-semibold">WHAT IS INCLUDED:</h4>
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-200 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-blue-100 text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-white text-blue-600 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-blue-50">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Road Doesn't Have to Win */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://actioncardetailing.ca/wp-content/uploads/2021/05/road.jpg"
                alt="Stressed Driver"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                THE ROAD DOESN'T HAVE TO WIN...
              </h2>
              <div className="space-y-4 text-blue-700 mb-8">
                <p>We get it. The thought of rock chips, scratches, weathering, oxidation, UV rays, stains, and fading create STRESS and ANXIETY.</p>
                <p>Fact- There is 100% chance that doing nothing will ensure inevitable damage!</p>
                <p className="text-xl font-semibold text-blue-600">We Provide The Peace of mind you and your vehicle deserve</p>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get A Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-700 leading-relaxed max-w-4xl mx-auto mb-8">
            When you pay for a product with extensive warranties, you want to use a solid company for the service. The world's top paint 
            protection films offer up to 10 years of warranty. You need a company with a long history of successful projects and just as 
            importantly, future longevity. Yes, films are guaranteed based on the quality of the film itself. However, it's the shop that 
            guarantees the work done. You want a company like us because you know we will be here, doing what we do and standing by our 
            products. Our meticulous attention to detail here at <span className="text-blue-600 font-bold">ACTION CAR DETAILING</span> is sure to keep your mind at ease. You can rest 
            assured knowing your vehicle will receive an expert application of a superior PPF product.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Get A Free Quote
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
              DISCOVER THE HIGHEST LEVEL OF PAINT PROTECTION FILM IN WINNIPEG
            </h2>
            <h3 className="text-2xl font-bold text-blue-600 mb-8">
              WHY DO I NEED PAINT PROTECTION FILM?
            </h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl overflow-hidden shadow-xl">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-blue-500/50 transition-colors duration-300 text-white"
                >
                  <h4 className="text-xl font-semibold">{faq.question}</h4>
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-200" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-200" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6 bg-white/20 backdrop-blur-sm">
                    <div className="space-y-3">
                      {faq.answer.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-200 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-blue-100">{point}</p>
                        </div>
                      ))}
                    </div>
                    <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-blue-50">
                      GET MY QUOTE
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaintProtectionFilm;