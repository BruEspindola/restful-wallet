const redisRepository = require('../../infrastructure/repositories/redis/repository');

const set = async(key, value) => {
  await redisRepository.set(key, value);
};

const get = async(key) => {
  const result = await redisRepository.get(key);
  return result;
};

module.exports = {
  set,
  get
};