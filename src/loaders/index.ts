import expressLoader from './express'
import logger from './logger'
// import './i18n'
// import '@/models'

export default ({ app }) => {
  // Initializing database, logs and express
  logger()
  expressLoader({ app })
  // graphqlLoader({ app })
}
