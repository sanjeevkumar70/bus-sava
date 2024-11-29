const BusStopModal = require("../../model/bus-stops"); 
const deleteBusStop = async (req, res) => {
    try {
        const busId = req.params.id; 
        const deletedBus = await BusStopModal.findByIdAndDelete(busId); 
        if (!deletedBus) {
            return res.status(404).json({ error: "Bus stop not found", status: 404 });
        }
        return res.status(200).json({
            message: "Bus stop deleted successfully",
            status: 200,
        });
    } catch (error) {
        return res.status(500).json({ error: "Failed to delete bus stop", status: 500 });
    }
};

module.exports = { deleteBusStop };
