const express = require("express");

const ProductsRouter = require("./controllers/products");

const router = express.Router();

router.use("/user",ProductsRouter.generateProducts);

module.exports = router;