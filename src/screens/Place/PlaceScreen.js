import React, { useLayoutEffect, useState, useEffect } from "react";
import { ScrollView, Text, View, Image,  TouchableHighlight, Linking ,TouchableOpacity} from "react-native";
import styles from "./styles";
import { getPlaces } from "../../data/firebaseAPI";
import BackButton from "../../components/BackButton/BackButton";


export default function PlaceScreen(props) {
  const { navigation, route } = props;
  const item = route.params?.item;
  
  const [recipesArray, setPlacesArray] = useState([]);
  useEffect(() => {
    getPlaces(item.id).then(data => {
      setPlacesArray(data);
    });
  }, [])
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      title: item.Name,
      headerRight: () => <View />,
    });
  }, []);
  return (
    <ScrollView style={styles.container}>
      <TouchableHighlight>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: (item.ImageUrl) }} />
        </View>
      </TouchableHighlight>
      <View style={styles.infoContainer}>
          <View style={styles.infoContainer}>
            <Image style={styles.infoPhoto} source={require("../../../assets/icons/phone.png")} />
            <Text style={styles.infoText}>{item.PhoneNumber}</Text>
            <Image style={styles.infoPhoto2} source={require("../../../assets/icons/website.png")} />
            <TouchableOpacity onPress={() => {Linking.openURL(item.WebSiteUrl);}}>
              <Text style={styles.infoTextWeb}>Web Site</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.infoContainer}>
            <Image style={styles.infoPhoto3} source={require("../../../assets/icons/location.png")} />
            <Text style={styles.infoText}>{item.Adress}</Text>
      </View>
      <View
            style={{
              marginTop: 10,
              borderBottomColor: 'black',
              borderBottomWidth: 3,
            }}
       />
      <Text style={styles.titleText}>{item.Name} Hakkında</Text>
      <Text style={styles.text}>{item.DataText}</Text>
    </ScrollView>
  );
}
