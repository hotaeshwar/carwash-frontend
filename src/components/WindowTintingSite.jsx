import React, { useState } from 'react';
import { ChevronDown, Shield, Sun, Zap, Wifi, CheckCircle, Play } from 'lucide-react';

const WindowTintingSite = () => {
  const [selectedTint, setSelectedTint] = useState(35);
  const [selectedFilm, setSelectedFilm] = useState('prime-cs');

  const tintOptions = [5, 20, 35, 50, 70];
  
  const filmTypes = {
    'prime-cs': {
      name: 'Prime Color Stable',
      subtitle: 'Cost Effective Quality',
      description: 'Safety and Color Stability Like Never Before. When comfort and cost is key, dyed window tint won\'t let you down. PRIME CS BLACK can cut out the glare, protect your skin from harmful UV rays, and make any journey that much more enjoyable.',
      features: ['UV Ray Protection - SPF 500 protection from 99% harmful UV Rays', 'Good Looks - Stylish statement that won\'t fade or turn purple', 'Crystal Clear Signal - Clear communication in today\'s digital world'],
      grade: 'GOOD',
      logo: 'https://actioncardetailing.ca/wp-content/uploads/2021/05/cs1.jpg.webp',
      carImage: 'https://actioncardetailing.ca/wp-content/uploads/2021/05/goodcar.jpg'
    },
    'prime-hp': {
      name: 'Prime HP',
      subtitle: 'Heat Rejection Tint',
      description: 'XPEL High Performance window tint like PRIME HP BLACK can give your vehicle the look & feel you want without breaking the bank. Providing powerful UV protection and a full spectrum selection of VLTs, HP window tint is a great film option for vehicles of all varieties.',
      features: ['High Performance Technology - Blocks 53% infrared heat to keep vehicle cooler', 'UV Ray Protection - Blocks the vast majority of the sun\'s heat-causing radiation', 'Blend Performance & Value - Ceramic Window Tint is a perfect marriage of value and performance', 'Crystal Clear Signal - Clear Communication in today\'s digital world'],
      grade: 'BETTER',
      logo: 'https://actioncardetailing.ca/wp-content/uploads/2021/05/image14.jpg.webp',
      carImage: 'https://actioncardetailing.ca/wp-content/uploads/2021/05/image24.jpg'
    },
    'nano-ceramic': {
      name: 'NANO-CERAMIC (IR)',
      subtitle: 'Max UV & Heat Rejection Tint',
      description: 'There\'s no better place to start than the top. If you\'re looking for maximum performance & protection, look no further than nano-ceramic PRIME XR. Ceramic tint is designed to provide the most heat rejection possible, while reflecting harmful UV rays to keep you safe. This window tint will your vehicle cooler & more comfortable wherever you\'re headed.',
      features: ['Nano Ceramic Technology - Blocks 85% infrared heat', 'UV Ray Protection - SPF 1000 protection from 99% harmful UV Rays'],
      grade: 'BEST',
      logo: 'https://actioncardetailing.ca/wp-content/uploads/2021/05/image17.png',
      carImage: 'https://actioncardetailing.ca/wp-content/uploads/2021/05/image3.jpg.webp'
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/70 z-10"></div>
        <img 
          src="https://actioncardetailing.ca/wp-content/uploads/2021/05/windowtint.jpg.webp" 
          alt="Window Tinting Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            WINDOW TINTING
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-200">
            Say Goodbye to...
          </p>
          <div className="text-lg md:text-xl text-blue-300 font-semibold mb-8">
            SUN GLARE | SKIN RADIATION | UV DAMAGE | FADED INTERIORS
          </div>
          <p className="text-xl md:text-2xl text-blue-200 mb-12">
            Before It Happens
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Get Quote Now
          </button>
        </div>
      </section>

      {/* Why Window Tinting Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
                WHY WINDOW TINTING?
              </h2>
              <div className="mb-8">
                <img 
                  src="https://actioncardetailing.ca/wp-content/uploads/2021/05/action1.jpg.webp" 
                  alt="Tint Levels"
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Experience a New Level of Heat Rejection, UV Protection, & Good Looks
                </h3>
                <p className="text-blue-700 leading-relaxed mb-6">
                  We recommend Ceramic window film for maximum heat rejection, glare reduction, and comfort. Gone are the days of needing dark windows to provide relief; even our ultra-light films provide extreme heat reduction, so choose your shade based on your style. All films provide +99% UV protection & Lifetime Warranty. Protect delicate interiors and your loved ones!!!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-600 p-6 rounded-xl text-white">
                  <div className="flex items-center mb-3">
                    <Sun className="text-white mr-3" size={24} />
                    <h4 className="font-bold">Superior Heat Rejection</h4>
                  </div>
                  <p className="text-blue-100">Our multilayer nano-ceramic particle technology blocks up to 98% of the infrared heat</p>
                </div>

                <div className="bg-blue-600 p-6 rounded-xl text-white">
                  <div className="flex items-center mb-3">
                    <Shield className="text-white mr-3" size={24} />
                    <h4 className="font-bold">UV Ray Protection</h4>
                  </div>
                  <p className="text-blue-100">XPEL PRIME XR PLUS provides SPF 1,000 protection that effectively blocks over 99% of harmful UV rays</p>
                </div>

                <div className="bg-blue-600 p-6 rounded-xl text-white">
                  <div className="flex items-center mb-3">
                    <Zap className="text-white mr-3" size={24} />
                    <h4 className="font-bold">Greater Clarity</h4>
                  </div>
                  <p className="text-blue-100">Advanced nano construction in XPEL PRIMETM XR provides superior performance without reducing outbound visibility</p>
                </div>

                <div className="bg-blue-600 p-6 rounded-xl text-white">
                  <div className="flex items-center mb-3">
                    <Wifi className="text-white mr-3" size={24} />
                    <h4 className="font-bold">Crystal Clear Signal</h4>
                  </div>
                  <p className="text-blue-100">In the digital world, clear communication is key. PRIME XR PLUS construction will not interfere with radio, cellular, or Bluetooth signals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Window Tint as Easy as 1,2,3 */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Window Tint as Easy as <span className="text-blue-300">1, 2, 3</span>:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold mb-4">Select the Film</h3>
              <div className="bg-blue-800 p-6 rounded-lg">
                <img 
                  src="https://actioncardetailing.ca/wp-content/uploads/2021/05/filmselection-1.jpg.webp" 
                  alt="Film Selection"
                  className="w-full rounded mb-4"
                />
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-blue-500 text-white px-3 py-2 rounded">
                    <span>PRIME CS</span>
                    <span>GOOD</span>
                  </div>
                  <div className="flex items-center justify-between bg-blue-600 text-white px-3 py-2 rounded">
                    <span>PRIME HP</span>
                    <span>BETTER</span>
                  </div>
                  <div className="flex items-center justify-between bg-blue-700 text-white px-3 py-2 rounded">
                    <span>PRIME XR</span>
                    <span>BEST</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold mb-4">Select the Coverage</h3>
              <div className="bg-blue-800 p-6 rounded-lg">
                <img 
                  src="https://actioncardetailing.ca/wp-content/uploads/2021/05/action1.jpg.webp" 
                  alt="Coverage Selection"
                  className="w-full rounded mb-4"
                />
                <div className="flex justify-center space-x-2">
                  {tintOptions.map((tint) => (
                    <button
                      key={tint}
                      className={`px-3 py-2 rounded ${
                        selectedTint === tint 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-blue-700 text-blue-200 hover:bg-blue-600'
                      }`}
                      onClick={() => setSelectedTint(tint)}
                    >
                      {tint}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold mb-4">Select the Shade</h3>
              <div className="bg-blue-800 p-6 rounded-lg">
                <img 
                  src="https://actioncardetailing.ca/wp-content/uploads/2021/05/step3.jpg.webp" 
                  alt="Shade Selection"
                  className="w-full rounded mb-4"
                />
                <div className="flex justify-center space-x-2 text-sm">
                  <span>5%</span>
                  <span>20%</span>
                  <span>35%</span>
                  <span>50%</span>
                  <span>70%</span>
                  <span>NONE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="text-center">
            <div className="relative inline-block max-w-2xl mx-auto">
              <img 
                src="https://actioncardetailing.ca/wp-content/uploads/2021/05/step3.jpg.webp" 
                alt="XPEL PRIME Window Film Video"
                className="w-full rounded-lg shadow-2xl"
              />
              <a 
                href="https://youtu.be/RPLIOjXU_oQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-blue-900/50 rounded-lg hover:bg-blue-900/30 transition-all duration-300"
              >
                <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Play className="text-white ml-1" size={32} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Film Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-4">
            1. WHAT FILM?
          </h2>
          <p className="text-center text-blue-700 max-w-4xl mx-auto mb-16 leading-relaxed">
            Many shops offering window tint will quote you pricing based on their lowest grade film just to get you in the door. Once there, they educate you on films and upsell you after you realize the kind of film you desire and the number of windows you really need (eg Cal legal), thus you end up spending much more then you originally thought.
          </p>
          <p className="text-center text-blue-800 max-w-4xl mx-auto mb-16 font-semibold">
            We are straight forward with all of our Pricing and Options as we treat our clients as we like to be treated; no surprises! The Color Stable, Ceramic or Nano Ceramic choice simply comes down to budget as both films lines we carry are quality, lifetime warrantied products.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(filmTypes).map(([key, film]) => (
              <div key={key} className={`bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${selectedFilm === key ? 'ring-4 ring-blue-500' : ''}`}>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{film.name}</h3>
                    <div className="mb-4">
                      <img 
                        src={film.logo} 
                        alt={`${film.name} Logo`}
                        className="h-16 mx-auto mb-2"
                      />
                    </div>
                    <p className="text-blue-700 font-semibold">{film.subtitle}</p>
                  </div>

                  <div className="mb-6">
                    <img 
                      src="https://actioncardetailing.ca/wp-content/uploads/2021/05/xpel.png.webp" 
                      alt="XPEL Logo"
                      className="w-24 mx-auto mb-4"
                    />
                    <img 
                      src={film.carImage} 
                      alt={`${film.name} Car`}
                      className="w-full rounded-lg"
                    />
                  </div>

                  <div className={`text-center text-4xl font-black mb-6 ${
                    film.grade === 'GOOD' ? 'text-blue-500' : 
                    film.grade === 'BETTER' ? 'text-blue-600' : 
                    'text-blue-700'
                  }`}>
                    {film.grade}
                  </div>

                  <p className="text-blue-700 text-sm leading-relaxed mb-6">{film.description}</p>

                  <div className="space-y-3">
                    {film.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-blue-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => setSelectedFilm(key)}
                    className={`w-full mt-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedFilm === key 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}
                  >
                    Select Film
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Coverage Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-8">
            2. WHAT COVERAGE?
          </h2>
          <p className="text-center text-blue-700 max-w-4xl mx-auto mb-16 leading-relaxed">
            For maximum UV Protection, heat rejection, and comfort we recommend doing as much as the budget allows. A chain is only as strong as its weakest link and for highest levels of interior protection consider all glass. Many think that factory "privacy" glass is a protective tint but unfortunately it is shaded for looks only and does not help with UV or Heat.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-8">TWO FRONTS ONLY:</h3>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg">
                <img 
                  src="https://actioncardetailing.ca/wp-content/uploads/2021/05/side.png.webp" 
                  alt="Two Fronts Only"
                  className="w-full max-w-md mx-auto mb-6"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Get A Quote
                </button>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-8">SIDES AND BACK:</h3>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg">
                <img 
                  src="https://actioncardetailing.ca/wp-content/uploads/2021/05/side_back.png.webp" 
                  alt="Sides and Back"
                  className="w-full max-w-md mx-auto mb-6"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Get A Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Shade Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-8">
            3. Choose Your Shade
          </h2>
          <p className="text-center text-blue-700 max-w-4xl mx-auto mb-16 leading-relaxed">
            This is where your style and personal preference gets to take control. We can stay consistent all around or mix the shades up a bit. Tint shades are so subjective as everyone has different taste so we take the time to determine what is best for you. There are local laws that dictate what the state allows on front doors and windshield so please ask and we will be happy to educate you. CLICK on the box below to experience the interactive Xpel Simulator
          </p>

          <div className="text-center mb-12">
            <div className="bg-white p-8 rounded-xl shadow-xl inline-block">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">PRIME</h3>
              <h4 className="text-xl text-blue-700 mb-6">Window Tint Simulator</h4>
              <p className="text-blue-600 mb-6">Select a vehicle type and color. Then see how the different tint percentages, or as we call it Variable Light Transfers (VLT's), could look on the front, sides, and back of your vehicle.</p>
              <img 
                src="https://actioncardetailing.ca/wp-content/uploads/2021/05/image10.png.webp" 
                alt="Window Tint Simulator"
                className="w-full max-w-2xl mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Tinting Process */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            OUR TINTING PROCESS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold mb-6">WE PREP</h3>
              <div className="bg-blue-800 rounded-xl overflow-hidden mb-6">
                <img 
                  src="https://actioncardetailing.ca/wp-content/uploads/2021/05/prep.jpg.webp" 
                  alt="We Prep"
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-blue-200 leading-relaxed">
                Using Xpels DAP software and the best patterns available we computer cut all film for a precise fit. We then thermally shrink each panel onto the glass and shave all edges for a smooth install.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold mb-6">WE PLOT</h3>
              <div className="bg-blue-800 rounded-xl overflow-hidden mb-6">
                <img 
                  src="https://actioncardetailing.ca/wp-content/uploads/2021/05/plot.jpg.webp" 
                  alt="We Plot"
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-blue-200 leading-relaxed">
                Using Xpels DAP software and the best patterns available we computer cut all film for a precise fit. We then thermally shrink each panel onto the glass and shave all edges for a smooth install.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold mb-6">WE EXECUTE</h3>
              <div className="bg-blue-800 rounded-xl overflow-hidden mb-6">
                <img 
                  src="https://actioncardetailing.ca/wp-content/uploads/2021/05/execute.jpg.webp" 
                  alt="We Execute"
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-blue-200 leading-relaxed">
                We don't take short cuts and aren't a "volume" shop that rushes the jobs in and out to remain profitable; Rather one that goes the extra mile to help you choose the right film, make the install as dust-free as possible, and return the vehicle cleaner than we received it. We want you to find value in how we treat both you and your vehicle, ultimately earning your repeat and referral business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Experience the ultimate in UV protection, heat rejection, and style with our professional window tinting services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Call Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WindowTintingSite;