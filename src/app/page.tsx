import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="container-custom py-12">
      <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex flex-col md:flex-row items-start">
        <MapPin className="text-primary mr-4 mt-1 flex-shrink-0" size={24} />
        <div>
          <h2 className="text-xl font-semibold mb-2">Our Service Area</h2>
          <p className="text-textLight mb-2">
            We provide mobile auto repair services throughout North West London and surrounding areas.
          </p>
          <p className="text-secondary font-medium">
            No need to come to us - we bring our expertise to your location!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="space-y-6">
            <div className="flex">
              <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Service Area</h3>
                <p className="text-textLight">North West London and surrounding areas</p>
                <p className="text-secondary font-medium mt-1">We come to you!</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 flex">
              <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-textLight">+44 20 1234 5678</p>
                <a href="tel:+442012345678" className="text-primary font-medium mt-1 inline-block">
                  Call Now
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 flex">
              <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                <MessageCircle className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">WhatsApp</h3>
                <p className="text-textLight">+44 20 1234 5678</p>
                <a href="https://wa.me/442012345678" className="text-primary font-medium mt-1 inline-block">
                  Message Us
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 flex">
              <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-textLight">info@judeautorepairs.co.uk</p>
                <a href="mailto:info@judeautorepairs.co.uk" className="text-primary font-medium mt-1 inline-block">
                  Send Email
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 flex">
              <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                <Clock className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Business Hours</h3>
                <p className="text-textLight">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-textLight">Saturday: 9:00 AM - 4:00 PM</p>
                <p className="text-textLight">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-textLight mb-6">
            Fill out the form below and we'll get back to you as soon as possible. Your message will be sent to info@judeautorepairs.co.uk.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}