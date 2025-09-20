import { AppScreen, Button } from "@/components";
import { useNavigation } from "expo-router";
import { ArrowLeft, Heart, Share2 } from "lucide-react-native";
import React from "react";
import { Platform, Text, View } from "react-native";

const PlayId = () => {
  const navigation = useNavigation();

  return (
    <AppScreen>
      <View
        style={{
          position: "absolute",
          top: Platform.OS === "android" ? 40 : 60, // adjust for status bar
          left: 20,
          right: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          zIndex: 10,
        }}
      >
        <Button
          size={"icons"}
          variant={"white"}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft color="#000" size={20} />
        </Button>
        <View className="flex flex-row gap-4">
          <Button
            variant={"subtle"}
            size={"icons"}
            className="bg-[rgba(0,0,0,0.25)] "
          >
            <Heart color="#fff" size={20} />
          </Button>
          <Button size={"icons"} variant={"subtle"}>
            <Share2 color="#fff" size={20} />
          </Button>
        </View>
      </View>
      <Text>PlayId</Text>
    </AppScreen>
  );
};

export default PlayId;
