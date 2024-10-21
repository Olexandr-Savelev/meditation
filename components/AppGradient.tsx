import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

interface AppGradientProps {
  children: React.ReactNode;
  colors: string[];
}

const AppGradient = ({ children, colors }: AppGradientProps) => {
  return (
    <LinearGradient
      className="flex-1"
      colors={colors}
    >
      <SafeAreaView className="flex-1 justify-between mx-5 my-12">
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AppGradient;
