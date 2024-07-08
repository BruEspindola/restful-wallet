const walletRepository = require('../../infrastructure/repositories/mongodb/repository');
const redisService = require('../../infrastructure/repositories/redis/repository');
const kafkaService = require('../../infrastructure/repositories/kafka/repository');

const createWallet = async (body) => {
  const result = await walletRepository.create(body);
  return result;
}

const read = async () => {
  const result = await walletRepository.read();
  return result;
}

const update = async (id, body) => {
  body = updateBody(body, id);
  await kafkaService.sendMessage(JSON.stringify(body), 'wallet');
  return { message: "We'll process your request" };
};

const updateBody = (body, id) => {
  return {
    ...body,
    id
  };
}

const disabled = async (id) => {
  const result = await walletRepository.disabled(id);
  return result;
};

const disabledWalletByUser = async (nickname) => {
  const user = await redisService.get(nickname);
  const result = await walletRepository.disabledManyWallets(user);
  return result;
}

module.exports = {
  createWallet,
  read,
  update,
  disabled,
  disabledWalletByUser
};
