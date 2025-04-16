import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, AlertCircle, Car, Wrench } from 'lucide-react';
import Layout from '../components/Layout';
import ServiceHeader from '../components/ServiceHeader';

export default function TimingBelt() {
  const benefits = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Avoid Serious Engine Damage",
      description: "A worn or broken belt or chain can cause engine misfires—or worse, catastrophic engine failure."
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Keep Your Engine Running Smoothly",
      description: "Correctly functioning timing components help your engine perform at its best, delivering smoother, more efficient driving."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Stay Safe on the Road",
      description: "If a timing belt or chain snaps, it can cause your engine to cut out suddenly—posing a serious safety risk."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Extend Engine Lifespan",
      description: "Preventing stress and damage to engine internals helps your vehicle stay healthier for longer."
    }
  ];

  return (
    <Layout>
      <ServiceHeader
        title="Timing Belt Service"
        description="The Importance of Timing Belt, Chain, and Wet Belt Repairs – And Why ATB Motor Engineers Is the Right Choice"
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
                The timing belt or chain is a vital part of your engine, keeping everything running in perfect sync. If these components wear out or fail, it can lead to major engine damage and costly repairs. At ATB Motor Engineers, we specialise in expert timing belt, timing chain, and wet belt repairs—ensuring your engine stays reliable and efficient.
              </p>
              <h3 className="text-2xl font-bold text-gradient-automotive mb-4">
                Why Timing Belt, Chain, and Wet Belt Repairs Matter
              </h3>
              <p className="text-lg">
                These parts are responsible for coordinating the precise movement of your engine's valves and pistons. When they're not in top condition, serious issues can occur. Here's why timely maintenance and repairs are so important:
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
              At ATB Motor Engineers, we're trusted specialists in timing belts, chains, and wet belts—an increasingly common system in modern engines. Our technicians use top-quality parts, cutting-edge tools, and years of hands-on experience to deliver accurate and reliable repairs. Whether it's time for a scheduled replacement or you've noticed signs of wear, we're here to help with honest advice and expert service.
            </p>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
}