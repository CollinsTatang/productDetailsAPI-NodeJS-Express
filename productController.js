const Product = require("./Models/Product");

const getProducts = (req, res) => {
    try{
        const newProducts = Product.getProducts().map((product) => {
            const { id, name, image } = product
            return { id, name, image }
          })
        
          res.status(200).json(newProducts)
    } catch (error){
        res
        .status(error?.status || 500)
        .send({status: "FAILED" })
    }
};
module.exports = { getProducts };