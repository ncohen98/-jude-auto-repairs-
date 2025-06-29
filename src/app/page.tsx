import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div>
      <Header />
      
      <div className="container-custom py-16">
        <div className="bg-primary text-white p-8 rounded-lg mb-12">
          <div className="flex flex-col md:flex-row items-start">
            <MapPin size={24} className="mr-6 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-3">Our Service Area</h2>
              <p className="text-lg mb-2">
                We provide mobile auto repair services throughout North West London and surrounding areas.
              </p>
              <p className="text-xl font-semibold text-secondary">
                No need to come to us - we bring our expertise to your location!
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4 text-primary flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Service Area</h3>
                    <p className="text-gray-600 mb-1">North West London and surrounding areas</p>
                    <p className="text-secondary font-medium">We come to you!</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4 text-primary flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600 mb-1">+44 20 1234 5678</p>
                    <a href="tel:+442012345678" className="text-primary hover:underline">Call Now</a>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4 text-primary flex-shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                    <p className="text-gray-600 mb-1">+44 20 1234 5678</p>
                    <a href="https://wa.me/442012345678" className="text-primary hover:underline">Message Us</a>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4 text-primary flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 mb-1">info@judeautorepairs.co.uk</p>
                    <a href="mailto:info@judeautorepairs.co.uk" className="text-primary hover:underline">Send Email</a>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4 text-primary flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p