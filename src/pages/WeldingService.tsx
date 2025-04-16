import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Shield, Star, Wrench } from 'lucide-react';
import Layout from '../components/Layout';
import ServiceHeader from '../components/ServiceHeader';

export default function WeldingService() {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Structural Integrity",
      description: "Our welding repairs restore and often exceed original strength specifications for your vehicle's safety."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Expert Craftsmanship",
      description: "Skilled welders with years of experience in automotive welding techniques."
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Advanced Equipment",
      description: "State-of-the-art welding equipment for precise, clean, and durable repairs."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Custom Solutions",
      description: "From standard repairs to custom fabrication, we handle all your welding needs."
    }
  ];

  return (
    <Layout>
      <ServiceHeader
        title="Welding Services"
        description="Professional Car Welding in Derby"
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
      />

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-8 mb-16"
          >
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Quality welding is essential for maintaining your vehicle's structural integrity and safety. Whether it's repairing rust damage, fixing exhaust systems, or custom fabrication work, our expert welders deliver precise, durable results.
              </p>
              <p className="text-lg">
                At ATB Motor Engineers, we combine traditional welding expertise with modern techniques and equipment to provide superior welding services for all types of vehicles.
              </p>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="card group relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-gray-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-8 mt-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gradient-automotive">Why Choose ATB Motor Engineers?</h2>
            <p className="text-lg text-gray-300">
              Our welding team brings years of experience and certification to every job. We use advanced MIG and TIG welding equipment, ensuring strong, clean welds that meet or exceed industry standards. From structural repairs to custom fabrication, we deliver quality results you can trust.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}