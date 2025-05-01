import { Kafka, KafkaConfig } from "kafkajs";

export interface IKObject {
    getKafkaObject(): Kafka
    //subscribeToTopic(groupId: string, topic: string): void
    setProducer(): void,
}

export abstract class KObjectBase implements IKObject {
    protected kafkaObject: Kafka;
    constructor() {
        const kafkaC: KafkaConfig = {
            clientId: "MessagingApp",
            brokers: ["localhost:9092"]
        }

        this.kafkaObject = new Kafka(kafkaC);
    }
    /**
     * 
     * @returns 
     */
    getKafkaObject(): Kafka {
        return this.kafkaObject;
    }
    setProducer(): void {
    }
}