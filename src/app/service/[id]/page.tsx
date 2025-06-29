import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { services } from '@/constants/services';
import { notFound } from 'next/navigation';

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const serviceId = parseInt(params.id);
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    notFound();
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <section className="relative h-64 overflow-hidden">
        <Image 
          src={service.image} 
          alt={service.title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 py-16 h-full flex flex-col justify-center relative z-10">
          <h1 className="text-4xl font-bold text-white">{service.title}</h1>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">About this Service</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            {service.description}
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            At Jude Auto Repairs, we provide professional mobile {service.title.toLowerCase()} at your location in North West London. 
            Our certified mechanics use state-of-the-art equipment to ensure your vehicle receives the best care possible.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Mobile Service</h3>
            <p className="text-gray-700">
              We come to your home or workplace, saving you time and hassle. No need to arrange transportation to a garage - 
              our fully equipped mobile units bring the workshop to you.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors">
              Book this Service
            </Link>
            <Link href="/services" className="bg-white hover:bg-gray-100 border border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold text-center transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Choose Jude Auto Repairs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-semibold mb-2">Mobile Convenience</h3>
              <p className="text-gray-600">We come to your location, saving you time and hassle.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-semibold mb-2">Certified Technicians</h3>
              <p className="text-gray-600">Our mechanics are fully qualified with years of experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">All repairs come with a 12-month warranty on parts and labor.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-blue-700 py-16 mb-16 mx-4 md:mx-8 rounded-lg">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need {service.title}?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to schedule mobile service at your location. We provide fast, reliable repairs with upfront pricing.
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