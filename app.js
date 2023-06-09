const express = require('express');
const productController = require('./Controller/productController')
const app = express();

app.get('/api/products', productController.getProducts)
app.get('/api/products/:id', productController.singleProducts)


app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})
