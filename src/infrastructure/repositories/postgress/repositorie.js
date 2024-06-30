const userSchema = require('../../../domain/schemas/userSchema');

const create = async(body) => {
  const result = await userSchema.create(
    body,
  )
  return result.toJSON();
};

const read = async() => {
  const result = await userSchema.findAll();
  return result;
};

const update = async(id, body) => {
  const result = await userSchema.update(
    body,
    { where: { nickname: id } }
  )
  return result;
};

const disabled = async(id) => {
  const user = await userSchema.findOne({ where: { nickname: id } });
  await userSchema.update(
    { active: false },
    { where: { nickname: id } }
  )
  return user.toJSON();
};

const findByNickname = async(nickname) => {
  const result = await userSchema.findOne({ where: { nickname } });
  return result.toJSON();
};

module.exports = {
  create,
  read,
  update,
  disabled,
  findByNickname
};