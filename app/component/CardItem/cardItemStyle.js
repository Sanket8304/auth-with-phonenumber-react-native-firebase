import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  titleCard: {
    padding: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
  },
  cardItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRightWidth: 1,
    borderColor: 'rgba(185, 185, 185, 0.3)',
    margin: 5,
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
