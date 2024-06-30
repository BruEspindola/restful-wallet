const connectMongo = require("../../context/mongodb").connect;
const walletSchema = require("../../../domain/schemas/walletSchema");

const create = async (body) => {
  connectMongo();
  const result = await walletSchema.create(body);
  return result;
};

const read = async () => {
  connectMongo();
  const result = await walletSchema.find({ active: true});
  return result;
};

const update = async (id, body) => {
  connectMongo();
  const result = await walletSchema.findOneAndUpdate({ key: id }, body, {
    upsert: true,
    new: true,
  });
  return result;
};

const deleteWallet = async (id) => {
  connectMongo();
  await walletSchema.findOneAndUpdate({key: id}, {active: false}, {new: true});
  return {delete: true}
}

module.exports = {
  create,
  read,
  update,
  deleteWallet
};
