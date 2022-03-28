import { kafka } from "@/loaders/kafka";
import { Message } from "@/models/message.model";
import winston from "winston";

const producer = kafka.producer()

const { CONNECT } = producer.events

export default async (): Promise<void> => {
  await producer.connect()
  producer.on(CONNECT, e => winston.info('kafka producer connected.'))
}

export async function send(message: Message) {
  await producer.send({
    topic: 'new-message',
    messages: [
      {
        value: message.message
      }
    ]
  })
}