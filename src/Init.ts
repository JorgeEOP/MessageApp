import { Kafka, EachMessagePayload } from "kafkajs";
import { KafkaCreator } from "./KafkaCreator";

const creator: KafkaCreator = new KafkaCreator();

console.log("Creating Kafka Setup...")

const producer = creator.setProducers();