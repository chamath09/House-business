import React from 'react';
import { Home, Building2, Ruler, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      icon: <Home className="w-10 h-10 text-blue-600" />,
      title: "Custom Home Building",
      description: "We build modern, energy-efficient homes tailored to your lifestyle and preferences. From foundation to roof, we handle every aspect of construction with precision.",
      features: ["Turnkey Construction", "Energy Efficient Designs", "Premium Materials", "Project Management"]
    },
    {
      icon: <Ruler className="w-10 h-10 text-blue-600" />,
      title: "Architectural Design",
      description: "Our expert architects create stunning blueprints and designs for your future home. We blend aesthetics with functionality to create the perfect living space.",
      features: ["3D Modeling", "Floor Plans", "Interior Design", "Permit Acquisition"]
    },
    {
      icon: <Building2 className="w-10 h-10 text-blue-600" />,
      title: "Renovations & Remodeling",
      description: "Transform your existing space with our premium renovation services. Whether it's a kitchen update or a full house remodel, we bring your vision to life.",
      features: ["Kitchen Remodeling", "Bathroom Upgrades", "Room Additions", "Exterior Makeovers"]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive construction and design solutions tailored to meet your highest expectations.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-200 flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-24 h-24 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                {service.icon}
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
