import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle } from 'lucide-react';
import { services } from '@/data/services';
import styles from './services.module.css';

export default function ServicesPage() {
  return (
    <div className={styles.container}>
      <div className="container">
        <section className={styles.servicesHeader}>
          <h1 className={styles.title}>Our Mobile Services</h1>
          <p className={styles.subtitle}>
            We offer a comprehensive range of mechanical and electrical repair services for all makes and models. Our mobile service means we come to you - at home or work!
          </p>
        </section>
        
        <section className={styles.servicesGrid}>
          {services.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceImageContainer}>
                <Image 
                  src={service.image} 
                  alt={service.title}
                  width={400}
                  height={250}
                  className={styles.serviceImage}
                />
                <div className={styles.serviceOverlay}></div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceIconCircle}>
                    <Image 
                      src={`/icons/${service.icon}.svg`} 
                      alt={service.title} 
                      width={24} 
                      height={24} 
                    />
                  </div>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <Link href={`/services/${service.id}`} className={styles.serviceLink}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
        
        <section className={styles.infoSection}>
          <h2 className={styles.infoTitle}>Need a Custom Service?</h2>
          <p className={styles.infoText}>
            If you don't see what you're looking for, please contact us. We offer many specialized mobile services and can provide a custom quote for your specific needs.
          </p>
          <div className={styles.buttonContainer}>
            <Link href="/contact" className={`btn btn-primary ${styles.contactButton}`}>
              <Phone size={18} />
              <span>Contact Us</span>
            </Link>
            <a href="https://wa.me/442012345678" className={`btn btn-secondary ${styles.whatsappButton}`}>
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}