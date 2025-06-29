import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-start">
          <MapPin size={24} className="text-primary mr-4 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Our Service Area</h2>
            <p className="text-gray-600 mb-2">
              We provide mobile auto repair services throughout North West London and surrounding areas.
            </p>
            <p className="text-secondary font-medium">
              No need to come to us - we bring our expertise to your location!
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mb-4">
              <MapPin size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Service Area</h3>
            <p className="text-gray-600 mb-1">North West London and surrounding areas</p>
            <p className="text-secondary font-medium">We come to you!</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mb-4">
              <Phone size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-600 mb-1">+44 20 1234 5678</p>
            <a href="tel:+442012345678" className="text-primary font-medium">Call Now</a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mb-4">
              <MessageCircle size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-1">+44 20 1234 5678</p>
            <a href="https://wa.me/442012345678" className="text-primary font-medium">Message Us</a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mb-4">
              <Mail size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-600 mb-1">info@judeautorepairs.co.uk</p>
            <a href="mailto:info@judeautorepairs.co.uk" className="text-primary font-medium">Send Email</a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mb-4">
              <Clock size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Business Hours</h3>
            <p className="text-gray-600 mb-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p className="text-gray-600 mb-1">Saturday: 9:00 AM - 4:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <ContactForm />
      </div>
    </div>
  );
}