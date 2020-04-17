// item schema

// reference mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define ItemSchema
const ItemSchema = new Schema(
    {
        name: String,
        price: Number,
        description: String
    }
);

// export
module.exports = mongoose.model('item',ItemSchema);