import { producer } from "@/loaders/kafka.producer";
import { Message } from "@/models/message";

export async function send(message: Message) {
  await producer.send({
    topic: 'test',
    messages: [
      {
        value: message.message
      }
    ]
  })
}