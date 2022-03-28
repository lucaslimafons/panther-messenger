import glob from 'glob'
import { Kafka } from 'kafkajs'
import path from 'path'
import winston from 'winston'
import { i18n } from './i18n'

const server = process.env.KAFKA_SERVER ?? 'localhost:9092'

const kafka = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID,
  brokers: [server],
  retry: {
    initialRetryTime: 800,
    retries: 10
  }
})

export { kafka }

export default async () => {
  try {
    const kafkaFiles = glob.sync(path.join(__dirname, '../features/**/*.kafka.*'), {
      ignore: [path.join(__dirname, '/**/*.kafka.*.map')]
    })

    for (const file of kafkaFiles) {
      const kafkaFile = await import(file)
      await kafkaFile.default()
    }
  } catch (e) {
    winston.error(i18n.__('errors.load_kakfa'), e)
  }
}