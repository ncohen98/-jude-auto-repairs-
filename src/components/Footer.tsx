import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Jude Auto Repairs</h3>
            <p className="text-gray-300">Mobile auto repair services in North West London and surrounding areas. We come to you!</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin size={20} className="text-[#F4C7AB]" />
                <span className="text-gray-300">North West London</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#F4C7AB]" />
                <a href="tel:+442012345678" className="text-gray-300 hover:text-white transition-colors">+44 20 1234 5678</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#F4C7AB]" />
                <a href="mailto:info@judeautorepairs.co.uk" className="text-gray-300 hover:text-white transition-colors">info@judeautorepairs.co.uk</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={20} className="text-[#F4C7AB]" />
                <a href="https://wa.me/442012345678" className="text-gray-300 hover:text-white transition-colors">WhatsApp Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jude Auto Repairs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}