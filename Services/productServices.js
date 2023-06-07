const Product = require("../Models/Product");

const getProducts = () => {
    try {
        const newProducts = Product.getProducts().map((product) => {
            const { id, name, image } = product
            return { id, name, image }
          })
        return newProducts
    } catch (error) {
      throw error;
    }
  };

module.exports = { getProducts };
