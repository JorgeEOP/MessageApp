import { logf } from "../Logger/Logger";
import { IKEventHandler } from "./IKEventHandler";
import { KafkaMessage } from "kafkajs"
export class KEventHandler implements IKEventHandler {
    public process(msg: KafkaMessage) {
        logf(2, "KEventHandler::process: msg received: " + msg.value?.toString());
    }
}