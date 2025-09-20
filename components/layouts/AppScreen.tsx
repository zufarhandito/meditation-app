import React from "react";
import { View } from "react-native";

const AppScreen = ({ children }: { children: React.ReactNode }) => {
  return <View className="dark:bg-primary flex-1">{children}</View>;
};

export default AppScreen;
