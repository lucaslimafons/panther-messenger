import { kafka } from "@/loaders/kafka";

const producer = kafka.producer()

export default async () => {
  await producer.connect()
}

export { producer }