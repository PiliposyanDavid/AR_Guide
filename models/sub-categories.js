const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let subCategoriesSchema = Schema({
    name: {
        type: String,
    },

    icon_url: {
        type: Boolean,
    },

    owner_id: {
        type: Schema.ObjectId,
    },

    products_id: {
        type: Schema.ObjectId,
    }
});

module.exports = mongoose.model('sub_categories', subCategoriesSchema);
