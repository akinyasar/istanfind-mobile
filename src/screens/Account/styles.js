import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
     button: {
      backgroundColor: '#0b5394',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    button2: {
      backgroundColor: '#E60033',
      width: '80%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonContainer:{
      alignItems: 'center',
      marginTop: 200,
    },
    textContainer:{
      justifyContent: "space-between",
      flexDirection: "row",
      marginBottom: 20,
      marginHorizontal: 15,
      marginTop: 5,
    },
    text:{
      fontSize: 20,
      fontWeight: 'bold',
    },
    titleText:{
      marginLeft: 10,
      marginTop: 20,
      marginBottom: 5,
      fontSize: 30,
      fontWeight: 'bold',
      color: '#E60033',
    },
  })

  export default styles;