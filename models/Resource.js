const mongoose = require('../db/connection');


// schema
const ResourceSchema = new mongoose.Schema({
    name: String,
    url: String,
    views: Number
});

const ResourcesSchema =  new mongoose.Schema({
    jobBoards: [ ResourceSchema ],
    personalBranding: [ ResourceSchema ],
    resumeAndCoverLetter: [ ResourceSchema ],
    networking: [ ResourceSchema ],
    interviewing: [ ResourceSchema ],
    salaryNegotiation: [ ResourceSchema ],
    imposterSyndrome: [ ResourceSchema ],
    technical: [ ResourceSchema ],
});


//model
const Resources = mongoose.model("Resources", ResourcesSchema);

//export
module.exports = Resources;