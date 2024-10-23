import {
  View,
  ImageBackground,
  ImageSourcePropType,
  Text,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";

import MEDITATE_IMAGES from "@/constants/meditation-images";
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/meditation-data";
import AppGradient from "@/components/AppGradient";
import { Href, useLocalSearchParams, useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import { Audio } from "expo-av";

const Meditate = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const [seconds, setSeconds] = useState(30);
  const [isMeditate, setIsMeditate] = useState(false);
  const [sound, setSound] = useState<Audio.Sound>();
  const [isPlayingAudio, setIsPlyingAudio] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isMeditate) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          setIsMeditate(false);
          clearInterval(interval);
        }
      }, 1000);
    } else {
      sound?.stopAsync();
      setIsPlyingAudio(false);
    }

    return () => clearInterval(interval);
  }, [seconds, isMeditate]);

  useEffect(() => {
    return () => {
      sound?.unloadAsync();
    };
  }, [sound]);

  const formatedMinutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const formatedSeconds = String(seconds % 60).padStart(2, "0");

  const toggleMeditationStatus = async () => {
    if (seconds === 0) {
      setSeconds(30);
    }
    setIsMeditate(!isMeditate);
    await toggleSound();
  };

  const toggleSound = async () => {
    const audioSound = sound ? sound : await initializeSound();

    const status = await audioSound.getStatusAsync();

    if (status.isLoaded && !isPlayingAudio) {
      await audioSound.playAsync();
      setIsPlyingAudio(true);
    } else {
      await audioSound.pauseAsync();
      setIsPlyingAudio(false);
    }
  };

  const initializeSound = async () => {
    const sondFileName = MEDITATION_DATA[Number(id) - 1].audio;
    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[sondFileName]);
    setSound(sound);
    return sound;
  };

  const handleAdjustDuration = () => {
    if (isMeditate) toggleMeditationStatus();
    router.push("/(modal)/adjust-meditation-duration" as Href);
  };

  return (
    <View className="flex-1">
      <ImageBackground
        className="flex-1"
        source={MEDITATE_IMAGES[Number(id) - 1] as ImageSourcePropType}
      >
        <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
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
          <View className="flex-1 justify-center items-center w-full ">
            <View className="w-40 h-40 rounded-full bg-slate-50 justify-center items-center border-blue-700 border">
              <Text className="text-4xl text-blue-700 font-rmono">
                {formatedMinutes}:{formatedSeconds}
              </Text>
            </View>
          </View>
          <CustomButton
            title={"Adjust duration"}
            onPress={handleAdjustDuration}
            containerStyles="w-full mb-5"
          />
          <CustomButton
            title={isMeditate ? "Stop Meditation" : "Start Meditation"}
            onPress={toggleMeditationStatus}
            containerStyles="w-full mb-5"
          />
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
