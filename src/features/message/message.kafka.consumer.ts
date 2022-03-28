import { kafka } from "@/loaders/kafka"
import { Message } from "@/models/message.model"
import winston from "winston"
import { MessageService } from "./message.service"
const messageService = new MessageService()

const consumer = kafka.consumer({
  groupId: 'messages-group'
})

const { CONNECT } = consumer.events

export default async (): Promise<void> => {
  await consumer.connect()
  consumer.on(CONNECT, e => winston.info('kafka consumer connected.'))

  await consumer.subscribe({ topic: 'new-message', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      winston.info(`kafka consumer: new message from topic ${topic}.`)
      
      try {
        console.log({
          topic,
          partition,
          key: message.key?.toString(),
          message: message.value?.toString()
        })
        
        await messageService.create({
          message: message.value!.toString()
        } as Message)
      } catch (e) {
        console.log(e)
        winston.error(`kafka consumer: error saving message from topic ${topic}.`, e)
      }
    }
  })
}