import React, { useLayoutEffect,useEffect,useState } from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { categories } from "../../data/localData";
import { getPlaces } from "../../data/firebaseAPI";
import MenuImage from "../../components/MenuImage/MenuImage";

export default function CategoriesScreen(props) {
  const { navigation } = props;
  const [recipes, setRecipes] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  useEffect(() => {
    categories.map((category) => {
      getPlaces(category.id).then((recipes) => {
        setRecipes(recipes.length);
      });
    });
  }, []);

  const onPressCategory = (item) => {
    const title = item.name;
    const category = item;
    navigation.navigate("PlacesList", { category, title });
  };
  

  const renderCategory = ({ item }) => {
    return (
      <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressCategory(item)}>
        <View style={styles.categoriesItemContainer}>
          <Image style={styles.categoriesPhoto} source={item.photo} />
          <Text style={styles.categoriesName}>{item.name}</Text>
          <Text style={styles.categoriesInfo}>{recipes} places</Text>
        </View>
      </TouchableHighlight>
    )
  };
  return (
    <View>
      <FlatList data={categories} renderItem={renderCategory} keyExtractor={(item,i) => i} />
    </View>
  );
}
