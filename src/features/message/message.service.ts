import { Message } from "@/models/message";

export class MessageService {
  async create(message: Message): Promise<Message> {
    try {
      await Message.build(message).validate()
      return await Message.create(message)      
    } catch (e) {
      throw e
    }
  }
}