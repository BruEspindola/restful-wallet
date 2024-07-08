const kafkaRepository = require('../../infrastructure/repositories/kafka/repository');
const send = async (message, topic) => {
  await kafkaRepository.sendMessage(message, topic);
}

module.exports = {
  send,
};