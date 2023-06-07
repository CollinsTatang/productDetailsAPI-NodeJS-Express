const { products } = require('./data')

const getProducts = (req, res) => {
    try{
        const newProducts = products.map((product) => {
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