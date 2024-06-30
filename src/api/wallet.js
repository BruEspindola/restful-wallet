const Router = require('express').Router;
const packageJSON = require('../../package.json');
const walletRouter = Router();
const walletService = require('../application/services/wallet');

walletRouter.post(`/${packageJSON.version}/wallet/create`, async (req, res) => {
  const body = req.body;
   res.send(await walletService.create(body));
});

walletRouter.get(`/${packageJSON.version}/wallet`, async (req, res) => {
  res.send(await walletService.read());
});

walletRouter.put(`/${packageJSON.version}/wallet/update/:id`, async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  res.send(await walletService.update(id, body));
});

walletRouter.delete(`/${packageJSON.version}/wallet/delete/:id`, async (req, res) => {
  const id = req.params.id;
  res.send(await walletService.disabled(id));
});

walletRouter.delete(`/${packageJSON.version}/wallet/user/delete/:nickname`, async (req, res) => {
  const nickname = req.params.nickname;
  res.send(await walletService.disabledWalletByUser(nickname));
});

module.exports = {
  walletRouter
}