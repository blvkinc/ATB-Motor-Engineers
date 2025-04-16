import React from 'react';
import { motion } from 'framer-motion';
import { Car, Clock, Users, Shield, Wrench, Target, CheckCircle, Heart, Star } from 'lucide-react';
import Layout from '../components/Layout';

export default function About() {
  const features = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Since 1986",
      description: "Owner Steve Lewis has been in the industry since 1986, bringing decades of expertise to every service."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Customer-Focused",
      description: "We offer hassle-free and affordable service where customer needs always take priority."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Quality Workmanship",
      description: "We pride ourselves on excellent quality workmanship and operating to modern standards."
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Comprehensive Services",
      description: "From MOTs to mechanical repairs, we provide a complete range of automotive engineering services."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-black/50 to-black" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-automotive">
              About ATB Motor Engineers
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Derby's Trusted Motor Engineering Company
            </p>
          </motion.div>
        </div>
      </motion.section>

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
                A friendly and reliable team who work hard to maintain our reputation as one of Derby's most trustworthy motor engineering companies.
              </p>
              <p className="text-lg">
                Welcome to ATB. With our experience and location, we are an ideal garage for you to trust with your car. Owner Steve Lewis has been in the industry since 1986, meaning he's seen it all, and our location in Derby City Centre means we're ideally situated for any looking to leave their vehicle with us before they head off to work or the shops.
              </p>
              <p className="text-lg">
                We pride ourselves on offering a hassle free and affordable service where the customer needs always take priority, as do excellent quality workmanship and operating to modern standards. As a company we are confident that we can meet all your requirements on your next motor engineering project and also exceed your expectations when it comes to quality and affordable motor engineers in Derby.
              </p>
              <p className="text-lg">
                All of our team are highly skilled in the motor engineering trade and have built up a wealth of experience over the last several years, so no job is too demanding for us as we have all been trained to deal with every situation that the motor engineering trade can offer.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-gray-700 w-fit mb-4">
                      <Wrench className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
} 