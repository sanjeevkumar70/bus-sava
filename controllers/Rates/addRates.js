const RatesModal = require('../../model/rates');

const addRates = async (req, res) => {
    try {
        const { rates_code, rates_description, rates_price } = req.body;

        // Validate required fields
        if (!rates_code || !rates_description || !rates_price) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const existingData = await RatesModal.findOne({ rates_code })
        if (existingData) {
            return res.status(400).json({ error: "Rate already exists" });
        }
        // Create a new employee document
        const updated = new RatesModal({
            rates_code, rates_description, rates_price
        });
        await updated.save();

        return res.status(201).json({
            message: "Rates added successfully",
            rates: updated
        });
    } catch (error) {
        return res.status(500).json({ error: "Failed to add Rates" });
    }
};
module.exports = { addRates }