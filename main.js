const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const walletRouter = require('./src/api/wallet').walletRouter;
const userRouter = require('./src/api/user').userRouter;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api', walletRouter);
app.use('/api', userRouter);

const port = 3000;
app.listen(port, () => {
  console.log('Started on port 3000');
})
