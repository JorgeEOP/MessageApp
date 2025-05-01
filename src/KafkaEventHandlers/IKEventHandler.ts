import { KafkaMessage } from "kafkajs";

export interface IKEventHandler {
    process(msg: KafkaMessage): void
}