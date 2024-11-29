const BusStorageModal = require('../../model/busStorage');

const addBus = async (req, res) => {
    const { bus_name,bus_number } = req.body;
    if (!bus_name || !bus_number) {
        return res.status(400).json({ error: "busName and busNumber are required" });
    }
    const existingData=await BusStorageModal.findOne({bus_number})
    if(existingData){
        return res.status(400).json({ error: "Bus already exists" });
    }
    const busData = new BusStorageModal({
        bus_name: bus_name,
        bus_number: bus_number,
    });
    await busData.save();
    res.status(201).json({
        message: "Bus added successfully",
        bus: busData,
    });
};
module.exports = { addBus }