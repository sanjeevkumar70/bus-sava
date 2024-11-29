const MemberModal = require("../../model/memberStore");

const editMember = async (req, res) => {
    try {
        // Get member ID from the request parameters
        const memberId = req.params.id;
        
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

        // Check if required fields are provided
        if (!emp_code || !member_code || !member_email || !member_mobile || !member_name || !member_category || !member_coupon_type || !member_active) {
            return res.status(400).json({ error: "All required fields are not provided", status: 400 });
        }

        // Update the member in the database
        const updatedMember = await MemberModal.findByIdAndUpdate(
            memberId,
            {
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
            },
            { new: true } // Return the updated member data
        );

        // If member not found
        if (!updatedMember) {
            return res.status(404).json({ error: "Member not found", status: 404 });
        }

        // Return the success response with the updated member data
        return res.status(200).json({
            message: "Member updated successfully",
            status: 200,
            member: updatedMember,
        });
    } catch (error) {
        console.error("Error updating member:", error);
        return res.status(500).json({ error: "Failed to update member", status: 500 });
    }
};

module.exports = { editMember };
