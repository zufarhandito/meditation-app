import BgMain from "@/assets/images/bg-1.svg";
import BgSecondary from "@/assets/images/bg-2.svg";
import {
  Baby,
  BookOpen,
  CloudSun,
  Coffee,
  Folder,
  Frown,
  HeartIcon,
  MoonStar,
  Music,
  Smile,
} from "lucide-react-native";
import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const Sleep = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1, backgroundColor: "#03174C" }}>
      {/* Background paling bawah */}
      <Animated.View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFillObject,
          {
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, SCREEN_HEIGHT],
                  outputRange: [0, -SCREEN_HEIGHT * 0.25],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
        ]}
      >
        <BgSecondary
          width={SCREEN_WIDTH}
          height={SCREEN_HEIGHT}
          preserveAspectRatio="xMinYMin meet"
        />
      </Animated.View>

      {/* Background lapisan kedua */}
      <Animated.View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFillObject,
          {
            marginTop: 32,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, SCREEN_HEIGHT],
                  outputRange: [0, -SCREEN_HEIGHT * 0.5],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
        ]}
      >
        <BgMain
          width={SCREEN_WIDTH}
          height={SCREEN_HEIGHT}
          preserveAspectRatio="xMinYMin meet"
        />
      </Animated.View>

      {/* Konten */}
      <SafeAreaView style={{ flex: 1 }}>
        <Animated.ScrollView
          contentContainerStyle={{
            padding: 20,
            paddingTop: Platform.OS === "android" ? 20 : 0,
          }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
        >
          {/* Title and description */}
          <Animated.View
            style={{
              marginTop: 64,
              marginBottom: 48,
              justifyContent: "center",
              alignItems: "center",
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [0, 200],
                    outputRange: [0, -40],
                    extrapolate: "clamp",
                  }),
                },
                {
                  scale: scrollY.interpolate({
                    inputRange: [0, 200],
                    outputRange: [1, 0.9],
                    extrapolate: "clamp",
                  }),
                },
              ],
              opacity: scrollY.interpolate({
                inputRange: [0, 150],
                outputRange: [1, 0],
                extrapolate: "clamp",
              }),
            }}
          >
            <Text className="text-3xl text-center text-white font-bold">
              Sleep Stories
            </Text>
            <Text className="text-center text-white mt-4 w-3/4 mx-auto">
              Soothing bedtime stories to help you fall into a deep and natural
              sleep
            </Text>
          </Animated.View>

          {/* categories */}
          <Animated.View
            style={{
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [0, 200],
                    outputRange: [0, -20],
                    extrapolate: "clamp",
                  }),
                },
              ],
            }}
          >
            <FlatList
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                const Icon = item.icon;
                return (
                  <TouchableOpacity className="p-2 rounded-2xl flex flex-col items-center gap-y-2">
                    <View className="bg-secondary p-5 rounded-2xl">
                      <Icon color={"#fff"} />
                    </View>
                    <Text className="text-white">{item.label}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={({ value }) => value}
            />
          </Animated.View>

          {/* main banner */}
          <ImageBackground
            source={require("@/assets/images/trend-1.png")}
            style={{ width: "100%", aspectRatio: 16 / 9 }}
            className="mt-4"
            imageStyle={{ borderRadius: 12 }}
          >
            <View className="w-3/4 flex items-center justify-center h-full mx-auto gap-2">
              <Text className="text-3xl text-white font-bold">
                The Ocean Moon
              </Text>
              <Text className="text-white text-center">
                Non-stop 8- hour mixes of our most popular sleep audio
              </Text>

              <TouchableOpacity className="bg-white px-5 py-2 rounded-full text-gray-500 mt-5">
                <Text>START</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          {/* list */}
          {Array.from({ length: 20 }).map((_, i) => (
            <View
              key={i}
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                padding: 18,
                marginBottom: 12,
                borderRadius: 12,
              }}
            >
              <Text style={{ color: "white", fontSize: 16 }}>Item {i + 1}</Text>
            </View>
          ))}
        </Animated.ScrollView>
      </SafeAreaView>
    </View>
  );
};

const categories = [
  { value: "all", label: "All", icon: Folder },
  { value: "my", label: "My", icon: HeartIcon },
  { value: "anxious", label: "Anxious", icon: Frown },
  { value: "sleep", label: "Sleep", icon: MoonStar },
  { value: "kids", label: "Kids", icon: Baby },
  { value: "happy", label: "Happy", icon: Smile },
  { value: "focus", label: "Focus", icon: Coffee },
  { value: "relax", label: "Relax", icon: CloudSun },
  { value: "stories", label: "Stories", icon: BookOpen },
  { value: "music", label: "Music", icon: Music },
];

export default Sleep;
