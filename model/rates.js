
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RatesSchema = new Schema({
    rates_code: {
        type: String,
        required: true,
    },
    rates_description: {
        type: String,
        required: true,
    },
    rates_price: {
        type: String,
        required: true,
    },
});

const RatesModal = mongoose.model("Rates", RatesSchema, "Rates");
module.exports = RatesModal;
