import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { AntDesign } from "@expo/vector-icons";

const AdjustMeditationDuration = () => {
  return (
    <View className="flex-1 relative">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <Pressable
          className="absolute top-8"
          onPress={() => {
            router.back();
          }}
        >
          <AntDesign
            name="leftcircleo"
            size={48}
            color="white"
          />
        </Pressable>
        <Text>AdjustMeditationDuration</Text>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditationDuration;
