const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpStoregeSchema = new Schema({
    emp_code: {
        type: String,
        required: true,
    },
    emp_Name: {
        type: String,
        required: true,
    },
    emp_email: {
        type: String,
        required: false,
        // match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    emp_mobile: {
        type: String,
        required: false,
        // match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number'],
    },
    emp_type: {
        type: String,
        required: true,
    },
    emp_password: {
        type: String,
        required: true,
    },
    emp_coupon_type: {
        type: String,
        required: true,
    },
    emp_active: {
        type: String,
        required: false,
    },
    imagestore: {
        type: String,
        required: false,
    },
    emp_from_date: {
        type: String,
        required: true,
    },
    emp_to_date: {
        type: String,
        required: true,
    },
    busstop_name: {
        type: String,
        required: true,
    },
    purpose_name: {
        type: String,
        required: false,
    },
    department_name: {
        type: String,
        required: false,
    },
    rates_code: {
        type: String,
        required: true,
    },
    rates_description: {
        type: String,
        required: false,
    },
    rates_price: {
        type: Number,
        required: true,
    },
});

const EmpStoregeModal = mongoose.model("EmpStorege", EmpStoregeSchema, "EmpStorege");
module.exports = EmpStoregeModal;
