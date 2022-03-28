import expressLoader from './express'
import logger from './logger'
import './i18n'
import '@/models'
import kafka from './kafka'

export default ({ app }) => {
  // Initializing database, logs and express
  logger()
  expressLoader({ app })
  kafka()
}
