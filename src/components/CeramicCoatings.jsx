import React, { useState } from 'react';
import { Play, Check, Shield, Star, Droplets, Settings, HardHat, Sun, Atom, Beaker } from 'lucide-react';

const CeramicCoatings = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    {
      icon: <Check className="w-8 h-8 text-white" />,
      title: "Self-cleaning",
      description: "Its super hydrophobic effect makes any liquid bead up and roll off the surface, encapsulating dirt and grime."
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Permanent Protection",
      description: "The nano particles form a permanent barrier that can only be removed through abrasion like wet sanding."
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      title: "Extreme Gloss",
      description: "The protective glass shield will keep the vehicle looking shiny and new."
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: "Corrosion and Oxidation Resistant",
      description: "XPEL Ceramic Coating creates a paint protection layer that prevents oxidation and corrosion."
    }
  ];

  const additionalFeatures = [
    {
      icon: <HardHat className="w-8 h-8 text-white" />,
      title: "Hardness above 9H",
      description: "The glass coat is above max 9H on the pencil test. The pencil test is used in the coating industry to determine a paints hardness."
    },
    {
      icon: <Sun className="w-8 h-8 text-white" />,
      title: "UV Protection",
      description: "With XPEL Fusion Plus Ceramic coating your paint won't fade or age due to the UV protection in the glass coating."
    },
    {
      icon: <Atom className="w-8 h-8 text-white" />,
      title: "Chemical Resistant",
      description: "The coating has 100% resistance against damaging contaminants and harsh chemicals."
    },
    {
      icon: <Beaker className="w-8 h-8 text-white" />,
      title: "Anti-graffiti",
      description: "Once cured, the coating provides protection from extreme temperatures ranging from -50 to 2,200 degrees Fahrenheit."
    }
  ];

  const packages = [
    {
      title: "XPEL FUSION PLUS LITE COATING",
      warranty: "1 YEAR WARRANTY",
      prices: {
        coupe: "$499",
        large: "$549",
        truck: "$599"
      },
      features: [
        "1 Layer of FUSION PLUS LITE Ceramic Coating"
      ],
      image: "https://actioncardetailing.ca/wp-content/uploads/2021/05/paint1.png.webp"
    },
    {
      title: "XPEL FUSION PLUS PAINT& PPF COATING",
      warranty: "4 YEARS WARRANTY",
      prices: {
        coupe: "$799",
        large: "$899",
        truck: "$999"
      },
      features: [
        "1 Layer of FUSION PLUS PAINT & PPF Ceramic Coating",
        "1 Layer of XPEL Fusion Plus Plastic and Trim",
        "1 Layer of XPEL Glass coating on Windshield and All Windows",
        "1 Layer of XPEL Wheel and caliper coating on the Rim Face & exhaust tips"
      ],
      image: "https://actioncardetailing.ca/wp-content/uploads/2021/05/paint1.png.webp"
    },
    {
      title: "XPEL FUSION PLUS PREMIUM COATING",
      warranty: "8 YEARS WARRANTY",
      prices: {
        coupe: "$1199",
        large: "$1349",
        truck: "$1599"
      },
      features: [
        "1 Layer of FUSION PLUS PREMIUM ceramic Coating",
        "1 Layer of XPEL Fusion Plus Plastic and Trim",
        "1 Layer of XPEL Glass coating on Windshield and All Windows",
        "1 Layer of XPEL Wheel and caliper coating on the Rim Face & exhaust tips"
      ],
      image: "https://actioncardetailing.ca/wp-content/uploads/2021/05/paint1.png.webp"
    }
  ];

  const addOns = [
    {
      title: "Upholstery Protection Package",
      prices: {
        coupe: "$249",
        large: "$299",
        truck: "$349"
      },
      features: ["1 Coat of Fusion Plus Upholstery"]
    },
    {
      title: "Wheels Face Package",
      price: "$199",
      features: ["1 Layer of 'Wheel and Caliper' on face of All Rims + Calipers"]
    },
    {
      title: "Glass Protection Package",
      prices: {
        coupe: "$169",
        large: "$179",
        truck: "$199"
      },
      features: ["2 Layers of 'Glass' to All Exterior Glass"]
    },
    {
      title: "Door Jamb Protection Package",
      prices: {
        coupe: "$200",
        large: "$250",
        truck: "$300"
      },
      features: ["1 Layer of Fusion Plus Premium"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
     {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/70 via-blue-900/65 to-purple-900/60 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.3)_0%,transparent_50%)] z-10"></div>
        <img 
          src="https://actioncardetailing.ca/wp-content/uploads/2021/05/image2.png.webp" 
          alt="Window Tinting Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
            Ceramic Coatings
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
      </section>
      {/* Video Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              NO OTHER COATING COMES CLOSE
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
              WATCH VIDEO
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden shadow-2xl border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300">
              {!isVideoPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4 cursor-pointer hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 animate-pulse"
                         onClick={() => setIsVideoPlaying(true)}>
                      <Play className="w-8 h-8 text-black ml-1" />
                    </div>
                    <div className="text-white">
                      <div className="text-2xl font-bold">FUSION<span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">PLUS</span>™</div>
                      <div className="text-sm tracking-widest text-cyan-300">CERAMIC COATING</div>
                      <div className="text-xs mt-2 flex items-center justify-center space-x-4 text-gray-300">
                        <span className="hover:text-cyan-400 transition-colors">SATIN</span>
                        <span>|</span>
                        <span className="hover:text-cyan-400 transition-colors">PREMIUM</span>
                        <span>|</span>
                        <span className="hover:text-cyan-400 transition-colors">LITE</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://player.vimeo.com/video/957024834?h=166ff14d42&autoplay=1"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Protection Description */}
      <section className="py-12 bg-gradient-to-r from-cyan-100 via-blue-100 to-purple-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto">
            <span className="text-cyan-600 font-semibold bg-white px-2 py-1 rounded-md shadow-sm">Protect paint and surfaces</span> from wear and tear and harsh elements, exponentially reducing scratches, rock chips and maintenance.
          </p>
        </div>
      </section>

      {/* Look New Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-8">
              LOOK NEW ALL THE TIME
            </h2>
            <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto">
              XPEL Ceramic Coating is a <span className="text-cyan-600 font-semibold bg-white px-2 py-1 rounded-md shadow-sm">liquid nano-ceramic clear coat</span>, with 3 times the hardness and self cleaning properties.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-cyan-300/50 group">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-6 text-center group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-cyan-300/50 group">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-6 text-center group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Warranty Text */}
          <div className="text-center mt-16">
            <p className="text-lg md:text-xl text-gray-800 max-w-5xl mx-auto bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-cyan-200/50">
              Each XPEL Ceramic Coating package comes with a manufacturer-backed warranty, and can be modified to include add-on protection with a layer of Ceramic Coating, or combined with interior treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-16 bg-gradient-to-r from-white via-gray-50 to-cyan-50 border-t border-cyan-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-cyan-600 bg-clip-text text-transparent mb-4">
            FINANCING AVAILABLE
          </h2>
          <p className="text-lg text-gray-600 mb-8">Click below to learn more</p>
          
          <div className="max-w-md mx-auto">
            <img 
              src="https://actioncardetailing.ca/wp-content/uploads/2021/05/financeit.jpg.webp" 
              alt="Financeit Logo"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      {/* Installation Pricing Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              INSTALLATION PRICING
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              BEST CERAMIC COATING PROTECTION
            </h3>
            <p className="text-lg text-gray-200 mb-8">
              All of our Ceramic Coating packages include:
            </p>
            <div className="text-xl space-y-2">
              <div className="hover:text-cyan-400 transition-colors">Exterior Wash</div>
              <div className="hover:text-cyan-400 transition-colors">Paint Decontamination</div>
              <div className="hover:text-cyan-400 transition-colors">Paint Prep</div>
            </div>
            <p className="text-sm text-gray-300 mt-8 max-w-4xl mx-auto bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
              ** Paint Correction will be charged additionally. For a more accurate quote on a Paint Correction, schedule 15 minutes appointment to have your paint evaluated (free of charge and no obligation)**
            </p>
            
            <button className="mt-8 px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-400/50">
              Book now
            </button>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-cyan-300/50 group">
                <div className="p-6">
                  <div className="mb-6 transform group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={pkg.image} 
                      alt="Fusion Plus Package"
                      className="w-full h-32 object-contain"
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold text-cyan-600 text-center mb-2 group-hover:text-blue-600 transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-sm text-cyan-600 text-center mb-6 bg-cyan-50 py-2 px-4 rounded-full">
                    {pkg.warranty}
                  </p>
                  
                  <div className="space-y-2 mb-6 text-center bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm">
                      <span className="font-semibold">Coupe/Small car</span> <span className="text-cyan-600 font-bold">{pkg.prices.coupe}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">Large car/Small SUV</span> <span className="text-cyan-600 font-bold">{pkg.prices.large}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">Large SUV/Truck</span> <span className="text-cyan-600 font-bold">{pkg.prices.truck}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-center mb-12">
            ADD-ONS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:scale-105 border border-cyan-500/30 hover:border-cyan-400/60 group">
                <h3 className="text-lg font-bold text-cyan-400 text-center mb-4 group-hover:text-blue-400 transition-colors">
                  {addon.title}
                </h3>
                
                {addon.prices ? (
                  <div className="space-y-2 mb-4 text-center text-sm bg-gray-700/50 p-3 rounded-lg">
                    <div>Coupe/Small car <span className="text-cyan-400 font-bold">{addon.prices.coupe}</span></div>
                    <div>Large car/Small SUV <span className="text-cyan-400 font-bold">{addon.prices.large}</span></div>
                    <div>Large SUV/Truck <span className="text-cyan-400 font-bold">{addon.prices.truck}</span></div>
                  </div>
                ) : (
                  <div className="text-center mb-4 bg-gray-700/50 p-3 rounded-lg">
                    <span className="font-semibold">All vehicles <span className="text-cyan-400 font-bold">{addon.price}</span></span>
                  </div>
                )}
                
                <div className="space-y-2">
                  {addon.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-xs text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Fusion Plus Card Section */}
      <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-cyan-200/50 hover:border-cyan-300/70 transition-all duration-300">
            {/* Top Section - Protect Your Vehicle */}
            <div className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-8">
                    PROTECT YOUR VEHICLE WITH XPEL FUSION PLUS CERAMIC COATING
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                      <span className="text-cyan-600 font-semibold text-lg underline decoration-cyan-400 hover:text-blue-600 transition-colors">FUSION PLUS LITE</span>
                    </div>
                    <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                      <span className="text-cyan-600 font-semibold text-lg underline decoration-cyan-400 hover:text-blue-600 transition-colors">FUSION PLUS PAINT & PPF</span>
                    </div>
                    <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                      <span className="text-cyan-600 font-semibold text-lg underline decoration-cyan-400 hover:text-blue-600 transition-colors">FUSION PLUS PREMIUM</span>
                    </div>
                    <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                      <span className="text-cyan-600 font-semibold text-lg underline decoration-cyan-400 hover:text-blue-600 transition-colors">FUSION PLUS WHEEL & CALIPER</span>
                    </div>
                    <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                      <span className="text-cyan-600 font-semibold text-lg underline decoration-cyan-400 hover:text-blue-600 transition-colors">FUSION PLUS GLASS</span>
                    </div>
                    <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                      <span className="text-cyan-600 font-semibold text-lg underline decoration-cyan-400 hover:text-blue-600 transition-colors">FUSION PLUS PLASTIC & TRIMS</span>
                    </div>
                    <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                      <span className="text-cyan-600 font-semibold text-lg underline decoration-cyan-400 hover:text-blue-600 transition-colors">FUSION PLUS UPHOLSTY</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="max-w-md mx-auto hover:scale-105 transition-transform duration-300">
                    <img 
                      src="https://actioncardetailing.ca/wp-content/uploads/2021/05/image14.png.webp" 
                      alt="XPEL Logo"
                      className="w-full h-auto drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Fusion Plus Details */}
            <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                    FUSION PLUS
                    <span className="block text-3xl md:text-4xl">CERAMIC COATING</span>
                  </h2>
                  
                  <div className="space-y-4 text-sm md:text-base">
                    <p className="leading-relaxed bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                      <span className="font-bold">FUSION PLUS</span>™ bonds at the molecular level to seal and protect surfaces from environmental contaminants, harmful UV rays, and insect acids. <span className="font-bold">FUSION PLUS</span> also provides resistance to light scratches and fading. Its hydrophobic properties repel dirt and liquids, making surfaces easier to clean.
                    </p>
                    <p className="leading-relaxed bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                      Developed to perform in a wide variety of surface types, <span className="font-bold">FUSION PLUS</span> Ceramic Coating offers unrivaled gloss, superior hydrophobic protection, and improved scratch resistance.
                    </p>
                  </div>
                  
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm p-3 rounded-lg hover:bg-white/30 transition-colors">
                      <span className="text-xl font-bold">+</span>
                      <span className="font-semibold">Provides protection from the elements</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm p-3 rounded-lg hover:bg-white/30 transition-colors">
                      <span className="text-xl font-bold">+</span>
                      <span className="font-semibold">Repels water, dirt & road grime</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm p-3 rounded-lg hover:bg-white/30 transition-colors">
                      <span className="text-xl font-bold">+</span>
                      <span className="font-semibold">Resist stains & chemical etching</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 lg:pl-12">
                  <img 
                    src="https://actioncardetailing.ca/wp-content/uploads/2021/05/image15-1.jpg.webp" 
                    alt="Fusion Plus Ceramic Coating Process"
                    className="w-full h-auto rounded-lg shadow-2xl border-4 border-white/30 hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CeramicCoatings;