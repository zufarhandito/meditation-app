const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  return withNativeWind(
    {
      ...config,
      transformer: {
        ...config.transformer,
        babelTransformerPath: require.resolve("react-native-svg-transformer"),
      },
      resolver: {
        ...config.resolver,
        assetExts: config.resolver.assetExts.filter((ext) => ext !== "svg"),
        sourceExts: [...config.resolver.sourceExts, "svg"],
      },
    },
    { input: "./app/global.css" }
  );
})();
