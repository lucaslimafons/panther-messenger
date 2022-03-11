import { Router } from 'express'
import { MessageController } from './message.controller'

const messageController = new MessageController()

const router = Router()

router.post('/send', messageController.send)

router.get('/', (req, res) => {

})

export { router }