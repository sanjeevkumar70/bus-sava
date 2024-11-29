const BusStorageModal = require("../../model/busStorage"); 

const editBus = async (req, res) => {
    try {
        const busId = req.params.id;
        const { bus_name, bus_number } = req.body;

        if (!bus_name || !bus_number) {
            return res.status(400).json({ error: "Busname and Busnumber are required", status: 400 });
        }
        const updatedBus = await BusStorageModal.findByIdAndUpdate(
            busId,
            { bus_name, bus_number },
            { new: true }
        );
        if (!updatedBus) {
            return res.status(404).json({ error: "Bus not found", status: 404 });
        }
        return res.status(200).json({
            message: "Bus updated successfully",
            status: 200,
            bus: updatedBus,
        });
    } catch (error) {
        console.error("Error updating bus:", error);
        return res.status(500).json({ error: "Failed to update bus", status: 500 });
    }
};

module.exports = { editBus };
