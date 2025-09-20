import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity } from "react-native";

const images = [
  require("@/assets/images/item-1.png"),
  require("@/assets/images/item-2.png"),
  require("@/assets/images/item-3.png"),
];

const SleepCard = ({ length = 10 }: { length?: number }) => {
  const data = Array.from({ length });
  const navigate = useRouter();
  return (
    <FlatList
      data={data}
      scrollEnabled={false}
      numColumns={2}
      keyExtractor={(_, i) => String(i)}
      style={{ marginTop: 20 }}
      columnWrapperStyle={{ gap: 20, marginBottom: 20 }}
      renderItem={({ item, index }) => {
        const randomImage = images[Math.floor(Math.random() * images.length)];

        return (
          <TouchableOpacity
            className="flex-1"
            onPress={() => {
              navigate.push({
                pathname: "/sleep/[id]",
                params: { id: String(item) },
              });
            }}
          >
            <Image
              source={randomImage}
              className="w-full h-32 rounded-xl"
              resizeMode="cover"
            />
            <Text className="mt-2 text-white font-bold ">
              SleepCard {index + 1}
            </Text>
            <Text className="mt-1 text-text-muted text-xs">
              45 MIN - SLEEP MUSIC
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default SleepCard;
