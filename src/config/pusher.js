import Pusher from 'pusher-js/react-native'

// TODO: Change to an env variable
const pusher = new Pusher('87451c66797c353f3fc2', {
  cluster: 'us2',
  encrypted: true
})

export default pusher
