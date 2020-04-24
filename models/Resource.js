const mongoose = require('../db/connection');

// schema
const ResourceDataSchema = new mongoose.Schema({
    name: String,
    url: String,
    views: Number
});

const ResourceSchema = new mongoose.Schema({
    category: String,
    resources: [ ResourceDataSchema ]
});

//model
const Resource = mongoose.model("Resource", ResourceSchema);

//export
module.exports = Resource;