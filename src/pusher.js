import Pusher from 'pusher-js/react-native'

// TODO: Change to an env variable
const pusher = new Pusher('c27306db1898a4b11f2c', {
  cluster: 'us2',
  encrypted: true
})

export default pusher
