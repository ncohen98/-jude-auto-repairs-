import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Platform } from "react-native";
import Colors from "@/constants/colors";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react-native";

export default function ContactScreen() {
  const handleCallPress = () => {
    Linking.openURL("tel:+442012345678");
  };

  const handleWhatsAppPress = () => {
    Linking.openURL("https://wa.me/442012345678");
  };

  const handleEmailPress = () => {
    Linking.openURL("mailto:info@judeautorepairs.co.uk");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.serviceAreaContainer}>
        <View style={styles.serviceAreaContent}>
          <MapPin size={24} color={Colors.light.primary} style={styles.serviceAreaIcon} />
          <View>
            <Text style={styles.serviceAreaTitle}>Our Service Area</Text>
            <Text style={styles.serviceAreaText}>
              We provide mobile auto repair services throughout North West London and surrounding areas.
            </Text>
            <Text style={styles.serviceAreaHighlight}>
              No need to come to us - we bring our expertise to your location!
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <View style={styles.infoItem}>
            <View style={styles.iconContainer}>
              <MapPin size={24} color={Colors.light.primary} />
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Service Area</Text>
              <Text style={styles.infoText}>North West London and surrounding areas</Text>
              <Text style={styles.infoHighlight}>We come to you!</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoItem}>
            <View style={styles.iconContainer}>
              <Phone size={24} color={Colors.light.primary} />
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Phone</Text>
              <Text style={styles.infoText}>+44 20 1234 5678</Text>
              <TouchableOpacity onPress={handleCallPress}>
                <Text style={styles.infoLink}>Call Now</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoItem}>
            <View style={styles.iconContainer}>
              <MessageCircle size={24} color={Colors.light.primary} />
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>WhatsApp</Text>
              <Text style={styles.infoText}>+44 20 1234 5678</Text>
              <TouchableOpacity onPress={handleWhatsAppPress}>
                <Text style={styles.infoLink}>Message Us</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoItem}>
            <View style={styles.iconContainer}>
              <Mail size={24} color={Colors.light.primary} />
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoText}>info@judeautorepairs.co.uk</Text>
              <TouchableOpacity onPress={handleEmailPress}>
                <Text style={styles.infoLink}>Send Email</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoItem}>
            <View style={styles.iconContainer}>
              <Clock size={24} color={Colors.light.primary} />
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Business Hours</Text>
              <Text style={styles.infoText}>Monday - Friday: 8:00 AM - 6:00 PM</Text>
              <Text style={styles.infoText}>Saturday: 9:00 AM - 4:00 PM</Text>
              <Text style={styles.infoText}>Sunday: Closed</Text>
            </View>
          </View>
        </View>
      </View>

      <ContactForm />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  serviceAreaContainer: {
    backgroundColor: Colors.light.card,
    padding: 16,
    marginBottom: 16,
  },
  serviceAreaContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  serviceAreaIcon: {
    marginRight: 16,
    marginTop: 4,
  },
  serviceAreaTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.light.text,
    marginBottom: 8,
  },
  serviceAreaText: {
    fontSize: 16,
    color: Colors.light.textLight,
    marginBottom: 8,
    lineHeight: 22,
  },
  serviceAreaHighlight: {
    fontSize: 16,
    color: Colors.light.secondary,
    fontWeight: "500",
  },
  infoContainer: {
    padding: 16,
  },
  infoCard: {
    backgroundColor: Colors.light.card,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoItem: {
    flexDirection: "row",
    marginVertical: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(26, 58, 108, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.light.text,
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    color: Colors.light.textLight,
    marginBottom: 2,
  },
  infoHighlight: {
    fontSize: 14,
    color: Colors.light.secondary,
    fontWeight: "bold",
    marginTop: 4,
  },
  infoLink: {
    fontSize: 14,
    color: Colors.light.primary,
    fontWeight: "500",
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.light.border,
    marginVertical: 12,
  },
});