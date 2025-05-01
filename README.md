# Messaging App which uses Apache Kafka

## Objective
This repo is a backend App that uses **KafkaJS** to create Producers and Consumers that
communicate via Kafka.

## Prerequisists:
Installed **Kafka** in you system.
If you installed it with Homebrew in MacOs, you can run it with the following command:
`kafka-server-start /opt/homebrew/etc/kafka/server.properties`

To create *Topics* in Kafka, you can use the following command:
`kafka-topics --create --topic name_of_your_topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1`

You can use the terminal to send messages to Kafka:
`kafka-console-producer --bootstrap-server localhost:9092 --topic name_of_your_topic`

