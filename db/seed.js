const mongoose = require('../db/connection');

// Model Access
const Resource = require("../models/Resource");
const resourceSeedData = require("./resourceSeed.json");

Resource.deleteMany({}).then(() => {
    console.log("Deleted all users");
    Resource.create({
        category: "Job Boards",
        resources: resourceSeedData.jobBoards
    }).then(() => {
        Resource.create({
            category: "Personal Branding",
            resources: resourceSeedData.personalBranding
        }).then(() => {
            Resource.create({
                category: "Resume And Cover Letter",
                resources: resourceSeedData.resumeAndCoverLetter
            }).then(() => {
                Resource.create({
                    category: "Networking",
                    resources: resourceSeedData.networking
                }).then(() => {
                    Resource.create({
                        category: "Interviewing",
                        resources: resourceSeedData.interviewing
                    }).then(() => {
                        Resource.create({
                            category: "Salary Negotiation",
                            resources: resourceSeedData.salaryNegotiation
                        }).then(() => {
                            Resource.create({
                                category: "Imposter Syndrome",
                                resources: resourceSeedData.imposterSyndrome
                            }).then(() => {
                                Resource.create({
                                    category: "Technical",
                                    resources: resourceSeedData.technical
                                }).then(() => {
                                    console.log("Data seeded successfully");
                                    mongoose.connection.close()
                                })
                            })
                        })
                    })
                })
            })
        })
    }).catch(err => {
        console.log("Error seeding resource data: ", err)
        mongoose.connection.close()
    })
}).catch(err => {
    console.log("Error deleting resource data: ", err)
    mongoose.connection.close()
});