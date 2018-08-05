import { RNS3 } from 'react-native-aws3'

const options = {
  keyPrefix: 'uploads/',
  bucket: 'etorus',
  region: 'sa-east-1',
  accessKey: 'AKIAIPLG44STH3WAR63A',
  secretKey: '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',
  successActionStatus: 201,
}

export default upload = file => RNS3.put(file, options)
