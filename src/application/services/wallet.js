const walletRepository = require('../../infrastructure/repositories/mongodb/repositorie');
const userRepository = require('../../infrastructure/repositories/postgress/repositorie');

const createWallet = async (body) => {
  const result = await walletRepository.create(body);
  return result;
}

const read = async () => {
  const result = await walletRepository.read();
  return result;
}

const update = async (id, body) => {
  body = updateBody(body);
  const result = await walletRepository.update(id, body);
  return result;
};

const updateBody = (body) => {
  return {
    ...body,
    updatedAt: new Date()
  };
}

const disabled = async (id) => {
  const result = await walletRepository.disabled(id);
  return result;
};

const disabledWalletByUser = async (nickname) => {
  const user = await userRepository.findByNickname(nickname);
  const result = await walletRepository.disabledManyWallets(user.key);
  return result;
}

module.exports = {
  createWallet,
  read,
  update,
  disabled,
  disabledWalletByUser
};
