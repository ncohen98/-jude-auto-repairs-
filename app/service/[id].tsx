import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Linking } from "react-native";
import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import Colors from "@/constants/colors";
import { services } from "@/constants/services";
import { ArrowLeft, Phone, MessageCircle } from "lucide-react-native";

export default function ServiceDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  
  const serviceId = typeof id === "string" ? parseInt(id, 10) : 1;
  const service = services.find(s => s.id === serviceId) || services[0];

  const handleCallPress = () => {
    Linking.openURL("tel:+442012345678");
  };

  const handleWhatsAppPress = () => {
    Linking.openURL("https://wa.me/442012345678");
  };

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen 
        options={{
          title: service.title,
          headerBackTitle: "Services",
        }}
      />
      
      <Image source={{ uri: service.image }} style={styles.image} />
      
      <View style={styles.content}>
        <Text style={styles.title}>{service.title}</Text>
        <Text style={styles.description}>{service.description}</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mobile Service</Text>
          <Text style={styles.sectionText}>
            Our mobile {service.title.toLowerCase()} service brings expert mechanics directly to your location in North West London. We save you time and hassle by performing repairs at your home or workplace.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What We Offer</Text>
          <Text style={styles.sectionText}>
            Our team of certified mechanics provides comprehensive {service.title.toLowerCase()} services using the latest diagnostic equipment and genuine parts. We ensure your vehicle is running at its optimal performance level.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Choose Us</Text>
          <View style={styles.bulletPoints}>
            <View style={styles.bulletPoint}>
              <View style={styles.bullet} />
              <Text style={styles.bulletText}>Mobile Service - We Come To You</Text>
            </View>
            <View style={styles.bulletPoint}>
              <View style={styles.bullet} />
              <Text style={styles.bulletText}>Certified Technicians</Text>
            </View>
            <View style={styles.bulletPoint}>
              <View style={styles.bullet} />
              <Text style={styles.bulletText}>Genuine Parts & Accessories</Text>
            </View>
            <View style={styles.bulletPoint}>
              <View style={styles.bullet} />
              <Text style={styles.bulletText}>12-Month Warranty</Text>
            </View>
            <View style={styles.bulletPoint}>
              <View style={styles.bullet} />
              <Text style={styles.bulletText}>Competitive Pricing</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.ctaContainer}>
          <Text style={styles.ctaText}>
            Need this service? Contact us today for a free quote or to schedule an appointment. All inquiries are sent to info@judeautorepairs.co.uk.
          </Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={[styles.button, styles.primaryButton]}
              onPress={() => router.push("/contact")}
            >
              <Text style={styles.primaryButtonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.contactOptions}>
            <TouchableOpacity 
              style={styles.contactOption}
              onPress={handleCallPress}
            >
              <View style={[styles.contactIconContainer, {backgroundColor: Colors.light.primary}]}>
                <Phone size={20} color="white" />
              </View>
              <Text style={styles.contactOptionText}>Call</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.contactOption}
              onPress={handleWhatsAppPress}
            >
              <View style={[styles.contactIconContainer, {backgroundColor: Colors.light.secondary}]}>
                <MessageCircle size={20} color="white" />
              </View>
              <Text style={styles.contactOptionText}>WhatsApp</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.contactOption}
              onPress={() => router.back()}
            >
              <View style={[styles.contactIconContainer, {backgroundColor: "#666"}]}>
                <ArrowLeft size={20} color="white" />
              </View>
              <Text style={styles.contactOptionText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  image: {
    width: "100%",
    height: 250,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.light.text,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: Colors.light.textLight,
    lineHeight: 24,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.light.text,
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 16,
    color: Colors.light.textLight,
    lineHeight: 24,
  },
  bulletPoints: {
    marginTop: 8,
  },
  bulletPoint: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.light.primary,
    marginRight: 12,
  },
  bulletText: {
    fontSize: 16,
    color: Colors.light.text,
  },
  ctaContainer: {
    backgroundColor: Colors.light.card,
    borderRadius: 12,
    padding: 20,
    marginTop: 8,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  ctaText: {
    fontSize: 16,
    color: Colors.light.text,
    marginBottom: 20,
    lineHeight: 24,
  },
  buttonRow: {
    marginBottom: 20,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: Colors.light.primary,
  },
  primaryButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  contactOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contactOption: {
    alignItems: "center",
    flex: 1,
  },
  contactIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  contactOptionText: {
    fontSize: 14,
    color: Colors.light.text,
  },
});