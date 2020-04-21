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
})

// const ResourcesSchema =  new mongoose.Schema({
//     category: [ ResourceSchema ],
//     personalBranding: [ ResourceSchema ],
//     resumeAndCoverLetter: [ ResourceSchema ],
//     networking: [ ResourceSchema ],
//     interviewing: [ ResourceSchema ],
//     salaryNegotiation: [ ResourceSchema ],
//     imposterSyndrome: [ ResourceSchema ],
//     technical: [ ResourceSchema ],
// });


//model
const Resource = mongoose.model("Resource", ResourceSchema);

//export
module.exports = Resource;