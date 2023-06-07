const productServices = require("../Services/productServices");

const getProducts = (req, res) => {
    try{
        const newProducts = productServices.getProducts();
          res.status(200).json(newProducts)
    } catch (error){
        res
        .status(error?.status || 500)
        .send({status: "FAILED" })
    }
};

module.exports = { getProducts };
