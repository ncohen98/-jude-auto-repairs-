import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "@/constants/colors";
import { Star } from "lucide-react-native";

type TestimonialCardProps = {
  name: string;
  text: string;
  rating: number;
};

export default function TestimonialCard({ name, text, rating }: TestimonialCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{name.charAt(0)}</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.starsContainer}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                color={i < rating ? Colors.light.warning : "#E1E1E1"}
                fill={i < rating ? Colors.light.warning : "none"}
              />
            ))}
          </View>
        </View>
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.card,
    borderRadius: 12,
    padding: 16,
    marginRight: 16,
    width: 280,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "center",
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.light.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.light.text,
    marginBottom: 4,
  },
  starsContainer: {
    flexDirection: "row",
  },
  text: {
    fontSize: 14,
    color: Colors.light.textLight,
    lineHeight: 20,
  },
});