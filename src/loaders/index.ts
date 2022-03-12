import expressLoader from './express'
import logger from './logger'
import './i18n'
import '@/models'
import kafkaConsumer from './kafka.consumer'
import kafkaProducer from './kafka.producer'

export default ({ app }) => {
  // Initializing database, logs and express
  logger()
  expressLoader({ app })
  kafkaConsumer()
  kafkaProducer()
}
