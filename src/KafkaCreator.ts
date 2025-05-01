import { Kafka, KafkaConfig, EachMessagePayload } from "kafkajs";

export class KafkaCreator {
    private kafkaObject: Kafka;
    /**
     * 
     */
    constructor() {
        const kafkaC: KafkaConfig = {
            clientId: "MessagingApp",
            brokers: ["localhost:9092"]
        }

        this.kafkaObject = new Kafka(kafkaC);
    }
    /**
     * 
     */
    public getKafkaObject(): Kafka {
        return this.kafkaObject;
    }
    /**
     * 
     */
    public async setProducers() {
        const producer = this.kafkaObject.producer();
        await producer.connect();
        await producer.send({
            topic: 'MessagingAppOne',
            messages: [
                { headers: { source: 'test-app' },
                  value: 'Hello KafkaJS user!'
                }
            ],
        })
    }
    /**
     * 
     */
    public async setConsumer() {
        const consumerGroupId = {groupId: "test-group"}
        const consumer = this.kafkaObject.consumer(consumerGroupId);
        await consumer.connect();
        await consumer.subscribe({
            topic: "test-topic",
            fromBeginning: true
        });
        await consumer.run({
            eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
              console.log({
                value: message.value?.toString(),
              })
            },
          })
    }
}