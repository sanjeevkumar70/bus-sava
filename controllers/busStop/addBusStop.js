const BusStopModal = require('../../model/bus-stops');

const addBusStop = async (req, res) => {
    const { busstop_name } = req.body;
    if (!busstop_name) {
        return res.status(400).json({ error: "Bus stop Name are required" });
    }
    const existingData=await BusStopModal.findOne({busstop_name})
    if(existingData){
        return res.status(400).json({ error: "Bus stop already exists" });
    }

    const busData = new BusStopModal({
        busstop_name: busstop_name,
    });

    await busData.save();
    res.status(201).json({
        message: "Bus stop added successfully",
        bus: busData,
    });
};
module.exports = { addBusStop }