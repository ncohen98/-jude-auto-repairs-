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
        <div