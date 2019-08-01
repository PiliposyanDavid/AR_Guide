const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categoriesSchema = Schema({
    name: {
        type: String,
    },

    icon_url: {
        type: String,
    },

    sub_categories_id: {
        type: [Schema.ObjectId],
    }
});

module.exports = mongoose.model('categories', categoriesSchema);
