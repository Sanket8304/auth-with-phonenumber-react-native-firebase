import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  logoutButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logout: {
    height: 24,
    width: 20,
    marginRight: 10,
  },
  backButton: {
    paddingRight: 15,
    paddingVertical: 15,
  },
  backArrow: {
    height: 24,
    width: 20,
  },
});
