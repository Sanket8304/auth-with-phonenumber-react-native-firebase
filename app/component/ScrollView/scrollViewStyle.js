import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  tripContainer: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 13,
    width: 13,
  },
  offerText: {
    color: 'rgb(50, 120, 242)',
    fontWeight: '700',
    fontSize: 15,
    paddingLeft: 10,
  },
  viewText: {
    color: 'rgb(50, 120, 242)',
    fontWeight: '400',
    fontSize: 15,
    paddingRight: 5,
  },
  text: {
    fontWeight: '700',
    fontSize: 20,
  },
  subText: {
    flex: 1,
  },
  imageViewContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
    borderWidth: 1,
    borderColor: 'rgba(155, 155, 155, 0.4)',
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
  },
  coloredBackground: {
    backgroundColor: 'rgb(252, 229, 182)',
    width: 40,
    height: 100,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    position: 'relative',
    right: 30,
  },
  image: {
    height: 45,
    width: 45,
  },
  tripMoneyText: {
    color: '#327245',
    paddingLeft: 10,
  },
  rightIcon: {
    height: 20,
    width: 20,
  },
});
