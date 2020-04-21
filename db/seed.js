const mongoose = require('../db/connection');

// Model Access
const Resources = require("../models/Resource");
const resourceSeedData = require("./resourceSeed.json");

Resources.deleteMany({}).then(() => {
    console.log("Deleted all users");
    Resources.insert(resourceSeedData).then(() => {
        console.log("Resources seeded");
        mongoose.connection.close()
    }).catch(err => {
        console.log("Error seeding resource data: ", err)
        mongoose.connection.close()
    })
}).catch(err => {
    console.log("Error deleting resource data: ", err)
    mongoose.connection.close()
});