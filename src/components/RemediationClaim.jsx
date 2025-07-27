import React from 'react';
import { CheckCircle, AlertTriangle, Droplets, Flame, Shield, Bug, Car } from 'lucide-react';

const RemediationClaim = () => {
  const services = [
    { 
      name: 'Rodent Remediation', 
      icon: Bug, 
      description: 'Professional removal and cleanup of rodent infestations',
      color: 'text-sky-200'
    },
    { 
      name: 'Mold Remediation', 
      icon: AlertTriangle, 
      description: 'Safe mold removal and prevention solutions',
      color: 'text-sky-200'
    },
    { 
      name: 'Gas/Oil Spill Cleanup', 
      icon: Droplets, 
      description: 'Hazardous material cleanup and decontamination',
      color: 'text-sky-200'
    },
    { 
      name: 'Water Damage Restoration', 
      icon: Droplets, 
      description: 'Complete water damage assessment and restoration',
      color: 'text-sky-200'
    },
    { 
      name: 'Fire/Smoke Damage', 
      icon: Flame, 
      description: 'Fire and smoke damage cleanup and restoration',
      color: 'text-sky-200'
    },
    { 
      name: 'Biohazard/Trauma Cleanup', 
      icon: Shield, 
      description: 'Specialized biohazard and trauma scene cleanup',
      color: 'text-sky-200'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-200 rounded-full opacity-15 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-150 rounded-full opacity-10 animate-ping"></div>
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-sky-400 drop-shadow-lg">
            MANITOBA PUBLIC INSURANCE
          </h1>
          <div className="h-2 w-32 bg-sky-400 mx-auto rounded-full shadow-lg"></div>
        </div>
      </section>

      {/* Services Section */}
      <div className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-400 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-sky-400 mx-auto mb-6"></div>
            <p className="text-xl text-sky-400 max-w-3xl mx-auto">
              Professional remediation services backed by MPI accreditation and ICAR training
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-sky-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-sky-200 hover:-translate-y-2 border border-sky-200"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-300 mb-6 transition-all duration-300 group-hover:bg-sky-400 shadow-lg`}>
                    <IconComponent className={`w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-sky-600 group-hover:text-sky-700 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-sky-500 leading-relaxed group-hover:text-sky-600 transition-colors duration-300">
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