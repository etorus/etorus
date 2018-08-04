import moment from 'moment'
import DeviceInfo from 'react-native-device-info'

const deviceLocale = DeviceInfo.getDeviceLocale()

const locales = {
  'pt-BR': {
    moment: 'pt-BR',
    i18n: 'pt',
  },
  'pt-br': {
    moment: 'pt-BR',
    i18n: 'pt',
  },
  'es': {
    moment: 'es',
    i18n: 'es',
    require: 'es',
  },
}

export const getNormalizedLocale = () => locales[deviceLocale]

if (getNormalizedLocale()) {

  switch(getNormalizedLocale().moment) {
    case 'pt-BR':
      require('moment/locale/pt-br')

    case 'es':
      require('moment/locale/es')

    default:
      break
  }

  moment.locale(getNormalizedLocale().moment)
}

export default moment
