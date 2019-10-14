import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  brandContainer:{
    alignItems: 'center',
  },

  brand: {
    height: 95,
    width: 100,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#f09526',
  },

  name: {
    color: 'rgba(62, 62, 62, 1)',
    fontFamily: 'Branding',
    fontWeight: '900',
    fontSize: 20,
    marginLeft: 10,
  },

  email: {
    color: 'rgba(62, 62, 62, 1)',
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 18,
    marginLeft: 10,
  },

  button: {
    paddingVertical: 10,
  },

  buttonText: {
    color: 'rgba(62, 62, 62, 1)',
    fontFamily: 'Branding',
    fontWeight: '700',
    fontSize: 22,
    marginLeft: 10,
  },

  alert: {
    color: 'red',
  },

  facebook: {
    color: 'rgba(0, 133, 189, 1)',
  },
})
