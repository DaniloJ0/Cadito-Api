require('dotenv/config');
const express= require('express');
const cors= require('cors');
const connect = require('./src/settings/setting_db.js');

const app = express();

const indexPage = require('./src/routes/index_route.js');
const usersRouter = require('./src/routes/users_route.js');
const postsRouter = require('./src/routes/posts_route.js');
const reviewsRouter = require('./src/routes/reviews_route.js');
const cartsRouter = require('./src/routes/carts_route.js');
const historiesRouter = require('./src/routes/histories_route.js');

app.use(cors());
app.use(express.json());


app.use('/', indexPage);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/reviews', reviewsRouter);
app.use('/cart', cartsRouter);
app.use('/history', historiesRouter);


connect();
app.listen(8080,()=>{console.log('This server is running');}) 

module.exports = app;
