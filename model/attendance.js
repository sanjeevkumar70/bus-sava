const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusSchema = new Schema({
    bus_name: {
        type: String,
        required: true,
    },
    bus_number: {
        type: String,
        required: true,
    },
    route_name: {
        type: String,
        required: true,
    },
    route_number: {
        type: String,
        required: true,
    },
    bus_number: {
        type: String,
        required: true,
    },
    condoctore_name: {
        type: String,
        required: true,
    },
    condoctore_id: {
        type: String,
        required: true,
    },
    entry_type: {
        type: String,
        required: true,
    },
    emp_Name: {
        type: String,
        required: true,
    },
    emp_type: {
        type: String,
        required: true,
    },
    emp_code: {
        type: String,
        required: true,
    },
    purpose_name: {
        type: String,
        required: true,
    },
    busstop_name: {
        type: String,
        required: true,
    },
    department_name: {
        type: String,
        required: true,
    },
    emp_coupon_type: {
        type: String,
        required: true,
    },
    latitude: {
        type: String,
        required: true,
    },
    longlatitude: {
        type: String,
        required: true,
    },
    in_out_flag: {
        type: String,
        required: true,
    },
    create: {
        type: String,
        required: true,
    },
    online_record_date: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const AttendanceModel = mongoose.model("Attendance", BusSchema, "Attendance");

module.exports = AttendanceModel;
