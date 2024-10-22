import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { GalleryPreviewData } from "@/components/models/AffirmationCategory";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import AppGradient from "@/components/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();
  const router = useRouter();

  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(() => {
    for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
      const targetAffirmation = AFFIRMATION_GALLERY[i].data.find(
        (a) => a.id === Number(itemId)
      );

      if (targetAffirmation) {
        setAffirmation(targetAffirmation);

        const sentencesArray = targetAffirmation.text.split(".");
        if (sentencesArray[sentencesArray.length - 1] === "") {
          sentencesArray.pop();
        }
        setSentences(sentencesArray);
        return;
      }
    }
  }, []);
  return (
    <ImageBackground
      source={affirmation?.image}
      resizeMode="cover"
      className="flex-1"
    >
      <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
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
        <ScrollView className="mt-20">
          <View className="flex-1 justify-center items-center">
            {sentences.map((s, i) => (
              <Text
                key={i}
                className="text-3xl text-zinc-50 font-bold text-center mb-8"
              >
                {s}.
              </Text>
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </ImageBackground>
  );
};

export default AffirmationPractice;
