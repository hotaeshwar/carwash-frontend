import { useState } from 'react';
import blogBanner from '../assets/images/blog-banner.jpg';
import formImage from '../assets/images/form1.png';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        photo: null
    });

    const [isHovered, setIsHovered] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'photo' && files.length > 0) {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="relative w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden bg-gray-100">
            {/* Background image with overlay */}
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: `url(${blogBanner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            ></div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 lg:gap-16">
                    {/* Left side content */}
                    <div className="w-full lg:w-1/2 text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-700 mb-4 sm:mb-6">
                            We are Certified and Authorized
                        </h2>
                        <p className="text-sm sm:text-base text-gray-800 mb-4 sm:mb-6">
                            Action Car Detailing Inc., one of Winnipeg's most reputable detailing companies with over 14 years in the
                            business. When it comes to trusting your vehicles in the right hands, look no further than guys with the most experience.
                        </p>

                        <div className="mb-4 sm:mb-6">
                            <p className="text-sm sm:text-base font-medium">1380 Sargent avenue,</p>
                            <p className="text-sm sm:text-base font-medium">Winnipeg,</p>
                            <p className="text-sm sm:text-base font-medium">MB, R3E 0G5</p>
                            <p className="text-sm sm:text-base font-medium">(Appointment Only)</p>
                        </div>

                        <div className="mb-4 sm:mb-6">
                            <p className="text-base sm:text-lg font-semibold">(204) 775-0005</p>
                            <a
                                href="mailto:info@actioncardetailing.ca"
                                className="text-sm sm:text-base text-cyan-700 hover:text-cyan-500 transition duration-300"
                            >
                                info@actioncardetailing.ca
                            </a>
                        </div>
                        <div className="mt-6 sm:mt-8 hidden lg:block">
                            <img
                                src={formImage}
                                alt="Car detailing service"
                                className="max-w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Right side form */}
                    <div className="w-full lg:w-1/2 bg-gray-50 bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl p-4 sm:p-6 md:p-8 mt-6 lg:mt-0">
                        <div onSubmit={handleSubmit}>
                            <div className="mb-3 sm:mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
                                />
                            </div>

                            <div className="mb-3 sm:mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
                                />
                            </div>

                            <div className="mb-3 sm:mb-4">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone"
                                    className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
                                />
                            </div>

                            <div className="mb-3 sm:mb-4">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    rows="4"
                                    className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
                                ></textarea>
                            </div>

                            <div className="mb-4 sm:mb-6">
                                <p className="mb-1 sm:mb-2 text-sm sm:text-base">Attach a Photo</p>
                                <input
                                    type="file"
                                    name="photo"
                                    onChange={handleChange}
                                    className="w-full p-1 sm:p-2 text-sm sm:text-base border border-gray-300 rounded-lg file:mr-2 sm:file:mr-4 file:py-1 sm:file:py-2 file:px-2 sm:file:px-4 file:rounded-md file:border-0 file:bg-cyan-700 file:text-white file:text-sm sm:file:text-base hover:file:bg-cyan-600 transition duration-300"
                                />
                            </div>

                            <div
                                onClick={handleSubmit}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base text-white text-center cursor-pointer transition-all duration-500 ease-in-out transform ${isHovered
                                        ? 'bg-cyan-600 scale-105 shadow-lg'
                                        : 'bg-cyan-700'
                                    }`}
                            >
                                Submit
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image for mobile view */}
                <div className="mt-8 sm:mt-10 md:mt-12 lg:hidden">
                    <img
                        src={formImage}
                        alt="Car detailing service"
                        className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;