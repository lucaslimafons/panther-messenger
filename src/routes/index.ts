import { Router } from 'express'
import { router as MessageRouter } from '@/features/message/message.route'

const router = Router()

router.use('/message', MessageRouter)

export { router } 