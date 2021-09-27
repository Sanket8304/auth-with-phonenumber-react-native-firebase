import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  backGroundImage: {
    width: window.width,
    height: 250,
  },
  tabContainer: {
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 10,
    justifyContent: 'space-evenly',
  },
  tabSubContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  flightIcon: {
    height: 15,
    width: 15,
  },
  roundView: {
    borderRadius: 20,
    height: 25,
    width: 25,
    backgroundColor: 'rgba(52, 83, 207, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255, 0.3)',
  },
  tabText: {
    fontWeight: '700',
    paddingVertical: 10,
    paddingLeft: 5,
  },
});
