const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusStopsSchema = new Schema({
    busstop_name: {
        type: String,
        required: true,  
    },
});

const BusStopModel = mongoose.model("BusStops", BusStopsSchema, "BusStops");  
module.exports = BusStopModel;
