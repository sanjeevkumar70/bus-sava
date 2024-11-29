const PurposeModal = require('../../model/purpose');

const addPurpose = async (req, res) => {
    try {
        const { purpose_name } = req.body;

        // Validate required fields
        if (!purpose_name) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const existingData = await PurposeModal.findOne({ purpose_name })
        if (existingData) {
            return res.status(400).json({ error: "Purpose already exists" });
        }

        // Create a new employee document
        const newEmployee = new PurposeModal({
            purpose_name
        });
        await newEmployee.save();

        return res.status(201).json({
            message: "Purpose added successfully",
            purpose: newEmployee
        });
    } catch (error) {
        return res.status(500).json({ error: "Failed to add Purpose" });
    }
};
module.exports = { addPurpose }