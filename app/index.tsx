import {
  ImageBackground,
  ImageSourcePropType,
  StatusBar,
  Text,
  View,
} from "react-native";
import bechImage from "../assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";
import { Href, useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

export default function Index() {
  const router = useRouter();
  return (
    <ImageBackground
      source={bechImage as ImageSourcePropType}
      resizeMode="cover"
      className="flex-1"
    >
      <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
        <View>
          <Text className="text-center text-white text-4xl font-bold mb-2">
            Meditation.
          </Text>
          <Text className="text-center text-white text-2xl">
            Simply Meditation App.
          </Text>
        </View>
        <View>
          <CustomButton
            onPress={() => {
              router.push("/nature-meditate" as Href);
            }}
            title={"Get Started"}
          />
        </View>
        <StatusBar barStyle="light-content" />
      </AppGradient>
    </ImageBackground>
  );
}
