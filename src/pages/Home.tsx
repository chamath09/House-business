import React from 'react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Home as HomeIcon, Building2, Ruler, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const reviews = [
    {
      name: "Kasun Perera",
      role: "Homeowner",
      text: "Lumina Homes built our dream house perfectly. Their attention to detail and modern designs are unmatched. Highly recommended!",
      rating: 5
    },
    {
      name: "Nimali Silva",
      role: "Property Investor",
      text: "Professional, timely, and excellent communication throughout the construction process. The planning phase was incredibly helpful.",
      rating: 5
    },
    {
      name: "Ruwan Jayasinghe",
      role: "Business Owner",
      text: "They renovated our office space into a modern masterpiece. The team is very skilled and dedicated to quality.",
      rating: 4
    },
    {
      name: "Amila Fernando",
      role: "Homeowner",
      text: "From the architectural design to the final touches, everything was handled with utmost professionalism. Great job!",
      rating: 5
    }
  ];

  const services = [
    {
      icon: <HomeIcon className="w-8 h-8 text-blue-600" />,
      title: "Custom Home Building",
      description: "We build modern, energy-efficient homes tailored to your lifestyle and preferences."
    },
    {
      icon: <Ruler className="w-8 h-8 text-blue-600" />,
      title: "Architectural Design",
      description: "Our expert architects create stunning blueprints and designs for your future home."
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: "Renovations",
      description: "Transform your existing space with our premium renovation and remodeling services."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Animated Background Image */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/40" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 backdrop-blur-md mb-6">
              <span className="text-blue-300 font-medium tracking-wide text-sm uppercase">Award Winning Builders</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Build Your <br/>
              <span className="text-blue-500">Dream Home</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              We combine modern architecture, premium materials, and expert craftsmanship to create spaces that inspire. Experience the future of living.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/gallery" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all flex items-center gap-2 shadow-lg shadow-blue-600/30">
                Explore Projects <ChevronRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold rounded-full transition-all border border-white/20">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Our Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 max-w-2xl mx-auto text-lg"
            >
              We offer comprehensive solutions for all your construction and architectural needs.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(service.icon, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">{service.description}</p>
                <Link to="/services" className="mt-6 text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section (Swiper JS) */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Client Testimonials
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-2xl mx-auto text-lg"
            >
              Don't just take our word for it. Here's what our clients have to say about our work.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              className="pb-16"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index} className="!h-auto">
                  <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-3xl h-full border border-slate-700 flex flex-col shadow-xl">
                    <div className="flex gap-1 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-8 italic flex-grow">"{review.text}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-600/20">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-100">{review.name}</h4>
                        <p className="text-sm text-slate-400">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
    </>
  );
}
