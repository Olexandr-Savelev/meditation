import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { GalleryPreviewData } from "./models/AffirmationCategory";
import { Link } from "expo-router";

interface GuidedAffirmationsProps {
  title: string;
  preview: GalleryPreviewData[];
}

const GuidedAffirmations = ({ title, preview }: GuidedAffirmationsProps) => {
  return (
    <View className="my-4">
      <View className="mb-2">
        <Text className="text-xl text-gray-100 font-bold">{title}</Text>
      </View>
      <View>
        <FlatList
          data={preview}
          keyExtractor={({ id }) => id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Link
              className="mr-4"
              href={`/affirmations/${item.id}`}
              asChild
            >
              <Pressable>
                <View className="h-32 w-32 rounded-md">
                  <Image
                    source={item.image}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  );
};

export default GuidedAffirmations;
