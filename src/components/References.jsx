import { Download } from 'lucide-react';
import car6 from '../assets/images/car6.jpg';

const CarDetailingReference = () => {
  const handlePrivacyPolicyDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://actioncardetailing.ca/wp-content/uploads/2019/03/OnlinePrivacyPolicy.mr11.pdf';
    link.download = 'Privacy_Policy.pdf';
    link.target = '_blank';
    link.click();
  };

  return (
   <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden pt-16">

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-400 rounded-full opacity-5 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-blue-300 rounded-full opacity-8 animate-ping"></div>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(${car6})`
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-transparent to-blue-900/80" />



      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-6">

        {/* Partner Logos Row */}
        <div className="mb-8 w-full max-w-4xl">
          <div className="bg-gradient-to-r from-white to-blue-50 py-4 px-6 rounded-xl shadow-xl border border-blue-200">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">

              {/* Rightlook */}
              <div className="bg-blue-600 px-3 py-2 rounded-lg flex items-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer transform hover:scale-110 shadow-lg hover:shadow-xl">
                <span className="text-white text-sm">✓</span>
                <span className="text-white font-bold text-sm ml-2">Rightlook</span>
              </div>

              {/* Murray Hyundai */}
              <div className="text-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer transform hover:scale-110">
                <div className="text-blue-600 font-bold text-lg drop-shadow-lg">MURRAY</div>
                <div className="text-blue-600 text-xs font-semibold">HYUNDAI</div>
              </div>

              {/* Waverley */}
              <div className="text-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer transform hover:scale-110">
                <div className="text-blue-800 font-serif text-sm">Gauthier's</div>
                <div className="text-blue-800 font-bold text-base">Waverley</div>
              </div>

              {/* BestBuy Auto */}
              <div className="text-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer transform hover:scale-110">
                <div className="text-blue-600 font-bold text-base drop-shadow-lg">BestBuy</div>
                <div className="text-blue-600 text-xs font-semibold">AUTO</div>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Policy Section */}
        <div className="text-center mb-6">
          <div className="text-blue-300 text-base font-bold mb-3 drop-shadow-lg animate-pulse">
            DOWNLOAD OUR PRIVACY POLICY
          </div>

          <button
            onClick={handlePrivacyPolicyDownload}
            className="bg-gradient-to-r from-white to-blue-50 hover:from-blue-50 hover:to-blue-100 text-blue-800 px-4 py-2 rounded-lg border-2 border-blue-300 transition-all duration-300 flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Download className="w-4 h-4" />
            <span className="font-semibold text-sm">Action Car Detailing Privacy Policy</span>
          </button>
        </div>

        {/* Contact Information with BBB Badge - Compact Version */}
        <div className="w-full max-w-2xl">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white text-center shadow-xl rounded-xl overflow-hidden border-2 border-blue-400">

            {/* BBB Badge - Top Center */}
            <div className="flex justify-center pt-4 pb-2">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-3 shadow-xl border-2 border-white transform hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center text-white">
                  {/* BBB Logo with torch flame icon */}
                  <div className="mb-1">
                    <svg
                      className="w-6 h-6 text-white drop-shadow-lg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                    >
                      <path d="M15.418,8.627c-0.173-1.781,1.318-2.25,0.585-3.73c1.765,1.353,0.289,3.951,0.289,3.951s1.672-0.92,1.745-2.797 s-2.062-3.043-2.876-3.608C14.348,1.877,15.054,0,15.054,0s-1.07,1.204-1.083,2.503 c-0.012,1.299,0.228,1.915,0.745,2.758C15.233,6.103,15.054,7.078,15.418,8.627z" />
                      <path d="M13.975,12.861h1.998h0.055h1.998l1.455-2.948l-1.646,0.001c0.015-0.01,0.026-0.02,0.041-0.03 c0.07-0.051,0.14-0.106,0.209-0.162c0.069-0.056,0.146-0.114,0.217-0.175c0.146-0.117,0.291-0.254,0.436-0.387l0.055-0.052 l0.052-0.054l0.022-0.027l0.094-0.108c0.026-0.026,0.074-0.092,0.113-0.153s0.08-0.123,0.112-0.184 c0.053-0.119,0.11-0.234,0.137-0.358c0.037-0.121,0.056-0.241,0.063-0.359c0.014-0.233-0.012-0.451-0.062-0.637" />
                      <path d="M12.861,14.72h1.117l1.194,14.755c-0.568,0.229-0.787,0.715-0.787,1.053c0,0.457,1.519,1.473,1.519,1.473 s1.547-1.148,1.563-1.54c0.011-0.269-0.205-0.687-0.696-0.927c0.13-1.691,1.202-12.725,1.405-14.813h0.815l0.021-1.368h-6.129 L12.861,14.72z" />
                    </svg>
                  </div>
                  <div className="text-lg font-bold mb-1">BBB</div>
                  <div className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-1 shadow-lg">
                    A+
                  </div>
                  <div className="text-xs font-medium text-center leading-tight">
                    ACCREDITED<br />BUSINESS
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Text Content - Compact */}
            <div className="px-6 pb-6 pt-2">
              <div className="space-y-2">
                <div className="text-base font-bold leading-tight">
                  CONTACT US FOR OUR RATES AND
                </div>
                <div className="text-base font-bold mb-4 leading-tight">
                  SERVICES
                </div>

                {/* Phone Number */}
                <div className="bg-gradient-to-r from-blue-800 to-blue-900 inline-block px-6 py-3 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                  <a
                    href="tel:+12047750005"
                    className="text-2xl font-bold hover:text-blue-200 transition-colors duration-300 drop-shadow-lg"
                  >
                    (204) 775-0005
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom right corner text */}
      <div className="absolute bottom-4 right-4 text-blue-400 text-xs opacity-70 z-10">
        Delta Auto Service
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-300 rounded-full animate-pulse opacity-40"></div>
    </div>
  );
};

export default CarDetailingReference;