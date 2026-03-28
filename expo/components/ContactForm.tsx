import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, ActivityIndicator, Platform } from "react-native";
import Colors from "@/constants/colors";
import { commonStyles } from "@/styles/common";
import { Send } from "lucide-react-native";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!name || !email || !phone || !message) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        "Thank You!",
        "Your message has been sent to info@judeautorepairs.co.uk. We'll get back to you shortly.",
        [
          { 
            text: "OK", 
            onPress: () => {
              setName("");
              setEmail("");
              setPhone("");
              setMessage("");
            }
          }
        ]
      );
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get in Touch</Text>
      <Text style={styles.subtitle}>
        Fill out the form below and we'll get back to you as soon as possible. Your message will be sent to info@judeautorepairs.co.uk.
      </Text>
      
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="How can we help you? Please include your location and vehicle details."
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
      />
      
      <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Send Message</Text>
            <Send size={18} color="white" style={styles.buttonIcon} />
          </View>
        )}
      </TouchableOpacity>
      
      <View style={styles.noteContainer}>
        <Text style={styles.noteText}>
          Note: This is a mobile service - we come to your location in North West London and surrounding areas.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.light.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.light.textLight,
    marginBottom: 24,
  },
  input: {
    backgroundColor: Colors.light.card,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  messageInput: {
    height: 120,
    ...(Platform.OS === 'web' ? { height: 120 } : { textAlignVertical: 'top' }),
  },
  button: {
    backgroundColor: Colors.light.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonIcon: {
    marginLeft: 8,
  },
  noteContainer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: "rgba(26, 58, 108, 0.1)",
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: Colors.light.primary,
  },
  noteText: {
    fontSize: 14,
    color: Colors.light.text,
    lineHeight: 20,
  },
});