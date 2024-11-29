const MemberModal = require('../../model/member');

const addMember = async (req, res) => {
    try {
        const {
            emp_code,
            member_code,
            member_email,
            member_mobile,
            member_name,
            member_category,
            member_coupon_type,
            member_active,
            imagestore,
            member_rates_code,
            member_rates_description,
            member_rates_price,
            member_from_date,
            member_to_date
        } = req.body;

        // Validate required fields
        if (!emp_code || !member_code || !member_email || !member_mobile || !member_name || !member_category
            || !member_coupon_type || !member_active || !imagestore || !member_rates_code || !member_rates_description ||
            !member_rates_price
        ) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const existingData = await MemberModal.findOne({ member_code })
        if (existingData) {
            return res.status(400).json({ error: "Member already exists" });
        }

        // Create a new employee document
        const newEmployee = new MemberModal({
            emp_code,
            member_code,
            member_email,
            member_mobile,
            member_name,
            member_category,
            member_coupon_type,
            member_active,
            imagestore,
            member_rates_code,
            member_rates_description,
            member_rates_price,
            member_from_date,
            member_to_date
        });
        await newEmployee.save();
        return res.status(201).json({
            message: "Member added successfully",
            employee: newEmployee
        });
    } catch (error) {
        return res.status(500).json({ error: "Failed to add employee" });
    }
};
module.exports = { addMember }