import { Kafka } from 'kafkajs'

const server = process.env.KAFKA_SERVER ?? 'localhost:9092'

const kafka = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID,
  brokers: [server]  
})

export { kafka }