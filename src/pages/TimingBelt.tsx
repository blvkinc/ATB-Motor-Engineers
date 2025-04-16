import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Gauge, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';
import ServiceHeader from '../components/ServiceHeader';

export default function TimingBelt() {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Prevent Engine Damage",
      description: "A failing timing belt can cause catastrophic engine damage. Regular replacement prevents costly repairs."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Maintain Performance",
      description: "A properly functioning timing belt ensures optimal engine timing and performance."
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Peace of Mind",
      description: "Know your engine is protected with our expert timing belt service."
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Expert Service",
      description: "Our skilled technicians have extensive experience with all types of timing belt systems."
    }
  ];

  return (
    <Layout>
      <ServiceHeader
        title="Timing Belt Service"
        description="Expert Timing Belt, Chain, and Wet Belt Repairs"
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
            className="glass-effect rounded-2xl p-8 mb-16"
          >
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Your vehicle's timing belt is crucial for proper engine operation. It synchronizes the rotation of the crankshaft and camshaft, ensuring your engine's valves open and close at the right time. A failing timing belt can lead to severe engine damage.
              </p>
              <p className="text-lg">
                At ATB Motor Engineers, we specialize in timing belt replacement and maintenance, helping you avoid costly engine repairs and maintain optimal performance.
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
              With decades of experience in timing belt replacement and maintenance, our skilled technicians understand the intricacies of various engine designs. We use manufacturer-recommended parts and follow precise specifications to ensure your engine runs smoothly and reliably.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}