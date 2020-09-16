const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const formRouter = require("./home");

const userRouter = require('./user');

const ProductsRouter = require("./controllers/products");

const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended:false}));

app.set("view engine", 'ejs');

app.set("views","pages");

app.use(userRouter);

app.use(formRouter.handleForm);

app.use(ProductsRouter.error404);

app.listen(3000);