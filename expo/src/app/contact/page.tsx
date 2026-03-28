import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <section className="relative h-64 overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
          alt="Contact Us"
          width={1050}
          height={700}
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 py-16 h-full flex flex-col justify-center relative z-10">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        </div>
      </section>
      
      <section className="bg-[#A0C1E5] py-12 px-4 mx-4 md:mx-8 -mt-8 relative z-20 rounded-lg mb-16">
        <div className="container mx-auto flex flex-col md:flex-row items-start text-white">
          <MapPin size={24} className="mr-6 mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold mb-3">Our Service Area</h2>
            <p className="text-lg mb-2">
              We provide mobile auto repair services throughout North West London and surrounding areas.
            </p>
            <p className="text-xl font-semibold text-[#F4C7AB]">
              No need to come to us - we bring our expertise to your location!
            </p>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#A0C1E5] flex items-center justify-center mr-4 text-white flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Service Area</h3>
                    <p className="text-gray-600 mb-1">North West London and surrounding areas</p>
                    <p className="text-[#F4C7AB] font-medium">We come to you!</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#A0C1E5] flex items-center justify-center mr-4 text-white flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600 mb-1">+44 20 1234 5678</p>
                    <a href="tel:+442012345678" className="text-[#A0C1E5] hover:underline">Call Now</a>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#A0C1E5] flex items-center justify-center mr-4 text-white flex-shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                    <p className="text-gray-600 mb-1">+44 20 1234 5678</p>
                    <a href="https://wa.me/442012345678" className="text-[#A0C1E5] hover:underline">Message Us</a>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#A0C1E5] flex items-center justify-center mr-4 text-white flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 mb-1">info@judeautorepairs.co.uk</p>
                    <a href="mailto:info@judeautorepairs.co.uk" className="text-[#A0C1E5] hover:underline">Send Email</a>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#A0C1E5] flex items-center justify-center mr-4 text-white flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}