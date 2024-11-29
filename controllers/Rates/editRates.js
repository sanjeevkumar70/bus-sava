const RatesModal = require("../../model/rates");

const editRates = async (req, res) => {
    try {
        const id = req.params.id;
        const { rates_code, rates_description, rates_price } = req.body;

        if (!rates_code || !rates_description || !rates_price) {
            return res.status(400).json({ error: "Rates name are required", status: 400 });
        }
        const updatedData = await RatesModal.findByIdAndUpdate(
            id,
            { rates_code, rates_description, rates_price },
            { new: true }
        );
        if (!updatedData) {
            return res.status(404).json({ error: "Rates not found", status: 404 });
        }
        return res.status(200).json({
            message: "Rates updated successfully",
            status: 200,
            rates: updatedData,
        });
    } catch (error) {

        return res.status(500).json({ error: "Failed to update Rates", status: 500 });
    }
};

module.exports = { editRates };
