import { ImageBackground, ImageSourcePropType, Text, View } from "react-native";
import bechImage from "../assets/meditation-images/beach.webp";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <ImageBackground
      source={bechImage as ImageSourcePropType}
      resizeMode="cover"
      className="flex-1"
    >
      <LinearGradient
        className="flex-1"
        colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
      >
        <SafeAreaView>
          <View>
            <Text className="text-center text-white text-4xl">Meditation.</Text>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
}
