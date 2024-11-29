const BusStorageModal = require("../../model/bus");

const busList = async (req, res) => {
    try {
        const data = await BusStorageModal.find();
        return res.status(200).json({ count: data.length, status: 200, data: data });
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch bus list", status: 500 });
    }
};

module.exports = { busList };
