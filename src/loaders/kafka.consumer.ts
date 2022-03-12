import { kafka } from "./kafka"

const consumer = kafka.consumer({
  groupId: 'messages-group'
})

const { CONNECT } = consumer.events

export default async () => {
  await consumer.connect()
  consumer.on(CONNECT, e => console.log(e))

  await consumer.subscribe({ topic: 'test', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        key: message.key?.toString(),
        message: message.value.toString()
      })
    }
  })
}

export { consumer }