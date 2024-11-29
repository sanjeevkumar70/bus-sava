const EmployeeModel = require("../../model/empStorage"); 
const deleteEmployee = async (req, res) => {
    try {
        const busId = req.params.id; 
        const deletedBus = await EmployeeModel.findByIdAndDelete(busId); 
        if (!deletedBus) {
            return res.status(404).json({ error: "Employee not found", status: 404 });
        }
        return res.status(200).json({
            message: "Employee deleted successfully",
            status: 200,
        });
    } catch (error) {
        return res.status(500).json({ error: "Failed to delete Employee", status: 500 });
    }
};

module.exports = { deleteEmployee };
