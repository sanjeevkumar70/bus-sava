const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RouteStoreSchema = new Schema({
    route_number: {
        type: String,
        required: true,
    },
    route_name: {
        type: String,
        required: true,
    },
    route_type: {
        type: String,
        required: true,
    },
});

const RouteStore = mongoose.model("BusRoute", RouteStoreSchema, "BusRoute");
module.exports = RouteStore;
