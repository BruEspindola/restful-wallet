const producerKafka = require("../../context/kafka").getProducer;

const sendMessage = async (message, topic) => {
  const producer = await producerKafka();
  await producer.send({
    topic,
    messages: [
      { value: message },
    ],
  });

  await producer.disconnect();
}

module.exports = {
  sendMessage,
};
