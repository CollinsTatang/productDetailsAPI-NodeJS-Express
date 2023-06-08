const productServices = require("../Services/productServices");
const { products } = require("../data");

const getProducts = (req, res) => {
    try{
        const newProducts = productServices.getProducts();
          res.status(200).json(newProducts)
    } catch (error){
        res
        .status(error?.status || 500)
        .send({status: "FAILED" })
    }
}

const singleProducts = (req, res) => {
    try{
        const { productID } = req.params

        const singleProducts = products.find((product) => product.id === Number(productID));

        if(!singleProducts){
            return res.status(404).send("Product Not found");
        }
          return res.status(200).json(singleProducts)
    } catch (error){
        res
        .status(error?.status || 500)
        .send({status: "FAILED" })
    }
};

module.exports = { getProducts, singleProducts };
