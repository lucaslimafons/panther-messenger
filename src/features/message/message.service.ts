import { i18n } from "@/loaders/i18n";
import { sequelize } from "@/models";
import { Message } from "@/models/message.model";
import winston from "winston";

export class MessageService {
  async create(message: Message): Promise<Message> {
    const transaction = await sequelize.transaction()
    try {
      //@ts-ignore
      await Message.build(message).validate()
      //@ts-ignore
      const created = await Message.create(message, { transaction })

      await transaction.commit()

      return created
    } catch (e) {
      await transaction.rollback()

      const errorMessage = i18n.__('errors.create', i18n.__('labels.message'))

      winston.error(errorMessage, e)

      throw e
    }
  }

  async findAllUnread(): Promise<Message[]> {
    try {
      return await Message.findAll({ where: { isRead: false } })
    } catch (e) {
      const errorMessage = i18n.__('errors.find_all', i18n.__('labels.message'))

      winston.error(errorMessage, e)

      throw e
    }
  }
}