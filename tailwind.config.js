/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#03174C",
        secondary: "#8E97FD",
        text: {
          muted: "#98A1BD",
        },
      },
      fontFamily: {
        jakartaBold: "PlusJakartaSans-Bold",
        jakartaRegular: "PlusJakartaSans-Regular",
        jakartaMedium: "PlusJakartaSans-Medium",
        jakartaLight: "PlusJakartaSans-Light",
        jakartaSemibold: "PlusJakartaSans-SemiBold",
        jakartaExtrabold: "PlusJakartaSans-ExtraBold",
        jakartaExtralight: "PlusJakartaSans-ExtraLight",
        jakartaItalic: "PlusJakartaSans-Italic",
      },
    },
  },
  plugins: [],
};
