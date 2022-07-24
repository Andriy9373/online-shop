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
        image: req.body.image,
        name: req.body.name,
        price: req.body.price,
        article: req.body.article,
        available: req.body.available,
        category: req.body.category,
        quantity: req.body.quantity
    })
    res.status(201).send('Created!');
})


async function loadCollection() {
    const connection = await mongodb.MongoClient.connect(DB_URL);
    return connection.db("online-shop").collection("products");
}

module.exports = router;