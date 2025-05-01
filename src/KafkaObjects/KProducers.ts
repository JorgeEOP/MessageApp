import { Kafka } from "kafkajs";
import { Producer } from "kafkajs";
import { logf } from "../Logger/Logger";
import { KObjectBase } from "./KObjectBase";

export class KProducer extends KObjectBase {
    //@ts-ignore
    private producer: Producer;
    /**
     * 
     */
    constructor() {
        super();
        if (this.kafkaObject != null) {
            this.producer = this.kafkaObject.producer();
        }
    }
    /**
     * 
     */
    public async setProducer() {
        try {
            logf(2, "KProducer::SetProducer");
            await this.producer.connect();
            await this.producer.send({
                topic: 'MessagingAppOne',
                messages: [
                    {
                        headers: { source: 'MessApp' },
                        value: 'Hello User!'
                    }
                ],
            })
        } catch (e) {
            logf(2, "KProducer::SetProducer" + e);
        }
    }
}