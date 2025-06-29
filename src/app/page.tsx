import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Clock, Mail, MessageCircle, ChevronRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { services, testimonials } from '@/constants/services';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
          alt="Auto Repair"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 py-16 h-full flex flex-col justify-end relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Mobile Auto Repairs in North West London</h1>
          <p className="text-xl text-white mb-8">We Come To You - Mechanical & Electrical Specialists</p>
          <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold w-fit transition-colors">
            Book Now
          </Link>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="bg-white shadow-md py-6 px-4 mx-4 md:mx-8 -mt-12 relative z-20 rounded-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-center gap-6">
          <a href="tel:+442012345678" className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition-colors">
            <Phone size={24} className="text-blue-700" />
            <span>Call Us</span>
          </a>
          <div className="hidden md:block border-r border-gray-200 h-8"></div>
          <a href="https://wa.me/442012345678" className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition-colors">
            <MessageCircle size={24} className="text-blue-700" />
            <span>WhatsApp</span>
          </a>
          <div className="hidden md:block border-r border-gray-200 h-8"></div>
          <div className="flex items-center gap-3 text-gray-700">
            <Clock size={24} className="text-blue-700" />
            <span>Mon-Sat: 8AM-6PM</span>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <Link href="/services" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 transition-colors">
            <span>See All</span>
            <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map(service => (
            <ServiceCard key={service.id} {...service} compact />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Us</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <Image 
                src="https://images.unsplash.com/photo-1599256621730-535171e28e50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="About Us"
                width={800}
                height={400}
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-gray-700 mb-6 text-lg">
                With over 15 years of experience, Jude Auto Repairs provides expert mobile mechanical and electrical repair services in North West London. We come to you!
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
                  <span className="text-gray-700">Mobile Service - We Come To You</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
                  <span className="text-gray-700">Certified Mechanics</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
                  <span className="text-gray-700">Genuine Parts</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
                  <span className="text-gray-700">12-Month Warranty</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Customers Say</h2>
        <div className="flex overflow-x-auto gap-6 pb-4">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 py-16 mb-16 mx-4 md:mx-8 rounded-lg">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need mobile auto repairs?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We come to your home or workplace. Contact us today for a free quote or to schedule an appointment.
          </p>
          <Link href="/contact" className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}