import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  fixedheaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  square: {
    height: 30,
    width: 30,
    backgroundColor: 'red',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myText: {
    color: 'rgb(255,255,255)',
    fontWeight: '700',
  },
  searchIcon: {
    height: 20,
    width: 20,
  },
  walletIcon: {
    height: 20,
    width: 20,
    marginHorizontal: 20,
  },
  view: {
    backgroundColor: 'rgba(255,255,255, 0.5)',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  suitcase: {
    height: 20,
    width: 20,
  },
  rightArrowIcon: {
    height: 10,
    width: 10,
  },
  headerSubContainer: {
    backgroundColor: 'rgba(255,255,255, 0.3)',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255, 0.3)',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  text: {
    color: 'rgb(255,255,255)',
  },
  subText: {
    color: 'rgb(255,255,255)',
    fontWeight: '700',
  },
  rightArrowIcon1: {
    height: 15,
    width: 15,
    paddingHorizontal: 20,
  },
  verticalDots: {
    height: 15,
    width: 15,
  },
  tabContainer: {
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
  },
  tabSubContainer: {
    flex: 1,
    alignItems: 'center',
  },
  flightIcon: {
    height: 25,
    width: 25,
  },
  roundView: {
    borderRadius: 20,
    height: 35,
    width: 35,
    backgroundColor: 'rgba(52, 83, 207, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255, 0.3)',
  },
  tabText: {
    textAlign: 'center',
    fontWeight: '700',
    paddingVertical: 10,
  },
});
