const RouteModal = require("../../model/bus-route");

const editRoute = async (req, res) => {
    try {
        const id = req.params.id;
        const {route_number,route_name,route_type} = req.body;

        if (!route_number || !route_name || !route_type) {
            return res.status(400).json({ error: "Route name are required", status: 400 });
        }
        const updatedData = await RouteModal.findByIdAndUpdate(
            id,
            {route_number,route_name,route_type},
            { new: true }
        );
        if (!updatedData) {
            return res.status(404).json({ error: "Route not found", status: 404 });
        }
        return res.status(200).json({
            message: "Route updated successfully",
            status: 200,
            route: updatedData,
        });
    } catch (error) {

        return res.status(500).json({ error: "Failed to update Route", status: 500 });
    }
};

module.exports = { editRoute };
