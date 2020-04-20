const User = require("../models/User");



const updateProfile = (req, res) => {
    console.log("request body = ", req.body)
    User.findOneAndReplace(
        {"userId" : req.body.userId},
        {
            "userId": req.body.userId,
            "jobSearchMaterials" : req.body.jobSearchMaterials,
            "targetCompanies" : req.body.targetCompanies,
            "networkingContacts" : req.body.networkingContacts
        }
    ).then(ack => {
        console.log("ack = ", ack)
        res.json({
            status: 200,
            message: `Update Profile for ${req.body.userId}`
        })

    }).catch(err => {
        res.json({
            status: 500,
            message: "Error updating user profile. Please try again later",
            error: err
        })
    })

};

const deleteProfile = (req, res) => {
    res.json({
        status: 200,
        message: `Delete Profile for ${req.param('token')}`
    })
};


module.exports = {
    updateProfile,
    deleteProfile
};