const BusStopModal = require("../../model/bus-stops"); 

const editBusStop = async (req, res) => {
    try {
        const busId = req.params.id;
        const { busstop_name } = req.body;

        if (!busstop_name) {
            return res.status(400).json({ error: "Bus stop name are required", status: 400 });
        }
        const updatedBus = await BusStopModal.findByIdAndUpdate(
            busId,
            { busstop_name },
            { new: true }
        );
        if (!updatedBus) {
            return res.status(404).json({ error: "Bus stop not found", status: 404 });
        }
        return res.status(200).json({
            message: "Bus stop updated successfully",
            status: 200,
            bus: updatedBus,
        });
    } catch (error) {
        return res.status(500).json({ error: "Failed to update bus stop", status: 500 });
    }
};

module.exports = { editBusStop };
