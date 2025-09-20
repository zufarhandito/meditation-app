import { Tabs } from "expo-router";
import { Home, Leaf, Moon, Music, User } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import React from "react";
import { Text, View } from "react-native";

const activeBg = "#8E97FD";

const Layout = () => {
  const { colorScheme } = useColorScheme();

  const activeColor = colorScheme === "dark" ? "#fff" : "#fff";
  const inactiveColor = colorScheme === "dark" ? "#aaa" : "#888";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "#03174C" : "#fff",
          borderTopWidth: 0,
          elevation: 4,
          // height: 136,
        },
        tabBarLabel: ({ focused, children }) => (
          <Text
            style={{
              fontSize: 12,
              fontWeight: focused ? "700" : "400",
              color: focused
                ? colorScheme === "dark"
                  ? "#fff"
                  : activeBg
                : inactiveColor,
              marginTop: 12,
            }}
          >
            {children}
          </Text>
        ),
        tabBarIconStyle: {
          marginTop: 16,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, size }) => (
            <ViewWrapper focused={focused}>
              <Home color={focused ? activeColor : inactiveColor} size={size} />
            </ViewWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="sleep"
        options={{
          title: "Sleep",
          tabBarIcon: ({ focused, size }) => (
            <ViewWrapper focused={focused}>
              <Moon color={focused ? activeColor : inactiveColor} size={size} />
            </ViewWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="meditate"
        options={{
          title: "Meditate",
          tabBarIcon: ({ focused, size }) => (
            <ViewWrapper focused={focused}>
              <Leaf color={focused ? activeColor : inactiveColor} size={size} />
            </ViewWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="music"
        options={{
          title: "Music",
          tabBarIcon: ({ focused, size }) => (
            <ViewWrapper focused={focused}>
              <Music
                color={focused ? activeColor : inactiveColor}
                size={size}
              />
            </ViewWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Afshar",
          tabBarIcon: ({ focused, size }) => (
            <ViewWrapper focused={focused}>
              <User color={focused ? activeColor : inactiveColor} size={size} />
            </ViewWrapper>
          ),
        }}
      />
    </Tabs>
  );
};

const ViewWrapper = ({
  children,
  focused,
}: {
  children: React.ReactNode;
  focused: boolean;
}) => {
  return (
    <View
      style={{
        backgroundColor: focused ? activeBg : "transparent",
        padding: 12,
        borderRadius: 18,
      }}
    >
      {children}
    </View>
  );
};

export default Layout;
