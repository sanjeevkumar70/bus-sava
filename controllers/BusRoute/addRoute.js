const RouteModal = require('../../model/bus-route');

const addRoute = async (req, res) => {
    try {
        const { route_number, route_name, route_type } = req.body;

        // Validate required fields
        if (!route_number || !route_name || !route_type) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const existingData = await RouteModal.findOne({ route_number })
        if (existingData) {
            return res.status(400).json({ error: "Route already exists" });
        }

        // Create a new employee document
        const updated = new RouteModal({
            route_number, route_name, route_type
        });
        await updated.save();

        return res.status(201).json({
            message: "Route added successfully",
            route: updated
        });
    } catch (error) {
        return res.status(500).json({ error: "Failed to add Route" });
    }
};
module.exports = { addRoute }