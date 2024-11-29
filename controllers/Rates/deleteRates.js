const RatesModal = require("../../model/rates"); 
const deleteRates = async (req, res) => {
    try {
        const id = req.params.id; 
        const deletedRates = await RatesModal.findByIdAndDelete(id); 
        if (!deletedRates) {
            return res.status(404).json({ error: "Rates not found", status: 404 });
        }
        return res.status(200).json({
            message: "Rates deleted successfully",
            status: 200,
        });
    } catch (error) {
        return res.status(500).json({ error: "Failed to delete rates", status: 500 });
    }
};

module.exports = { deleteRates };
