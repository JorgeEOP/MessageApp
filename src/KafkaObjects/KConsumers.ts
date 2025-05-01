import { Consumer, EachMessagePayload } from "kafkajs";
import { logf } from "../Logger/Logger";
import { KObjectBase } from "./KObjectBase";
import { IKEventHandler } from "../KafkaEventHandlers/IKEventHandler";
import { KEventHandler } from "../KafkaEventHandlers/KEventHandler";

export class KConsumer extends KObjectBase {
    //@ts-ignore
    private consumer: Consumer;
    private eventHandler: IKEventHandler;
    constructor(groupId: string, topic: string) {
        super();
        this.eventHandler = new KEventHandler()
        const subscription = this.subscribeToTopic(groupId, topic);
        subscription.then((value) => {
            this.run();
        })
    }
    /**
     * 
     */
    protected async subscribeToTopic(groupId: string, topic: string) {
        try {
            logf(2, "SetConsumer");
            const kafka = this.getKafkaObject();
            const consumer: Consumer = kafka.consumer({ groupId: groupId })

            logf(2, "SetConsumer:: Trying to connect...")
            await consumer.connect()
            await consumer.subscribe({ topic: 'MessagingAppOne', fromBeginning: true })

            logf(2, "Setconsumer:: Connected to consumer...")
            this.consumer = consumer;

            /*
            await consumer.run({
                eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
                    logf(2, "SetConsumer::MessageReceived: " + message.value?.toString());
                },
            })
            */
        } catch (e) {
            logf(1, "Setconsumer:: Unable To subscribe to Broker");
        }
    }
    /**
     * 
     */
    protected async run() {
        await this.consumer.run({
            eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
                this.eventHandler.process(message);
            }
        });
    }
    /**
     * 
     * @returns 
     */
    public getConsumer(): Consumer {
        return this.consumer;
    }
}