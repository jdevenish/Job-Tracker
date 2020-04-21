const Resource = require("../models/Resource");


const getAll = (req, res) => {
    Resource.find().then(resources => {
        const resourceObj = resources[0]
        res.json({
            status: 200,
            resourceObj
        })
    })

};


const addResource = (req, res) => {
    Resource.insert(req.body).then(ack => {
        console.log("Add Resource response:  ", ack)
        res.json({
            status: 200,
            message: "Resource added"
        })
    })
};

module.exports = {
    getAll,
    addResource
};