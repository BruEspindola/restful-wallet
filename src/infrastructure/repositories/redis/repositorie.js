const connectRedis = require('../../context/redis').connect;

const set = async (key, value) => {
  const client = await connectRedis();
  client.set(key, value);
};

const get = async (key) => {
  const client = await connectRedis();
  client.get(key);
};

module.exports = {
  set,
  get
};


