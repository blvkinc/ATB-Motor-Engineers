import React from 'react';
import { motion } from 'framer-motion';
import { Car, Shield, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';
import ServiceHeader from '../components/ServiceHeader';

export default function MOTService() {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Keep You Safe on the Road",
      description: "The test covers vital components like brakes, tyres, lights, and steering to ensure your car is safe to drive."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Keep You on the Right Side of the Law",
      description: "Driving without a valid MOT certificate can lead to fines and penalty points on your licence."
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Help the Environment",
      description: "Emissions testing is part of the MOT, helping to reduce harmful pollutants and ensure your vehicle is environmentally responsible."
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Catch Issues Early",
      description: "MOT tests can identify problems before they become costly or dangerous, saving you time and money in the long run."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Boost Resale Value",
      description: "A valid MOT certificate shows buyers that your vehicle has been looked after and is in good working order."
    }
  ];

  return (
    <Layout>
      <ServiceHeader
        title="MOT Testing"
        description="Professional MOT Testing in Derby"
        image="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80"
      />

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="automotive-glass-effect rounded-2xl p-8 mb-16"
          >
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                The MOT (Ministry of Transport) test is a yearly inspection that ensures your vehicle meets important safety and environmental standards. It's a legal requirement—and having a valid MOT certificate not only keeps you road-legal but also helps keep your vehicle safe and reliable.
              </p>
              <p className="text-lg">
                At ATB Motor Engineers, we offer professional, dependable MOT testing to keep you on the road with confidence.
              </p>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            className="automotive-glass-effect rounded-2xl p-8 mt-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gradient-automotive">Why Choose ATB Motor Engineers?</h2>
            <p className="text-lg text-gray-300">
              At ATB Motor Engineers, we take MOT testing seriously. Our experienced technicians use advanced diagnostic tools and take the time to do things right. We're committed to keeping your car safe, compliant, and ready for the road. Whether you're due for a routine test or need advice on repairs, we're here to help with honest service and expert care.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}