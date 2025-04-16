import React from 'react';
import { motion } from 'framer-motion';
import { Car, Shield, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';
import ServiceHeader from '../components/ServiceHeader';

export default function MOTService() {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Keep You Safe on the Road",
      description: "The test covers vital components like brakes, tyres, lights, and steering to ensure your car is safe to drive."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Keep You on the Right Side of the Law",
      description: "Driving without a valid MOT certificate can lead to fines and penalty points on your licence."
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Help the Environment",
      description: "Emissions testing is part of the MOT, helping to reduce harmful pollutants and ensure your vehicle is environmentally responsible."
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Catch Issues Early",
      description: "MOT tests can identify problems before they become costly or dangerous, saving you time and money in the long run."
    },
    {
      icon: <Clock className="w-6 h-6" />,
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
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="space-y-16">
          {/* Introduction Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                The MOT (Ministry of Transport) test is a yearly inspection that ensures your vehicle meets important safety and environmental standards. It's a legal requirement—and having a valid MOT certificate not only keeps you road-legal but also helps keep your vehicle safe and reliable.
              </p>
              <p className="text-lg">
                At ATB Motor Engineers, we offer professional, dependable MOT testing to keep you on the road with confidence.
              </p>
            </div>
          </motion.section>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="automotive-glass-effect rounded-xl p-6 group hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-gradient-automotive">Why Choose ATB Motor Engineers?</h2>
            <p className="text-lg text-gray-300">
              At ATB Motor Engineers, we take MOT testing seriously. Our experienced technicians use advanced diagnostic tools and take the time to do things right. We're committed to keeping your car safe, compliant, and ready for the road. Whether you're due for a routine test or need advice on repairs, we're here to help with honest service and expert care.
            </p>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
}