import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  footerContainer: {
    flex: 0.1,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 10,
  },
  footerSubContainer: {
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 26,
    height: 26,
  },
  porfileImage: {
    width: 26,
    height: 26,
    borderRadius: 100,
  },
  activeDot: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
    top: 35,
  },
});
