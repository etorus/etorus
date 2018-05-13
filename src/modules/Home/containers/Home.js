import moment from 'moment'
import 'moment/locale/pt'

import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import  * as actions from '../redux/actions'

import Home from '../components'

moment.locale('pt-BR')

const filterMeditationsStarted = meditations => {
  const fiveMinutesAgo = moment().subtract(5, 'minutes')

  return meditations.filter(
    ({ attributes: { start } }) => moment(start).isAfter(fiveMinutesAgo)
  )
}

const mapStateToProps = ({
  home: {
    meditations,
    calling,
    message,
    error,
  },
},
{
  intl,
  navigation,
}) => ({
  meditations: filterMeditationsStarted(meditations),
  calling,
  message,
  error,
  intl,
  navigation,
})

const mapDispatchToProps = dispatch => ({
  openNotifications() {
    dispatch(actions.openNotifications())
  },

  closeNotifications() {
    dispatch(actions.closeNotifications())
  },

  openMenu() {
    dispatch(actions.openMenu())
  },

  closeMenu() {
    dispatch(actions.closeMenu())
  },

  fetch({ navigation }) {
    dispatch(actions.fetch({ navigation }))
  },
})

const HomeContainer = compose(
  injectIntl,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Home)

export default HomeContainer
