import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import Colors from "@/constants/colors";
import { commonStyles } from "@/styles/common";
import { Book, Zap, Disc, Compass, CheckCircle, Wind } from "lucide-react-native";

type ServiceCardProps = {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  compact?: boolean;
};

const getIcon = (iconName: string, size: number, color: string) => {
  switch (iconName) {
    case "tool":
      return <Book size={size} color={color} />;
    case "zap":
      return <Zap size={size} color={color} />;
    case "disc":
      return <Disc size={size} color={color} />;
    case "compass":
      return <Compass size={size} color={color} />;
    case "check-circle":
      return <CheckCircle size={size} color={color} />;
    case "wind":
      return <Wind size={size} color={color} />;
    default:
      return <Book size={size} color={color} />;
  }
};

export default function ServiceCard({ id, title, description, icon, image, compact }: ServiceCardProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/service/${id}`);
  };

  if (compact) {
    return (
      <TouchableOpacity 
        style={styles.compactCard} 
        onPress={handlePress}
        activeOpacity={0.8}
      >
        <View style={styles.iconContainer}>
          {getIcon(icon, 24, Colors.light.primary)}
        </View>
        <View style={styles.compactContent}>
          <Text style={styles.compactTitle} numberOfLines={1}>{title}</Text>
          <Text style={styles.compactDescription} numberOfLines={1}>{description}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={handlePress}
      activeOpacity={0.9}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <View style={styles.iconCircle}>
          {getIcon(icon, 24, Colors.light.primary)}
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    padding: 16,
    flex: 1,
    justifyContent: "flex-end",
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "rgba(255,255,255,0.9)",
  },
  compactCard: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: Colors.light.card,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(26, 58, 108, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  compactContent: {
    flex: 1,
  },
  compactTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.light.text,
    marginBottom: 4,
  },
  compactDescription: {
    fontSize: 14,
    color: Colors.light.textLight,
  },
});