const mongoose = require('../db/connection');


// schema
const ResourceSchema = new mongoose.Schema({
    name: String,
    url: String,
    views: Number
});


//model
const Resource = mongoose.model("Resource", ResourceSchema);

//export
module.exports = Resource;