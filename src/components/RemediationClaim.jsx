import React from 'react';
import { CheckCircle, AlertTriangle, Droplets, Flame, Shield, Bug, Car } from 'lucide-react';

const RemediationClaim = () => {
  const services = [
    { 
      name: 'Rodent Remediation', 
      icon: Bug, 
      description: 'Professional removal and cleanup of rodent infestations',
      color: 'text-orange-600'
    },
    { 
      name: 'Mold Remediation', 
      icon: AlertTriangle, 
      description: 'Safe mold removal and prevention solutions',
      color: 'text-green-600'
    },
    { 
      name: 'Gas/Oil Spill Cleanup', 
      icon: Droplets, 
      description: 'Hazardous material cleanup and decontamination',
      color: 'text-blue-600'
    },
    { 
      name: 'Water Damage Restoration', 
      icon: Droplets, 
      description: 'Complete water damage assessment and restoration',
      color: 'text-cyan-600'
    },
    { 
      name: 'Fire/Smoke Damage', 
      icon: Flame, 
      description: 'Fire and smoke damage cleanup and restoration',
      color: 'text-red-600'
    },
    { 
      name: 'Biohazard/Trauma Cleanup', 
      icon: Shield, 
      description: 'Specialized biohazard and trauma scene cleanup',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/70 via-blue-900/65 to-purple-900/60 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.3)_0%,transparent_50%)] z-10"></div>
        <img 
          src="https://actioncardetailing.ca/wp-content/uploads/2021/04/car10.jpg" 
          alt="Manitoba Public Insurance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
            MANITOBA PUBLIC INSURANCE
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Services Section */}
      <div className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional remediation services backed by MPI accreditation and ICAR training
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-50 group-hover:bg-blue-50 mb-6 transition-colors duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemediationClaim;