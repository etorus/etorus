import { injectIntl } from 'react-intl'
import { compose } from 'redux'

import Splash from '../components/Splash'

const SplashContainer = compose(
  injectIntl,
)(Splash)

export default SplashContainer
