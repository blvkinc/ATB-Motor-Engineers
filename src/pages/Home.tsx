import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Car, 
  Wrench as WrenchIcon, 
  Clock, 
  Shield, 
  Phone,
  MapPin,
  Mail,
  ChevronDown,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Star,
  Quote,
  Gauge
} from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

export default function Home() {
  const services = [
    {
      icon: <Car />,
      title: "MOT Testing",
      description: "Professional MOT testing to ensure your vehicle meets safety and environmental standards",
      link: "/services/mot"
    },
    {
      icon: <WrenchIcon />,
      title: "Car Servicing",
      description: "Thorough and tailored car servicing to keep your vehicle running at its best",
      link: "/services/car-servicing"
    },
    {
      icon: <Clock />,
      title: "Timing Belt Service",
      description: "Expert timing belt, chain, and wet belt repairs to prevent engine damage",
      link: "/services/timing-belt"
    },
    {
      icon: <Shield />,
      title: "Welding Services",
      description: "Professional welding for structural repairs and custom fabrication work",
      link: "/services/welding"
    },
    {
      icon: <WrenchIcon />,
      title: "Mechanical Repairs",
      description: "Comprehensive mechanical repairs for all vehicle systems",
      link: "/services/mechanical-repairs"
    }
  ];

  // Reviews data
  const reviews = [
    {
      name: "Jennifer L.",
      rating: 5,
      text: "Fantastic service from ATB Motor Engineers! They diagnosed and fixed the problem with my car quickly and at a reasonable price. They even provided a courtesy car while mine was being repaired.",
    },
    {
      name: "Michael T.",
      rating: 4,
      text: "Professional and reliable service. I've been taking my vehicles to ATB for years and they always deliver quality work. The staff are friendly and explain everything clearly.",
    },
    {
      name: "Sarah K.",
      rating: 5,
      text: "The team at ATB went above and beyond to help me when my car broke down. Their mechanical expertise is impressive and they got me back on the road quickly. Highly recommended!",
    },
  ];

  return (
    <Layout>
      {/* Hero Section - Automotive Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* High-tech Automotive Background */}
        <div className="absolute inset-0 bg-black">
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ff3f3f\' fill-opacity=\'0.3\'%3E%3Cpath d=\'M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM0 3.41l2.83-2.83 1.41 1.41L1.41 4.41H0V3.41zM17.41 40l2.83-2.83 1.41 1.41L18.83 40h-1.41zM17.41 22.24l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM17.41 4.41l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V4.41zM34.83 40l2.83-2.83 1.41 1.41L36.24 40h-1.41zM34.83 22.24l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM34.83 4.41l2.83-2.83L39.07.17l-2.83 2.83h-1.41V4.41z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: '40px 40px'
            }}
          />
          
          {/* Animated gradient background */}
          <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-gray-900 via-black to-blue-900 animate-gradient-shift" />
          
          {/* Glowing horizontal lines */}
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent top-1/4 opacity-70"></div>
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent top-3/4 opacity-70"></div>
        </div>

        {/* Content with Split Layout */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 items-center gap-16">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm px-4 py-1.5 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Gauge className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">Derby's Premier Auto Experts</span>
              </motion.div>
              
              {/* Heading */}
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="block text-white mb-2">Precision</span>
                <span className="text-gradient-automotive">Motor Engineering</span>
              </motion.h1>
              
              {/* Description */}
              <motion.p
                className="text-gray-300 text-lg mb-10 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                At ATB Motor Engineers, we combine advanced technology with expert craftsmanship to deliver exceptional automotive services tailored to your needs.
              </motion.p>
              
              {/* Features */}
              <motion.div
                className="grid grid-cols-2 gap-4 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {[
                  "Expert Technicians", 
                  "Cutting-Edge Equipment",
                  "Transparent Pricing", 
                  "Guaranteed Satisfaction"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-500/20 mr-3">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <a 
                  href="#services" 
                  className="relative overflow-hidden group rounded-full bg-gradient-to-r from-blue-600 to-gray-800 px-8 py-3.5 inline-flex items-center"
                >
                  <span className="relative z-10 text-white font-medium">View Our Services</span>
                  <ChevronDown className="w-5 h-5 ml-2 relative z-10 text-white" />
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </a>
                
                <a 
                  href="tel:01332224229" 
                  className="rounded-full backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 px-8 py-3.5 inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">Call Us Now</span>
                </a>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Image & Decorative Elements */}
            <motion.div
              className="relative order-1 md:order-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative">
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-gray-600 rounded-2xl blur-md opacity-30"></div>
                
                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900/50 backdrop-blur-sm aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200" 
                    alt="Automotive Engineer" 
                    className="w-full h-full object-cover mix-blend-lighten opacity-95"
                    onError={(e) => {
                      console.warn('Hero image failed to load, falling back to alternative image');
                      e.currentTarget.src = "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200";
                    }}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-gray-900/20 mix-blend-color-dodge"></div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-gray-500 to-transparent"></div>
                  
                  {/* Stats badge */}
                  <div className="absolute bottom-4 right-4 backdrop-blur-md bg-black/40 rounded-lg px-4 py-2 border border-white/10">
                    <div className="text-blue-300 font-medium">40+ Years Experience</div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-6 -left-6 w-16 h-16 rounded-full backdrop-blur-md bg-gradient-to-br from-blue-500/20 to-gray-500/20 border border-white/10 flex items-center justify-center"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                >
                  <Car className="w-8 h-8 text-blue-400" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full backdrop-blur-md bg-gradient-to-br from-gray-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                >
                  <WrenchIcon className="w-10 h-10 text-gray-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-blue-400 text-sm mb-1 opacity-80">Discover More</span>
          <ChevronDown className="w-6 h-6 text-blue-400" />
        </motion.div>
      </section>

      {/* Services Section - Automotive Design */}
      <section id="services" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-automotive">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer a comprehensive range of automotive services to keep your vehicle in perfect condition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={service.link} className="block h-full">
                  <div className="card h-full p-6 flex flex-col bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/30 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 group">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-blue-600/20 to-gray-600/20 w-fit mb-5">
                      <div className="text-blue-400 w-10 h-10 group-hover:text-blue-300 transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-5 flex-grow">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300 mt-auto">
                      <span className="mr-2 font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section - Automotive Design */}
      <section id="reviews" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm px-4 py-1.5 mb-6">
              <div className="flex items-center mr-2">
                {[1, 2, 3, 4].map((_, index) => (
                  <Star key={index} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
              </div>
              <span className="text-blue-300 text-sm font-medium">4.4 out of 5 stars</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-automotive">Customer Reviews</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it - hear what our customers have to say about our service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card h-full p-8 relative automotive-glass-effect rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 group">
                  {/* Quote icon */}
                  <div className="absolute -top-4 -left-2">
                    <div className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-gray-600">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Star rating */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                  
                  {/* Review text */}
                  <p className="text-gray-300 mb-6 italic">
                    "{review.text}"
                  </p>
                  
                  {/* Reviewer name */}
                  <p className="text-blue-400 font-medium">
                    - {review.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <a 
              href="https://www.google.com/search?q=atb+motor+engineers+derby#lrd=0x4879f1314fabe39b:0xd340b3d3a419393c,1,,," 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 px-8 py-3.5 inline-flex items-center gap-2"
            >
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-white font-medium">See All Reviews on Google</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Automotive Design */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="automotive-glass-effect rounded-2xl p-8"
          >
            <h2 className="text-4xl font-bold text-center mb-16 text-gradient-automotive">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 p-4 automotive-glass-effect rounded-lg hover:bg-gray-800/50 transition-colors">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-gray-600">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <span>01332 224229</span>
                </div>
                <div className="flex items-center space-x-4 p-4 automotive-glass-effect rounded-lg hover:bg-gray-800/50 transition-colors">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-gray-600">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <span>12 Wild St, Derby DE1 1GN</span>
                </div>
                <div className="flex items-center space-x-4 p-4 automotive-glass-effect rounded-lg hover:bg-gray-800/50 transition-colors">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-gray-600">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <span>atbmotorengineers@gmail.com</span>
                </div>
              </motion.div>
              <motion.div 
                className="h-[400px] rounded-lg overflow-hidden automotive-glass-effect"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2404.957853763249!2d-1.4746818839671516!3d52.92341697989271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e5b2a7b732e1%3A0x8b2f0d7c0b5b2b0a!2sDerby%20DE1%201GN%2C%20UK!5e0!3m2!1sen!2sus!4v1629789012345!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}