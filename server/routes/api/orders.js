const express = require('express');
const mongodb = require('mongodb');

DB_URL = "mongodb+srv://user:user@online-shop.tc5fc.mongodb.net/?retryWrites=true&w=majority"
router = express.Router();

// Get products
router.get('/', async (req, res) => {
    const collection = await loadCollection();
    res.status(200).send(await collection.find({}).toArray());
})


// Add product
router.post('/', async (req, res) => {
    const collection = await loadCollection();
    collection.insertOne({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        address: req.body.address,
        products: req.body.products
    })
    res.status(201).send('Created!');
})


async function loadCollection() {
    const connection = await mongodb.MongoClient.connect(DB_URL);
    return connection.db("online-shop").collection("orders");
}

module.exports = router;