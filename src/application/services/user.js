const userRepository = require('../../infrastructure/repositories/postgress/repositorie');
const walletService = require('./wallet');

const create = async (body) => {
  const result = await userRepository.create(body);
  await walletService.create({ key: result.key });
  return {create: true};
};

const read = async () => {
  const result = await userRepository.read();
  return result;
};

const update = async (id, body) => {
  const result = await userRepository.update(id, body);
  return result;
};

const disabled = async (id) => {
  const result = await userRepository.disabled(id);
  await walletService.disabled(result.key);
  return result;
};

const findByNickname = async (nickname) => {
  const result = await userRepository.findByNickname(nickname);
  return result;
};

module.exports = {
  create,
  read,
  update,
  disabled,
  findByNickname
};