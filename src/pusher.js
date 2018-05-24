import Pusher from 'pusher-js/react-native'

const pusher = new Pusher('8fe0e77a83286d9b5e14', {
  cluster: 'us2',
  encrypted: true
})

export default pusher