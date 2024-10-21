import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  containerStyles?: string;
  textStyles?: string;
}

const CustomButton = ({
  onPress,
  title,
  containerStyles,
  textStyles,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`p-2 bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
    >
      <Text className={`text-lg font-semibold ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
