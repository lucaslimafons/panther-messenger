import { Router } from 'express'
import { MessageController } from './message.controller'
import { MessageService } from './message.service'

const messageService = new MessageService()
const messageController = new MessageController(messageService)

const router = Router()

router.post('/send', messageController.send)

router.get('/', (req, res) => {

})

export { router }