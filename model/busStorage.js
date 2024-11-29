const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusStorageSchema = new Schema({
    bus_name: {
        type: String,
        required: true,  
    },
    bus_number: {
        type: String,
        required: true,  
    }
});

const BusStorageModal = mongoose.model("BusStorege", BusStorageSchema, "BusStorege");  
module.exports = BusStorageModal;
