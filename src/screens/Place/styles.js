import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: 250
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    width: viewportWidth,
    height: 250,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  infoPhoto: {
    height: 20,
    width: 20,
    marginLeft: 50,
    marginTop: 15
  },
  infoPhoto2: {
    height: 20,
    width: 20,
    marginLeft: 50,
    marginTop: 15
  },
  infoPhoto3: {
    height: 20,
    width: 20,
    marginLeft: 30,
    marginTop: 15
  },
  infoText: {
    marginLeft: 10,
    marginTop: 15,
    fontWeight: 'bold',
  },
  infoTextWeb: {
    marginLeft: 10,
    marginTop: 15,
    fontWeight: 'bold',
    color: 'blue',
    textDecorationLine: 'underline',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginLeft: '3%',
    marginTop: '3%',
    textDecorationLine: 'underline'
  },
  text:{
    fontSize: 17,
    fontWeight: 'normal',
    color: 'black',
    textAlign: 'left',
    marginLeft: '1%',
    marginTop: '1%',
    }
});

export default styles;
