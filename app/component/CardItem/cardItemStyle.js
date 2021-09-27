import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  titleCard: {
    padding: 5,
    flexDirection: 'row',
    margin: 8,
    shadowColor: 'rgba(0,0,0,0)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  cardItem: {
    flex: 1,
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: 'rgba(185, 185, 185, 0.3)',
    marginRight: 13,
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
  },
  text: {
    fontWeight: '500',
    marginLeft: 5,
    marginRight: 15,
  },
});
