import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import Colors from "@/constants/colors";
import { services } from "@/constants/services";
import ServiceCard from "@/components/ServiceCard";
import { Phone, MessageCircle } from "lucide-react-native";
import { useRouter } from "expo-router";
import { Linking } from "react-native";

export default function ServicesScreen() {
  const router = useRouter();

  const handleWhatsAppPress = () => {
    Linking.openURL("https://wa.me/442012345678");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Our Mobile Services</Text>
      <Text style={styles.subtitle}>
        We offer a comprehensive range of mechanical and electrical repair services for all makes and models. Our mobile service means we come to you - at home or work!
      </Text>
      
      <View style={styles.servicesContainer}>
        {services.map(service => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </View>
      
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Need a Custom Service?</Text>
        <Text style={styles.infoText}>
          If you don't see what you're looking for, please contact us. We offer many specialized mobile services and can provide a custom quote for your specific needs.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.contactButton}
            onPress={() => router.push("/contact")}
          >
            <Phone size={18} color="white" style={styles.buttonIcon} />
            <Text style={styles.contactButtonText}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.whatsappButton}
            onPress={handleWhatsAppPress}
          >
            <MessageCircle size={18} color="white" style={styles.buttonIcon} />
            <Text style={styles.contactButtonText}>WhatsApp</Text>
          </TouchableOpacity>
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
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.light.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.light.textLight,
    marginBottom: 24,
    lineHeight: 22,
  },
  servicesContainer: {
    marginBottom: 32,
  },
  infoSection: {
    backgroundColor: Colors.light.card,
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.light.text,
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    color: Colors.light.textLight,
    marginBottom: 20,
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contactButton: {
    backgroundColor: Colors.light.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
  },
  whatsappButton: {
    backgroundColor: Colors.light.secondary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginLeft: 8,
  },
  buttonIcon: {
    marginRight: 8,
  },
  contactButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});