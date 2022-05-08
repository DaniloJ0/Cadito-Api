require('dotenv/config');
const express= require('express');
const cors= require('cors');
const connect = require('./src/settings/setting_db.js');

const app = express();

const indexPage = require('./src/routes/index_route.js');
const usersRouter = require('./src/routes/users_route.js');
app.use(cors());
app.use(express.json());


app.use('/', indexPage);
app.use('/users', usersRouter);

connect();
app.listen(8080,()=>{console.log('This server is running');}) 

module.exports = app;
