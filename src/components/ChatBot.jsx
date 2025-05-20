import { useState, useEffect } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: '',
    agreeToPolicy: false
  });
  const [errors, setErrors] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);

  // Remove animation effects that cause bouncing
  useEffect(() => {
    // We're keeping this structure but not setting isAnimating to true
    // This effectively disables the animation
    const timer = setTimeout(() => {
      // No longer setting isAnimating to true
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/[^0-9]/g, ''))) {
      newErrors.mobile = 'Please enter a valid mobile number';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    if (!formData.agreeToPolicy) {
      newErrors.agreeToPolicy = 'You must agree to the privacy policy';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message or reset form
    alert('Message sent successfully!');
    setFormData({
      name: '',
      mobile: '',
      message: '',
      agreeToPolicy: false
    });
  };

  return (
    <>
      {/* Chat button with eye-catching design and animations */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-4 xs:bottom-5 sm:bottom-6 md:bottom-8 right-4 xs:right-5 sm:right-6 md:right-8 z-50 w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 ease-in-out transform ${
          isOpen 
            ? 'bg-gradient-to-br from-red-500 to-pink-600 rotate-90 scale-110 ring-4 ring-red-300' 
            : 'bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 hover:scale-110 ring-4 ring-blue-300 ring-opacity-50'
        }`}
      >
        {/* Animated ring effect */}
        <span className={`absolute w-full h-full rounded-full ${isOpen ? 'bg-red-400' : 'bg-blue-400'} opacity-30 animate-ping`} style={{ animationDuration: '3s' }}></span>
        
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 text-white transition-transform duration-300 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 text-white transition-transform duration-300 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Enhanced chat dialog with improved responsiveness and animations */}
      <div
        className={`fixed bottom-0 sm:bottom-20 md:bottom-24 right-0 sm:right-6 md:right-8 z-50 w-full xs:max-w-[90vw] sm:max-w-md bg-white rounded-t-xl sm:rounded-xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out transform ${
          isOpen 
            ? 'translate-y-0 opacity-100 scale-100 border border-indigo-100' 
            : 'translate-y-full sm:translate-y-20 opacity-0 scale-95 pointer-events-none'
        } max-h-[90vh] sm:max-h-[80vh] md:max-h-[600px] flex flex-col`}
        style={{
          boxShadow: isOpen ? '0 10px 25px -5px rgba(59, 130, 246, 0.5), 0 8px 10px -6px rgba(59, 130, 246, 0.3)' : ''
        }}
      >
        {/* Enhanced chat header with animated gradient and wave effect */}
        <div className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 text-white px-4 py-4 shadow-md overflow-hidden">
          {/* Animated background wave effect */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-56 bg-white rounded-full transform translate-x-1/4 -translate-y-20"></div>
            <div className="absolute top-10 left-0 w-full h-56 bg-white rounded-full transform -translate-x-1/4 -translate-y-32"></div>
          </div>
          
          <h3 className="text-lg font-medium flex items-center relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Message Us
          </h3>
          <p className="text-sm text-blue-100 ml-7 relative z-10">
            Send us a message and we will get back to you shortly by text message.
          </p>
          
          {/* Pulsing indicator for online status */}
          <div className="absolute top-4 right-4 flex items-center">
            <div className="h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
            <p className="text-xs text-blue-100">We're online</p>
          </div>
        </div>

        {/* Enhanced welcome message with floating animation */}
        <div className="bg-gradient-to-b from-indigo-50 to-white p-4 border-b border-gray-200">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md transform hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3.5 shadow-sm border-l-4 border-indigo-400">
              <p className="text-gray-700">Hi there! Send us a message if you want to know more about our service.</p>
            </div>
          </div>
        </div>

        {/* Enhanced chat form with improved visual styling and responsiveness */}
        <div className="overflow-y-auto p-4 xs:p-5 sm:p-6 flex-grow scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50">
          <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
            <div className="transition-all duration-300 group">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-blue-600 transition-colors">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2.5 text-sm sm:text-base border-2 ${
                  errors.name ? 'border-red-500' : 'border-gray-200 group-hover:border-blue-400'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:shadow-md`}
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            <div className="transition-all duration-300 group">
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-blue-600 transition-colors">
                MOBILE NUMBER
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className={`w-full px-3 py-2.5 text-sm sm:text-base border-2 ${
                  errors.mobile ? 'border-red-500' : 'border-gray-200 group-hover:border-blue-400'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:shadow-md`}
                placeholder="Your mobile number"
              />
              {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
            </div>

            <div className="transition-all duration-300 group">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-blue-600 transition-colors">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-3 py-2.5 text-sm sm:text-base border-2 ${
                  errors.message ? 'border-red-500' : 'border-gray-200 group-hover:border-blue-400'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:shadow-md`}
                placeholder="Your message"
              ></textarea>
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>

            <div className="transition-all duration-300">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeToPolicy"
                    name="agreeToPolicy"
                    type="checkbox"
                    checked={formData.agreeToPolicy}
                    onChange={handleChange}
                    className={`h-4 w-4 text-blue-600 border-2 ${
                      errors.agreeToPolicy ? 'border-red-500' : 'border-gray-300'
                    } rounded focus:ring-2 focus:ring-blue-500 transition-colors duration-300`}
                  />
                </div>
                <div className="ml-2 text-xs">
                  <label htmlFor="agreeToPolicy" className="font-medium text-gray-700">
                    By checking this box, you agree to our{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300">
                      Privacy Policy
                    </a>
                  </label>
                  <p className="text-gray-500 mt-1">
                    and consent to receive communications from us. You may unsubscribe at any time.
                  </p>
                  {errors.agreeToPolicy && (
                    <p className="mt-1 text-xs text-red-500">{errors.agreeToPolicy}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500 space-y-1 px-2 py-3 bg-gray-50 rounded-lg">
              <p>
                By submitting, you authorize Action Car Detailing to send text messages with offers & other information, possibly using automated technology, to the number you provided.
              </p>
              <p>
                Message/data rates may apply. Reply HELP for help or STOP to cancel. Consent is not a condition of purchase.
              </p>
              <p>
                <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300">
                  Use is subject to terms.
                </a>
              </p>
              <p>
                Please do not include any personal (including health-related) information in text messages at any time.
              </p>
            </div>

            <button
              type="submit"
              className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:-translate-y-1 active:translate-y-0"
            >
              {/* Button shine effect */}
              <span className="absolute top-0 left-0 w-full h-full bg-white transform -translate-x-full opacity-20 skew-x-12 transition-transform duration-1500 ease-in-out group-hover:translate-x-full"></span>
              SEND
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatBot;