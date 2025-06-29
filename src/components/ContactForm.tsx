import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Thank You! Your message has been sent to info@judeautorepairs.co.uk. We'll get back to you shortly.");
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h2>
      <p className="text-gray-600 mb-6">
        Fill out the form below and we'll get back to you as soon as possible. Your message will be sent to info@judeautorepairs.co.uk.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>
        
        <div>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>
        
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>
        
        <div>
          <textarea
            placeholder="How can we help you? Please include your location and vehicle details."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>
        
        <button 
          type="submit"
          disabled={loading}
          className="flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full md:w-auto"
        >
          {loading ? (
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
          ) : (
            <Send size={18} className="mr-2" />
          )}
          Send Message
        </button>
      </form>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-700">
        <p className="text-sm text-gray-700">
          Note: This is a mobile service - we come to your location in North West London and surrounding areas.
        </p>
      </div>
    </div>
  );
}