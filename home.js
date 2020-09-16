const express = require('express');


const router = express.Router();
const ProductsRouter = require("./controllers/products");

router.get("/", ProductsRouter.getProducts);

router.post("/text", ProductsRouter.postProducts);

module.exports = {
    handleForm : router,
}
