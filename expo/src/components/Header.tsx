import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#A0C1E5]">
          Jude Auto Repairs
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-gray-700 hover:text-[#A0C1E5] transition-colors">Home</Link>
          <Link href="/services" className="text-gray-700 hover:text-[#A0C1E5] transition-colors">Services</Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#A0C1E5] transition-colors">Contact</Link>
        </nav>
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} className="text-[#A0C1E5]" /> : <Menu size={24} className="text-[#A0C1E5]"/>}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-gray-700 hover:text-[#A0C1E5] transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-[#A0C1E5] transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#A0C1E5] transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}