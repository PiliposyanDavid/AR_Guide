const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let entitiesSchema = Schema({
    type: {
        type: String,
    },

    description: {
        type: String,
    },

    owner_id: {
        type: Schema.ObjectId,
    },
});

module.exports = mongoose.model('entities', entitiesSchema);
