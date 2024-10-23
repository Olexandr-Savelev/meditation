import {
  View,
  Text,
  FlatList,
  Pressable,
  ImageBackground,
  ImageSourcePropType,
  StatusBar,
} from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { MEDITATION_DATA } from "@/constants/meditation-data";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";
import { Href, useRouter } from "expo-router";

const NatureMeditate = () => {
  const router = useRouter();

  return (
    <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
      <View>
        <Text className="text-4xl font-bold text-gray-200 text-left mb-3">
          Welcome!
        </Text>
        <Text className="text-xl font-normal text-gray-400 text-left mb-3">
          Start your meditation journey with today.
        </Text>
        <FlatList
          data={MEDITATION_DATA}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => router.push(`/meditate/${item.id}` as Href)}
              className="flex-1 rounded-mb h-48 mb-3"
            >
              <ImageBackground
                className="flex-1"
                source={MEDITATION_IMAGES[item.id - 1] as ImageSourcePropType}
              >
                <LinearGradient
                  className="flex-1 justify-center items-center"
                  colors={["transparent", "rgba(0,0,0,0.8)"]}
                >
                  <Text className="text-3xl font-bold text-gray-100">
                    {item.title}
                  </Text>
                </LinearGradient>
              </ImageBackground>
            </Pressable>
          )}
        />
      </View>
      <StatusBar barStyle="light-content" />
    </AppGradient>
  );
};

export default NatureMeditate;
