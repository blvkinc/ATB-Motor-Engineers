import React from 'react';
import { motion } from 'framer-motion';
import { Car, Shield, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';
import ServiceHeader from '../components/ServiceHeader';

export default function CarServicing() {
  const benefits = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Better Performance",
      description: "Regular checks keep your car running smoothly by addressing wear and tear before it impacts how your vehicle drives."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Improved Safety",
      description: "We catch potential issues—like worn brakes, tyres, or suspension—early on, keeping you and your passengers safer."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Increased Fuel Efficiency",
      description: "A well-maintained car runs more efficiently, helping you get more miles per gallon and saving money at the pump."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Longer Vehicle Life",
      description: "Servicing helps prevent small issues from becoming big repairs, keeping your car on the road for longer."
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Higher Resale Value",
      description: "A solid service history gives future buyers confidence in your vehicle's condition and care."
    }
  ];

  return (
    <Layout>
      <ServiceHeader
        title="Car Servicing"
        description="Professional Car Servicing in Derby"
        image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80"
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
                Keeping your vehicle in top condition starts with regular servicing. It's not just about ticking boxes—it's about preventing problems before they start, improving performance, and staying safe on the road.
              </p>
              <p className="text-lg">
                At ATB Motor Engineers, we offer thorough and tailored car servicing designed to keep your vehicle running at its best.
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
            className="glass-effect rounded-2xl p-8 mt-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gradient-automotive">Why Choose ATB Motor Engineers?</h2>
            <p className="text-lg text-gray-300">
              At ATB Motor Engineers, we combine hands-on experience with modern diagnostic tools to give your vehicle the care it deserves. We don't just change oil—we inspect, assess, and maintain your car with precision and attention to detail. Our customer-first approach means honest advice, fair pricing, and service you can trust—every time.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}