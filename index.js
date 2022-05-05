const express = require('express')
const Router = require('router')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = Router();

const app = express();

app.get('/', (_req, res) => {
  res.json({ message: 'Hello World' });
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000,()=>{
    console.log('This server is running');
});