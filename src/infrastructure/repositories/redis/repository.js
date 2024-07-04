const connectRedis = require('../../context/redis').connect;

const set = async (key, value) => {
  const client = await connectRedis();
  return await client.set(key, value);
};

const get = async (key) => {
  const client = await connectRedis();
  return await client.get(key);
};

module.exports = {
  set,
  get
};


