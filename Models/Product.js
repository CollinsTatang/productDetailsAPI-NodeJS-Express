const DB = require('../data');

const getProducts = () => {
    try {
      return DB.products;
    } catch (error) {
      throw { status: 500, message: error };
    }
  };

module.exports = { getProducts };