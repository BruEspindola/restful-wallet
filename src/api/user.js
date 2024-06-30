const Router = require('express').Router;
const packageJSON = require('../../package.json');
const userRouter = Router();
const userService = require('../application/services/user');

userRouter.post(`/${packageJSON.version}/user/create`, async(req, res) => {
  const body = req.body;
  res.send(await userService.create(body));
});

userRouter.get(`/${packageJSON.version}/user`, async(req, res) => {
  res.send(await userService.read());
});

userRouter.put(`/${packageJSON.version}/user/update/:id`, async(req, res) => {
  const id = req.params.id;
  const body = req.body;
  res.send(await userService.update(id, body));
});

userRouter.delete(`/${packageJSON.version}/user/delete/:id`, async(req, res) => {
  const id = req.params.id;
  res.send(await userService.disabled(id));
})

module.exports = {
  userRouter
}