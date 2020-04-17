// api route

// reference express
const express = require('express');
const router = express.Router();
router.use(express.json());

// import schema
const ItemCollection = require('../models/ItemSchema');

// POST: create a new item
router.post('/',(req,res) => {
    // res.send('new item created');
    ItemCollection.create(req.body,(errors,results) => {
        errors ? res.send(errors):res.send(results);
    });
});

// GET: read one item
router.get('/:name',(req,res) => {
    // res.send('read one item');
    ItemCollection.findOne({name: req.params.name}, (errors,results) => {
        errors ? res.send(errors):res.send(results);
    });
});

// GET: read all items
router.get('/',(req,res) => {
    // res.send('read all items');
    ItemCollection.find((errors,results) => {
        errors ? res.send(errors):res.send(results);
        
    });
});

// PUT: update an item
router.put('/:name',(req,res) => {
    // res.send('updated an item');
    ItemCollection.findOneAndUpdate({name: req.params.name},req.body, (errors,results) => {
        errors ? res.send(errors):res.send(results);
    });
});

// DELETE: delete an item
router.delete('/:name',(req,res) => {
    // res.send('deleted an item');
    ItemCollection.findOneAndDelete({name: req.params.name}, (errors,results) => {
        errors ? res.send(errors):res.send(`${req.params.name} deleted`);
    });
});

// export
module.exports = router;
