import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { services } from '@/constants/services';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <section className="relative h-64 overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
          alt="Services"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 py-16 h-full flex flex-col justify-center relative z-10">
          <h1 className="text-4xl font-bold text-white">Our Services</h1>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Mobile Auto Repair Services</h2>
          <p className="text-gray-600">
            At Jude Auto Repairs, we bring professional auto repair services to your location in North West London. 
            From diagnostics to major repairs, our certified mechanics are equipped to handle all your vehicle needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>
      
      <section className="bg-blue-700 py-16 mb-16 mx-4 md:mx-8 rounded-lg">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need a specific repair?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us for specialized services or to discuss your vehicle issues. We provide personalized solutions at your location.
          </p>
          <Link href="/contact" className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
            Get a Quote
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}