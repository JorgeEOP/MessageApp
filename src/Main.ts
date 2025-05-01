import { KConsumer } from "./KafkaObjects/KConsumers";
import { KProducer } from "./KafkaObjects/KProducers"

const _TOPIC = "MessagingAppOne";

console.log("Creating Kafka Setup...")

const consumer = new KConsumer("groupOne", _TOPIC);
