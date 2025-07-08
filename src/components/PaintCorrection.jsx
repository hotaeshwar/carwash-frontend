import { RotateCcw, Droplets, Target, RefreshCw, Zap, Car } from 'lucide-react';

const PaintCorrection = () => {
  return (
    <div className="min-h-screen bg-blue-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.machinepolishing.com/wp-content/uploads/2023/05/Machine-Polishing-and-Paint-Correction.jpg.webp"
            alt="Paint Correction Hero"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              PAINT CORRECTION
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mt-2">
                POLISHING
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto font-medium bg-blue-900/40 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20">
              Transform your vehicle's paint to showroom perfection with our professional correction services
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Get Started Today
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              GET THAT CAR PAINT LOOKING
              <span className="block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                NEW AGAIN!
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-blue-700 max-w-4xl mx-auto">
              <span className="text-blue-600 font-semibold">Eliminate imperfections</span> formed on your vehicle's paint surface back to a true proper shine.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {[
              {
                icon: RotateCcw,
                title: "Scratch and Swirl Marks",
                description: "Remove heavy swirls and scratch marks, restoring your car paint to near factory conditions. Our skilled specialists safely repair these imperfections achieving the best results."
              },
              {
                icon: RefreshCw,
                title: "Oxidation and Fading",
                description: "Bring your car's paint colour back to its original luster and shine. We restore the years of paint faded away under the sun's brutal UV rays and remove accelerated damage from heavy oxidation."
              },
              {
                icon: Target,
                title: "Paint Holograms",
                description: "Our polishing team has the right knowledge and experience to correct improper use of high speed rotary buffers that have formed buffer trails or buffer swirls on the surface of your car."
              },
              {
                icon: Zap,
                title: "Bird Dropping Etching",
                description: "Bird droppings contain uric acid – a chemical that is corrosive enough to quickly eat through wax or sealants, etching your car paint. Our experts address the situation with precision."
              },
              {
                icon: Droplets,
                title: "Water Spot Damage",
                description: "Rainwater is not pure and naturally acidic. If left unattended, can result in etching your paint or clear coat. These drops will appear as rough or circular-shaped marks where the water has evaporated."
              },
              {
                icon: Car,
                title: "Automatic Carwashes",
                description: "An automatic car wash can leave scratches and swirls behind damaging your paint. Many times brushes used to scrub your vehicle are not cleaned from previously washed cars."
              }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
                  </div>
                  <p className="text-blue-700 leading-relaxed text-center">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              OUR PROCESS
            </h2>
            <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto">
              Professional paint correction through our proven 4-step process
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Process Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://actioncardetailing.ca/wp-content/uploads/2019/04/image9.jpg.webp"
                  alt="Paint Correction Process"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="order-1 lg:order-2 space-y-6">
              {[
                {
                  step: "1",
                  title: "Wash Process followed by Clay Bar",
                  description: "Eliminate all surface contaminants causing permanent damage.",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  step: "2",
                  title: "Wet Sanding / Leveling",
                  description: "Remove top layer clear coat, buffing & polishing deep scratches.",
                  color: "from-blue-600 to-blue-700"
                },
                {
                  step: "3",
                  title: "Buffing & Polishing",
                  description: "Several stages polish are often required to achieve full correction.",
                  color: "from-blue-400 to-blue-500"
                },
                {
                  step: "4",
                  title: "Sealing and Coating",
                  description: "Coat your car paint to protect it from further scratching.",
                  color: "from-blue-700 to-blue-800"
                }
              ].map((process, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                    {process.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{process.title}</h3>
                    <p className="text-blue-200 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 bg-blue-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              PAINT CORRECTION COSTS
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-blue-800 mb-8">
              GET A FLAWLESS FINISH
            </p>
          </div>

          {/* Main Pricing Card */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                PAINT CORRECTION AND POLISHING
              </h3>
              <div className="flex items-center justify-center space-x-2 mb-6">
                <span className="text-lg sm:text-xl">starting at</span>
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold">$200</span>
              </div>
              <a
                href="https://www.yocale.com/widget/action-car-detailing/offerings?gei=009eaMj_I7qdseMPjsjDiQc&hl=en-IN&index=0&locations=49895&merchant_id=B53547-L49895&rwg_token=ACgRB3eVv8FcyHcBwdjLyYYzxJndWpDdj5JwjbK0BM3Q95FVj7UlEJnsWUcag15NXETRnCinPLVndetSrXO4qeadV66Tuio0hQ%3D%3D&sort=alphabetically"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Packages Section */}
          <div className="text-center bg-white rounded-2xl p-8 sm:p-12 shadow-xl border-2 border-blue-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">Our Packages</h3>
            <p className="text-xl sm:text-2xl text-blue-600 font-semibold mb-6">
              Pick your vehicle and Detailing Package
            </p>
            <p className="text-blue-700 text-lg">
              Please note for all the services <span className="text-blue-600 font-semibold">scheduled</span> later in the <span className="text-blue-600 font-semibold">afternoon</span>, the vehicle pickup will be the <span className="text-blue-600 font-semibold">next day</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get professional paint correction that brings back your car's showroom shine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              View Gallery
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaintCorrection;