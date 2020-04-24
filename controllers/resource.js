const Resource = require("../models/Resource");


const getAll = (req, res) => {
    Resource.find({},{"resources._id" : 0}).then(resources => {
        const returnObj = {};
        for(let i=0; i<resources.length; i++){
            returnObj[resources[i].category] = resources[i].resources
        }
        res.status(200).json(returnObj)
    })

};


const addResource = (req, res) => {
    const keys = Object.keys(req.body);
    Resource.findOne({"category" : keys[0]}).then(resourceObj => {
            resourceObj.resources.push(req.body[keys[0]][0])
            resourceObj.save();
            res.status(200).json({
                status: 200,
                message: "Resource added"
            })
        }).catch(err => {
            res.status(500).json({
                status: 500,
                message: `Error updating resource ${keys[0]}. ${err}`
            })
    })
};

const removeResource = (req, res) => {
    const keys = Object.keys(req.body);
    Resource.findOne({"category" : keys[0]}).then(resourceObj => {
        resourceObj.resources = resourceObj.resources.filter((resource) => {
            return resource.url !== req.body[keys[0]][0].url
        });
        resourceObj.save();
        res.status(200).json({
            status: 200,
            message: "Resource removed"
        })
    }).catch(err => {
        res.status(500).json({
            status: 500,
            message: `Error removing resource ${keys[0]}. ${err}`
        })
    })
};

module.exports = {
    getAll,
    addResource,
    removeResource
};