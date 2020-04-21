const Resource = require("../models/Resource");


const getAll = (req, res) => {
    Resource.find().then(resources => {
        res.json({
            status: 200,
            resources: resources[0]
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