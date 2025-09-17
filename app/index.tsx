import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-white">hmmmm</Text>
      <Link href={"/onboarding"}>Onboarding</Link>
      <Link
        href={{
          pathname: "/movies/[id]",
          params: { id: "avengers" },
        }}
      >
        movie 2
      </Link>
    </View>
  );
}
