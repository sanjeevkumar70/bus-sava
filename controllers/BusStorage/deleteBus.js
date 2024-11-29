const BusStorageModal = require("../../model/bus"); 
const deleteBus = async (req, res) => {
    try {
        const busId = req.params.id; 
        const deletedBus = await BusStorageModal.findByIdAndDelete(busId); 
        if (!deletedBus) {
            return res.status(404).json({ error: "Bus not found", status: 404 });
        }
        return res.status(200).json({
            message: "Bus storage deleted successfully",
            status: 200,
        });
    } catch (error) {
        return res.status(500).json({ error: "Failed to delete bus", status: 500 });
    }
};

module.exports = { deleteBus };
