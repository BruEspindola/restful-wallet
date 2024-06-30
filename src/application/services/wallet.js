const walletRepository = require('../../infrastructure/repositories/mongodb/repositorie');

const create = async (body) => {
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

const deleteWallet = async (id) => {
  const result = await walletRepository.deleteWallet(id);
  return result;
}

module.exports = {
  create,
  read,
  update,
  deleteWallet
};
