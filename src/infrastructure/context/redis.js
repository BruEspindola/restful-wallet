const redis = require('redis');
const environment = require('../../../env');

const connect = async () => {
  const client = redis.createClient({
    host: environment.redisHost,
    port: environment.redisPort,
    database: 0,
  });

  client.on('connect', () => {
    console.log('Redis connected');
  });

  client.on('error', (error) => {
    console.log('Error on Redis', error);
  });

  return await client.connect();
};

module.exports = {
  connect
};