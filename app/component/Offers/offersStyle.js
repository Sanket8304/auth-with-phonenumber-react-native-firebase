import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    marginTop: 30,
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
    color: '#7200B1',
    fontWeight: '700',
    fontSize: 15,
    paddingLeft: 10,
  },
  viewText: {
    color: '#7200B1',
    fontWeight: '400',
    fontSize: 15,
    paddingRight: 5,
  },
  textView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(155, 155, 155, 0.4)',
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
  },
  selectedTestView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(50, 120, 242)',
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(155, 155, 155, 0.4)',
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
  },
  text: {
    fontWeight: '700',
  },
  selectedText: {
    color: 'rgb(255,255,255)',
    fontWeight: '700',
  },
  line: {
    height: 3,
    marginRight: 10,
    backgroundColor: 'rgb(50, 120, 242)',
    marginTop: 5,
  },
  imageContainer: {
    height: 245,
    width: 350,
    marginRight: 10,
    borderRadius: 5,
    borderColor: '#ddd',
  },
  image: {
    height: 200,
    width: 349,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  text: {
    color: 'rgb(50, 120, 242)',
    fontWeight: '700',
  },
  arrowIcon: {
    height: 10,
    width: 10,
    marginLeft: 3,
    marginTop: 3,
  },
});
