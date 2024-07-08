const { Kafka } = require('kafkajs');
const environment = require('../../../env');

const getProducer = async () => {
  const kafka = new Kafka({
    clientId: environment.kafkaClientId,
    brokers: [environment.kafkaBrokers],
  });
  const producer = kafka.producer();
  await producer.connect();
  return producer;
};

module.exports = {
  getProducer,
};