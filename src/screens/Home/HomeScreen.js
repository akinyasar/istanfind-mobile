import React, { useLayoutEffect } from "react";
import { View } from "react-native";
import _default from "expo-constants";
import MenuImage from "../../components/MenuImage/MenuImage";
import { ImageBackground } from "react-native";
import ExploreButton from "../../components/ExploreButton/ExploreButton";
import GifImage from "@lowkey/react-native-gif";

export default function HomeScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      title: "IstanFind",
      headerRight: () => <View />,
    });
  }, []);

  return (
    <ImageBackground
      source={require("../../../assets/home.jpg")}
      style={{ flex: 8 }}
    >
      <View>
        <GifImage
          source={require("../../../assets/homegif1.gif")}
          style={{
            marginTop: _default.statusBarHeight,
            marginLeft: 180,
            width: 40,
            height: 70,
          }}
          resizeMode={"cover"}
        />
        <ExploreButton
          onPress={() => {
            navigation.navigate("About");
          }}
        />
      </View>
    </ImageBackground>
  );
}
