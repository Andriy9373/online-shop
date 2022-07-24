const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const products = require('./routes/api/products');
const orders = require('./routes/api/orders');

const app = express();

// Midleware
app.use(bodyParser.json());
app.use(cors());

app.use('/api/products', products);
app.use('/api/orders', orders);

const PORT = 5000;

function startApp() {
    try {
        app.listen(PORT, () => console.log(`Server started up on port ${PORT}`))
    } catch(e) {
        console.log(err)
    }
}
startApp();