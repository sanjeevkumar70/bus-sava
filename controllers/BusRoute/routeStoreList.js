const RouteModal = require("../../model/bus-route");

const routeStoreList = async (req, res) => {
    try {
        const busData = await RouteModal.find();
        console.log("Bus List: ", busData);
        return res.status(200).json({ data: busData, count: busData.length, status: 200 });
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch routes", status: 500 });
    }
};

module.exports = { routeStoreList };
    