import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";

import YoutubePlayer from "react-native-youtube-iframe";
import { ImageBackground, ScrollView } from "react-native";

export default function AboutScreen(props) {
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
      title: "About",
      headerRight: () => <View />,
    });
  }, []);

  return (
   
      <ImageBackground
        source={require("../../../assets/home.jpg")}
        style={{ flex: 8 }}
        blurRadius={12}
      >
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <YoutubePlayer height={250} play={true} videoId={"N5HaMCMaPL4"} />
            <Text style={styles.titleText}>İstanbul Hakkında</Text>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 2,
              }}
            />
            <Text style={styles.text}>
              İstanbul… Şarkılara, şiirlere, romanlara konu olmuş bir kültür ve
              tarih mozaiği… Dünyada eşi benzeri bulunmayan ve Avrupa ile Asya
              kıtaları üzerinde tarihi ve kültürel dokusuyla göz kamaştıran
              camiler, saraylar, parklar ve köşkler şehri İstanbul’u keşfetmek
              çok heyecanlı ve eğlenceli olacaktır.Aşağıda İstanbul ile ilgili
              faydalı bilgileri bulabilirsiniz… Bizans, Konstantiniye ve
              İstanbul…Bu üç sihirli isim İstanbul’un güz kamaştıran tarihini
              simgelemektedir.Dünya’da çok az şehir bu kadar özel ve keşfetmesi
              çok heyecan vericidir.İstanbul, tarih boyunca 120 kayser ve
              imparator tarafından yönetilmiş ve yukarıda anılan üç büyük
              medeniyete ev sahipliği yapmıştır. Türkiye ve dünyanın en büyük
              kentlerinden birisidir.İstanbul’da gezilecek yerler de
              sınırsızdır. İstanbul’un ilk bakışta göze çarpan en etkileyici
              yerleri Tarihi Yarımada ve Boğaziçi’dir.Topkapı Sarayı, Ayasofya
              ve Sultanahmet Camii, Kapalıçarşı, Yerebatan Sarnıcı gibi tarihi
              yerleri barındıran Tarihi Yarımadada gezi ve Eminönü Galata
              Köprüsünden başlayarak Anadolu Kavağı’na kadar süren etkileyici
              İstanbul Boğaz turu, İstanbul’un ziyaretçilerinin mutlaka yapması
              gereken gezi aktivitelerinin başında gelmektedir.
            </Text>
          </View>
        </View>
      </ImageBackground>
  );
}
