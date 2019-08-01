const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = Schema({
    description: {
        type: String,
    },

    audio_url: {
        type: String,
    },

    name: {
        type: String,
    },

    icon_url: {
        type: Boolean,
    },

    owner_id: {
        type: Schema.ObjectId,
    },

    entities_id: {
        type: Schema.ObjectId,
    }
});

module.exports = mongoose.model('products', productSchema);
