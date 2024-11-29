const RouteModal = require("../../model/bus-route"); 
const deleteRoute = async (req, res) => {
    try {
        const id = req.params.id; 
        const deletedRoute = await RouteModal.findByIdAndDelete(id); 
        if (!deletedRoute) {
            return res.status(404).json({ error: "Route not found", status: 404 });
        }
        return res.status(200).json({
            message: "Route deleted successfully",
            status: 200,
        });
    } catch (error) {
        return res.status(500).json({ error: "Failed to delete Route", status: 500 });
    }
};

module.exports = { deleteRoute };
