import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Wrench, Sparkles, Settings } from 'lucide-react';
import Layout from '../components/Layout';
import ServiceHeader from '../components/ServiceHeader';

export default function WeldingService() {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Maintains Structural Integrity",
      description: "Chassis or body damage can compromise your vehicle's safety. Expert welding repairs reinforce the structure and bring it back to spec."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Boosts Durability",
      description: "Strong, clean welds protect against future rust and wear, giving your vehicle long-term resilience on the road."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Enhances Visual Appeal",
      description: "Well-executed welding leaves a neat finish that blends seamlessly with the rest of your vehicle, maintaining or improving its look."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Enables Custom Work",
      description: "Whether you're modifying for style, performance, or utility, welding makes tailored solutions possible."
    }
  ];

  return (
    <Layout>
      <ServiceHeader
        title="Welding Services"
        description="The Importance of Professional Car Welding – And Why ATB Motor Engineers Is the Right Choice"
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
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
                When it comes to keeping your vehicle safe and structurally sound, expert welding is essential. From repairing corroded panels and damaged chassis sections to custom fabrication work, quality welding ensures strength, safety, and long-lasting results. At ATB Motor Engineers, our skilled in-house welders deliver precise, high-standard welding services designed to restore and enhance your vehicle with care and expertise.
              </p>
              <h3 className="text-2xl font-bold text-gradient-automotive mb-4">
                Why Expert Car Welding Matters
              </h3>
              <p className="text-lg">
                Welding is more than just metalwork—it plays a key role in preserving your vehicle's performance, safety, and lifespan. Here's why professional welding is so important:
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
            <h2 className="text-3xl font-bold mb-6 text-gradient-automotive">Why Choose ATB Motor Engineers for Welding Services?</h2>
            <p className="text-lg text-gray-300">
              At ATB Motor Engineers, we take pride in the quality of our welding work. Whether it's structural repairs, rust restoration, or custom fabrication, our technicians use precision tools and expert techniques to get the job done right. With a strong focus on safety, reliability, and attention to detail, you can trust us to handle your vehicle as if it were our own.
            </p>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
}