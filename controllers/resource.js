const Resource = require("../models/Resource");


const getAll = (req, res) => {
    Resource.find().then(resources => {
        res.status(200).json(resources)
    })

};


const addResource = (req, res) => {
    const obj = JSON.parse(req.body);
    const keys = Object.keys(obj);
    Resource.findOne({"category" : keys[0]}).then(resource => {
            resource.data.push(req.body.keys[0])
        }).catch(err => {
            console.log(`Error updating resource ${keys[0]}. ${err}`);
            res.status(500).json({
                status: 500,
                message: `Error updating resource ${keys[0]}. ${err}`
            })
    })

};

module.exports = {
    getAll,
    addResource
};