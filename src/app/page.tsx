import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import { services } from '@/constants/services';

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const serviceId = parseInt(params.id, 10);
  const service = services.find(s => s.id === serviceId) || services[0];

  return (
    <div className="container-custom py-12">
      <div className="mb-8 relative h-[300px] rounded-xl overflow-hidden">
        <Image 
          src={service.image} 
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div>
        <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{service.description}</p>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Mobile Service</h2>
          <p className="text-gray-600 mb-4">
            Our mobile {service.title.toLowerCase()} service brings expert mechanics directly to your location in North West London. We save you time and hassle by performing repairs at your home or workplace.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">What We Offer</h2>
          <p className="text-gray-600 mb-4">
            Our team of certified mechanics provides comprehensive {service.title.toLowerCase()} services using the latest diagnostic equipment and genuine parts. We ensure your vehicle is running at its optimal performance level.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Why Choose Us</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
              <span>Mobile Service - We Come To You</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
              <span>Certified Technicians</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
              <span>Genuine Parts & Accessories</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
              <span>12-Month Warranty</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
              <span>Competitive Pricing</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <p className="text-lg mb-6">
            Need this service? Contact us today for a free quote or to schedule an appointment. All inquiries are sent to info@judeautorepairs.co.uk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/contact" className="btn-primary">
              Book Now
            </Link>
          </div>
          
          <div className="flex justify-between max-w-xs mx-auto">
            <a href="tel:+442012345678" className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-2">
                <Phone size={20} className="text-white" />
              </div>
              <span className="text-sm">Call</span>
            </a>
            
            <a href="https://wa.me/442012345678" className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2">
                <MessageCircle size={20} className="text-white" />
              </div>
              <span className="text-sm">WhatsApp</span>
            </a>
            
            <Link href="/services" className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center mb-2">
                <ArrowLeft size={20} className="text-white" />
              </div>
              <span className="text-sm">Back</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}