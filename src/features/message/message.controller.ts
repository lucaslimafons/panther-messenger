import { Request, Response } from 'express'
import { MessageService } from './message.service';

export class MessageController {
  private messageService: MessageService

  constructor(messageService: MessageService) {
    this.messageService = messageService
  }

  async send(request: Request, response: Response) {
    try {
      const message = await this.messageService.create(request.body)
      response.status(200).json(message)
    } catch (e) {
      response.sendStatus(400)
    }
  }
}