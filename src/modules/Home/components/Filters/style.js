import {
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native'

export default StyleSheet.create({
  filters: {
    paddingVertical: 15,
    justifyContent: 'center',
    flexDirection:'row',
  },

  filter: {
    width: 170,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5,
  },

  filterWrapper: {
    width: 170,
    height: 30,
    justifyContent: 'center',
    flexDirection:'column',
    alignItems: 'center',
  },

  filterBackground: {
    width: 170,
    height: 30,
    borderRadius: 15,
  },

  filterText: {
    color: 'rgba(240, 240, 240, 1)',
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 16,
  },

  filterWrapperUnselected: {
    backgroundColor: 'rgba(240, 240, 240, 1)',
    width: 166,
    height: 26,
    margin: 2,
    borderRadius: 13,
  },

  filterTextUnselected: {
    color: '#c64d96',
  },
})
