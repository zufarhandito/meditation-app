import DetailImage from "@/assets/images/detail-1.svg";
import { AppScreen, Button } from "@/components";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { ArrowLeft, Heart, Music, Share2 } from "lucide-react-native";
import React from "react";
import { Animated, Dimensions, Platform, Text, View } from "react-native";
import SleepCard from "./_components/sleep-card";

const SleepDetails = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
    Dimensions.get("window");
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const HEADER_HEIGHT = SCREEN_HEIGHT * 0.3;

  const router = useRouter();

  return (
    <AppScreen>
      <View style={{ flex: 1 }}>
        {/* Header Image with Parallax */}
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: HEADER_HEIGHT,
            overflow: "hidden",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, HEADER_HEIGHT],
                  outputRange: [0, -HEADER_HEIGHT * 0.25],
                  extrapolate: "extend",
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
          <DetailImage
            width={SCREEN_WIDTH}
            height={HEADER_HEIGHT}
            preserveAspectRatio="xMinYMin slice"
          />
        </Animated.View>

        {/* Top Buttons (absolute) */}
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

        {/* Scrollable Content */}
        <Animated.ScrollView
          contentContainerStyle={{
            padding: 20,
            paddingTop: HEADER_HEIGHT + 20, // biar mulai di bawah header
            paddingBottom: 100,
          }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
        >
          <Text className="dark:text-white text-4xl font-bold mb-4">
            Night Island
          </Text>

          <Text className="text-text-muted font-semibold mb-5 ">
            45 MIN - SLEEP MUSIC
          </Text>
          <Text className="text-text-muted font-light mb-6">
            Ease the mind into a restful nights sleep with these deep, amblent
            tones.
          </Text>

          <View className="flex flex-row gap-x-6">
            <View className="flex items-center gap-3 flex-row ">
              <Heart color={"#fff"} />
              <Text className="text-white"> 24.234</Text>
            </View>
            <View className="flex items-center gap-3 flex-row ">
              <Music color={"#fff"} />
              <Text className="text-white">34.234</Text>
            </View>
          </View>

          <View className="h-[1px] bg-gray-800 w-full my-8" />
          <Text className="dark:text-white text-2xl ">Related</Text>
          <SleepCard length={8} />
        </Animated.ScrollView>

        <View
          style={{
            position: "absolute",
            left: 20,
            right: 20,
            bottom: Platform.OS === "android" ? 30 : 40,
          }}
        >
          <Button
            size="xl"
            onPress={() =>
              router.push({
                pathname: "/play/[id]",
                params: { id: 3 },
              })
            }
          >
            PLAY
          </Button>
        </View>
      </View>
    </AppScreen>
  );
};

export default SleepDetails;
