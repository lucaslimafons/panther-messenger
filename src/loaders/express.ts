import express from 'express'
import cors from './cors'
import logger from 'morgan'
import compression from 'compression'
// import { router } from '@/routes'
import rateLimit from 'express-rate-limit'

export default ({ app }) => {
  app.use(
    rateLimit({
      windowMs: 2 * 60 * 1000, // 2 minutes //15 * 60 * 1000, // 15 minutes
      max: 5000 // limit each IP to 100 requests per windowMs
    })
  )

  app.use(compression())
  app.use(logger('dev'))
  app.use(express.json({ limit: process.env.API_PAYLOAD_LIMIT_SIZE }))
  app.use(
    express.urlencoded({
      limit: process.env.API_URL_LIMIT_SIZE,
      extended: false
    })
  )
  app.use(cors())
  // app.use('/', router)
}
