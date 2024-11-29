const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PurposeSchema = new Schema({
    purpose_name: {
        type: String,
        required: true,
    },
});

const PurposeSchemaModal = mongoose.model("Purpose", PurposeSchema, "Purpose");
module.exports = PurposeSchemaModal;
