import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Shield, Clock, Gauge } from 'lucide-react';
import Layout from '../components/Layout';
import ServiceHeader from '../components/ServiceHeader';

export default function MechanicalRepairs() {
  const features = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Restore Performance",
      description: "Timely mechanical repairs help maintain engine power, responsiveness, and fuel efficiency, keeping your vehicle running smoothly."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Boost Safety",
      description: "Systems like brakes, steering, and suspension are crucial to road safety. Expert attention ensures they're operating correctly and reliably."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Avoid Expensive Breakdowns",
      description: "Catching and fixing problems early prevents them from turning into major, costly repairs or inconvenient roadside breakdowns."
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Extend Vehicle Lifespan",
      description: "Routine repairs and maintenance reduce wear and tear, helping your vehicle last longer and perform better over time."
    }
  ];

  return (
    <Layout>
      <ServiceHeader
        title="Mechanical Repairs"
        description="The Importance of Professional Mechanical Repairs – And Why ATB Motor Engineers Is the Right Choice"
        image="https://images.unsplash.com/photo-1507977800135-148acfe6c979?auto=format&fit=crop&q=80"
      />
      
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
                Your vehicle's mechanical systems are at the heart of its performance, safety, and reliability. From the engine and gearbox to the suspension and braking systems, every part needs to work in harmony for a smooth and secure driving experience. At ATB Motor Engineers, we specialise in all aspects of mechanical repair, delivering expert diagnostics and precise solutions to keep your vehicle running at its best.
              </p>
              <h3 className="text-2xl font-bold text-gradient-automotive mb-4">
                Why Expert Mechanical Repairs Matter
              </h3>
              <p className="text-lg">
                Mechanical faults can develop over time or appear suddenly—and ignoring them can lead to bigger problems down the line. Professional repairs ensure your vehicle stays in great condition:
              </p>
            </div>
          </motion.section>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="automotive-glass-effect rounded-xl p-6 group hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
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
              At ATB Motor Engineers, we bring a wealth of experience, advanced diagnostic tools, and a commitment to honest, high-quality service. Whether it's a minor repair or a full mechanical overhaul, our skilled technicians provide accurate, efficient solutions tailored to your vehicle. We're dedicated to helping you drive with confidence—no noise, no worry, just reliable performance.
            </p>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
}