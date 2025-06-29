import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Linking } from "react-native";
import { useRouter } from "expo-router";
import Colors from "@/constants/colors";
import { commonStyles } from "@/styles/common";
import { services, testimonials } from "@/constants/services";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { MapPin, Clock, Phone, ChevronRight, MessageCircle } from "lucide-react-native";

export default function HomeScreen() {
  const router = useRouter();

  const handleCallPress = () => {
    Linking.openURL("tel:+442012345678");
  };

  const handleWhatsAppPress = () => {
    Linking.openURL("https://wa.me/442012345678");
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <Image 
          source={{ uri: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" }} 
          style={styles.heroImage} 
        />
        <View style={styles.heroOverlay} />
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Mobile Auto Repairs in North West London</Text>
          <Text style={styles.heroSubtitle}>We Come To You - Mechanical & Electrical Specialists</Text>
          <TouchableOpacity 
            style={styles.heroButton}
            onPress={() => router.push("/contact")}
          >
            <Text style={styles.heroButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Quick Info Section */}
      <View style={styles.quickInfoContainer}>
        <TouchableOpacity style={styles.quickInfoItem} onPress={handleCallPress}>
          <Phone size={24} color={Colors.light.primary} />
          <Text style={styles.quickInfoText}>Call Us</Text>
        </TouchableOpacity>
        <View style={styles.quickInfoDivider} />
        <TouchableOpacity style={styles.quickInfoItem} onPress={handleWhatsAppPress}>
          <MessageCircle size={24} color={Colors.light.primary} />
          <Text style={styles.quickInfoText}>WhatsApp</Text>
        </TouchableOpacity>
        <View style={styles.quickInfoDivider} />
        <View style={styles.quickInfoItem}>
          <Clock size={24} color={Colors.light.primary} />
          <Text style={styles.quickInfoText}>Mon-Sat: 8AM-6PM</Text>
        </View>
      </View>

      {/* Services Preview Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Our Services</Text>
          <TouchableOpacity 
            style={styles.seeAllButton}
            onPress={() => router.push("/services")}
          >
            <Text style={styles.seeAllText}>See All</Text>
            <ChevronRight size={16} color={Colors.light.primary} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.servicesGrid}>
          {services.slice(0, 4).map(service => (
            <View key={service.id} style={styles.serviceItem}>
              <ServiceCard {...service} compact />
            </View>
          ))}
        </View>
      </View>

      {/* About Section */}
      <View style={[styles.section, styles.aboutSection]}>
        <Text style={styles.sectionTitle}>Why Choose Us</Text>
        <View style={styles.aboutContent}>
          <Image 
            source={{ uri: "https://images.unsplash.com/photo-1599256621730-535171e28e50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }} 
            style={styles.aboutImage} 
          />
          <View style={styles.aboutTextContainer}>
            <Text style={styles.aboutText}>
              With over 15 years of experience, Jude Auto Repairs provides expert mobile mechanical and electrical repair services in North West London. We come to you!
            </Text>
            <View style={styles.bulletPoints}>
              <View style={styles.bulletPoint}>
                <View style={styles.bullet} />
                <Text style={styles.bulletText}>Mobile Service - We Come To You</Text>
              </View>
              <View style={styles.bulletPoint}>
                <View style={styles.bullet} />
                <Text style={styles.bulletText}>Certified Mechanics</Text>
              </View>
              <View style={styles.bulletPoint}>
                <View style={styles.bullet} />
                <Text style={styles.bulletText}>Genuine Parts</Text>
              </View>
              <View style={styles.bulletPoint}>
                <View style={styles.bullet} />
                <Text style={styles.bulletText}>12-Month Warranty</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Testimonials Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What Our Customers Say</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.testimonialsList}
        >
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </ScrollView>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Need mobile auto repairs?</Text>
        <Text style={styles.ctaText}>
          We come to your home or workplace. Contact us today for a free quote or to schedule an appointment.
        </Text>
        <TouchableOpacity 
          style={styles.ctaButton}
          onPress={() => router.push("/contact")}
        >
          <Text style={styles.ctaButtonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  heroContainer: {
    height: 300,
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  heroContent: {
    padding: 24,
    flex: 1,
    justifyContent: "flex-end",
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.9)",
    marginBottom: 24,
  },
  heroButton: {
    backgroundColor: Colors.light.secondary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  heroButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  quickInfoContainer: {
    flexDirection: "row",
    backgroundColor: Colors.light.card,
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: -20,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quickInfoItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  quickInfoDivider: {
    width: 1,
    height: "80%",
    backgroundColor: Colors.light.border,
  },
  quickInfoText: {
    marginTop: 8,
    fontSize: 12,
    color: Colors.light.text,
    textAlign: "center",
  },
  section: {
    padding: 16,
    marginBottom: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.light.text,
  },
  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    fontSize: 14,
    color: Colors.light.primary,
    marginRight: 4,
  },
  servicesGrid: {
    flexDirection: "column",
  },
  serviceItem: {
    flex: 1,
  },
  aboutSection: {
    backgroundColor: Colors.light.card,
  },
  aboutContent: {
    marginTop: 16,
  },
  aboutImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  aboutTextContainer: {
    
  },
  aboutText: {
    fontSize: 16,
    color: Colors.light.text,
    lineHeight: 24,
    marginBottom: 16,
  },
  bulletPoints: {
    marginTop: 8,
  },
  bulletPoint: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.light.primary,
    marginRight: 8,
  },
  bulletText: {
    fontSize: 14,
    color: Colors.light.text,
  },
  testimonialsList: {
    paddingVertical: 8,
    paddingLeft: 0,
    paddingRight: 16,
  },
  ctaSection: {
    backgroundColor: Colors.light.primary,
    padding: 24,
    borderRadius: 12,
    margin: 16,
    alignItems: "center",
  },
  ctaTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 12,
    textAlign: "center",
  },
  ctaText: {
    fontSize: 16,
    color: "rgba(255,255,255,0.9)",
    marginBottom: 24,
    textAlign: "center",
  },
  ctaButton: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: Colors.light.primary,
    fontSize: 16,
    fontWeight: "600",
  },
});