import React, { useLayoutEffect, useEffect, useState } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { getPlaces, getCategoryName } from "../../data/firebaseAPI";


export default function PlacesListScreen(props) {
  const { navigation, route } = props;
  const item = route?.params?.category;
  const [recipesArray, setRecipesArray] = useState([]);
  useEffect(() => {
    getPlaces(item.id).then(data => {
      setRecipesArray(data);
    });
  },[])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerRight: () => <View />,
    });
  }, []);

  const onPressRecipe = (item) => {
    navigation.navigate("Place", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: (item.ImageUrl) }} />
        <Text style={styles.title}>{item.Name}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );
  return (
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={recipesArray} renderItem={renderRecipes} keyExtractor={(item,i) => i} />
    </View>
  );
}
