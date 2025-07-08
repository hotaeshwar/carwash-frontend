import React, { useState } from 'react';
import { CheckCircle, Shield, Clock, Star, ArrowRight, Phone } from 'lucide-react';
import beforeAfterImage from '../assets/images/before-and-after-dent-repair.png';

const DentRepairComponent = () => {
  const [activeTab, setActiveTab] = useState('hail');

  const services = [
    {
      id: 'hail',
      title: 'Hail Damage Repair',
      description: 'Professional hail damage restoration using paintless dent repair techniques',
      features: ['Insurance claim assistance', 'Quick turnaround', 'Factory finish maintained']
    },
    {
      id: 'door',
      title: 'Door Ding Repair',
      description: 'Remove unsightly door dings and parking lot damage',
      features: ['Same-day service', 'No paint needed', 'Cost-effective solution']
    },
    {
      id: 'minor',
      title: 'Minor Dent Repair',
      description: 'Fix small to medium dents without compromising your paint',
      features: ['Eco-friendly process', 'Original paint preserved', 'Warranty included']
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Insurance Approved',
      description: 'We work directly with your insurance company'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Fast Service',
      description: 'Most repairs completed within 2-4 hours'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Expert Technicians',
      description: 'Certified professionals with years of experience'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Quality Guarantee',
      description: 'Lifetime warranty on all paintless dent repairs'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            <span className="block">Professional</span>
            <span className="text-blue-600">Dent Repair Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            <span className="block mb-2">Restore your vehicle's appearance with Action Car Wash's expert paintless dent repair.</span>
            <span className="font-medium text-blue-800">We fix hail damage, door dings, and minor dents without affecting your original paint.</span>
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Before/After Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={beforeAfterImage} 
                alt="Before and after dent repair by Action Car Wash"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 left-4 bg-blue-600/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <span className="text-sm font-bold text-white">Before & After</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-blue-600 px-4 py-2 rounded-lg shadow-lg border border-blue-200">
                <span className="text-sm font-bold">Action Car Wash</span>
              </div>
            </div>
          </div>

          {/* Service Tabs */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              
              {/* Tab Navigation */}
              <div className="flex flex-col sm:flex-row gap-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 text-left sm:text-center shadow-lg ${
                      activeTab === service.id
                        ? 'bg-blue-600 text-white shadow-blue-200 transform scale-105'
                        : 'bg-white text-blue-700 hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300'
                    }`}
                  >
                    <span className="text-sm sm:text-base font-bold">{service.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Tab Content */}
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border-2 border-blue-100">
                {services.map((service) => (
                  activeTab === service.id && (
                    <div key={service.id} className="space-y-6">
                      <h3 className="text-2xl sm:text-3xl font-bold text-blue-900">
                        <span>{service.title}</span>
                      </h3>
                      <p className="text-blue-700 text-lg sm:text-xl leading-relaxed">
                        <span>{service.description}</span>
                      </p>
                      
                      <div className="space-y-4">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg">
                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                            <span className="text-blue-800 font-medium text-base sm:text-lg">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-6">
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105">
                          <span>Get Free Estimate</span>
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-xl border-2 border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6 shadow-lg">
                <div className="text-white">
                  {benefit.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">
                <span>{benefit.title}</span>
              </h4>
              <p className="text-blue-700 leading-relaxed">
                <span>{benefit.description}</span>
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 sm:p-16 text-center text-white shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="block">Ready to Restore</span>
            <span className="text-blue-200">Your Vehicle?</span>
          </h3>
          <p className="text-xl sm:text-2xl mb-10 text-blue-100 leading-relaxed">
            <span className="block">Contact Action Car Wash today for a</span>
            <span className="font-bold text-white">free estimate</span>
            <span> on your dent repair needs</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center space-x-3 shadow-lg transform hover:scale-105">
              <Phone className="w-6 h-6" />
              <span>Call Now</span>
            </button>
            <button className="border-3 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg transform hover:scale-105">
              <span>Schedule Online</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DentRepairComponent;