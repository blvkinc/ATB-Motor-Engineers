import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Car, 
  Wrench,
  Clock,
  Shield,
  ArrowRight,
  Sparkles,
  Gauge
} from 'lucide-react';
import Layout from '../components/Layout';

export default function Services() {
  const services = [
    {
      icon: <Car />,
      title: "MOT Testing",
      description: "Professional MOT testing to ensure your vehicle meets safety and environmental standards. Our certified testers provide thorough inspections and detailed reports.",
      link: "/services/mot",
      features: ["Certified MOT Testing", "Quick Turnaround", "Free Retests", "Digital Reports"]
    },
    {
      icon: <Wrench />,
      title: "Car Servicing",
      description: "Comprehensive car servicing packages tailored to your vehicle's needs. From interim to full services, we keep your car running at its best.",
      link: "/services/car-servicing",
      features: ["Full Service", "Interim Service", "Manufacturer Specs", "Genuine Parts"]
    },
    {
      icon: <Clock />,
      title: "Timing Belt Service",
      description: "Expert timing belt replacement and maintenance to prevent engine damage. We ensure precise installation and optimal performance.",
      link: "/services/timing-belt",
      features: ["Belt Replacement", "Chain Service", "Wet Belt Repairs", "Preventive Care"]
    },
    {
      icon: <Shield />,
      title: "Welding Services",
      description: "Professional welding for structural repairs and custom fabrication work. Our skilled technicians ensure strong, reliable repairs.",
      link: "/services/welding",
      features: ["Structural Repairs", "Custom Work", "MIG Welding", "TIG Welding"]
    },
    {
      icon: <Wrench />,
      title: "Mechanical Repairs",
      description: "Comprehensive mechanical repairs for all vehicle systems. From engine work to suspension repairs, we fix it all.",
      link: "/services/mechanical-repairs",
      features: ["Engine Repairs", "Suspension Work", "Brake Service", "Diagnostics"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ff3f3f\' fill-opacity=\'0.3\'%3E%3Cpath d=\'M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM0 3.41l2.83-2.83 1.41 1.41L1.41 4.41H0V3.41zM17.41 40l2.83-2.83 1.41 1.41L18.83 40h-1.41zM17.41 22.24l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM17.41 4.41l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V4.41zM34.83 40l2.83-2.83 1.41 1.41L36.24 40h-1.41zM34.83 22.24l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM34.83 4.41l2.83-2.83L39.07.17l-2.83 2.83h-1.41V4.41z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: '40px 40px'
            }}
          />
          <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-gray-900 via-black to-blue-900" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Service Badge */}
            <motion.div 
              className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm px-4 py-1.5 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Gauge className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm font-medium">Expert Automotive Services</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-automotive">Our Services</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer a comprehensive range of automotive services to keep your vehicle running at its best. Each service is delivered with expertise, precision, and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={service.link}>
                  <div className="automotive-glass-effect rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 group">
                    {/* Service Icon */}
                    <div className="p-4 rounded-lg bg-gradient-to-br from-blue-600/20 to-gray-600/20 w-fit mb-6">
                      <div className="text-blue-400 w-12 h-12 group-hover:text-blue-300 transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>

                    {/* Service Content */}
                    <h3 className="text-2xl font-bold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {service.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <Sparkles className="w-4 h-4 text-blue-400" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
} 