import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btnClickContain: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 5,
    marginBottom: 5
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  btnIcon: {
    height: 35,
    width: 35
  },
  btnText: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 4
  }
});

export default styles;
