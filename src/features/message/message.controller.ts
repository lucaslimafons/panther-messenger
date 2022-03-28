import { Request, Response } from 'express'
import { MessageService } from './message.service';

export class MessageController {
  private _messageService: MessageService

  constructor(messageService: MessageService) {
    this._messageService = messageService
  }

  send = async (request: Request, response: Response) => {
    try {
      const message = await this._messageService.create(request.body)
      response.status(200).json(message)
    } catch (e) {
      response.sendStatus(400)
    }
  }

  getUnread = async (request: Request, response: Response) => {
    try {
      const messages = await this._messageService.findAllUnread()
      response.status(200).json(messages)
    } catch (e) {
      response.sendStatus(400)
    }
  }
}