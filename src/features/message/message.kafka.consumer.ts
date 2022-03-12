import { kafka } from "@/loaders/kafka";

const consumer = kafka.consumer({
  groupId: 'messages-group'
})

export default async () => {
  await consumer.connect()
  await consumer.subscribe({ topic: 'message', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        message
      })
    }
  })
}