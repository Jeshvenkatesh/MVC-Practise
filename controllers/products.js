const Product = require("../Models/product");

exports.getProducts = (req,res,next)=>{
    res.render("home",{docTitle : "home"});
};

exports.postProducts = (req,res,next)=>{
    const product = new Product(req.body.inpVal)
    product.save();
    res.redirect("/user");
};

exports.generateProducts = (req,res,next)=>{
    const products = Product.fetchAll()
    res.render("user",{prods : products, docTitle : "user"});
};

exports.error404 = (req,res,next)=>{
    res.render('404', {docTitle : "404"});
};