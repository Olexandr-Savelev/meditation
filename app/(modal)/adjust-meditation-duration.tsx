import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import { useTimerContext } from "@/context/TimerContext";

const AdjustMeditationDuration = () => {
  const { setDuration } = useTimerContext();

  const handleAdjustDuration = (duration: number) => {
    setDuration(duration);
    router.back();
  };

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
        <View className="flex-1 h-4/5 justify-center items-center">
          <Text className="text-3xl text-white font-bold text-center mb-6">
            Adjust your meditation duration.
          </Text>
          <CustomButton
            title="10 seconds"
            onPress={() => {
              handleAdjustDuration(10);
            }}
            containerStyles="mb-6 w-full"
          />
          <CustomButton
            title="5 minutes"
            onPress={() => {
              handleAdjustDuration(5 * 60);
            }}
            containerStyles="mb-6 w-full"
          />
          <CustomButton
            title="10 minutes"
            onPress={() => {
              handleAdjustDuration(10 * 60);
            }}
            containerStyles="mb-6 w-full"
          />
        </View>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditationDuration;
