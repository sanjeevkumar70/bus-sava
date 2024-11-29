const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberStoreSchema = new Schema({
    emp_code: {
        type: String,
        required: true,
        trim: true,
    },
    member_code: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    member_email: {
        type: String,
        required: true,
        trim: true,
    },
    member_mobile: {
        type: String,
        required: true,
        trim: true,
    },
    member_name: {
        type: String,
        required: true,
        trim: true,
    },
    member_category: {
        type: String,
        required: true,
        trim: true,
    },
    member_coupon_type: {
        type: String,
        required: true,
        trim: true,
    },
    member_active: {
        type: String,
        required: true,
        trim: true,
    },
    imagestore: {
        type: String,
        required: true,
    },
    member_rates_code: {
        type: String,
        required: true,
        trim: true,
    },
    member_rates_description: {
        type: String,
        required: true,
        trim: true,
    },
    member_rates_price: {
        type: Number,
        required: true,
    },
    member_from_date: {
        type: Date,
        required: false,
    },
    member_to_date: {
        type: Date,
        required: false,
    },
});

const MemberStoreModal = mongoose.model("Member", MemberStoreSchema, "Member");
module.exports = MemberStoreModal;
