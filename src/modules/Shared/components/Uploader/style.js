import { StyleSheet, Image } from 'react-native'

export default StyleSheet.create({
  uploader: {
    alignItems: 'center',
    marginBottom: 10,
  },

  wrapperImagem: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: '#f09526',
    padding: 4,
  },

  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    resizeMode: Image.resizeMode.contain,
  },

  text: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Branding',
    fontSize: 14,
  }
})
