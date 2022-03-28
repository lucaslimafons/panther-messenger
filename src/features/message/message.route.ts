import { Router } from 'express'
import { MessageController } from './message.controller'
import { MessageService } from './message.service'

const router = Router()

const messageService = new MessageService()
const messageController = new MessageController(messageService)

router.post('/send', messageController.send)
router.get('/', messageController.getUnread)

export { router }