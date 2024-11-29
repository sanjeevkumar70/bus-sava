const DepartmentModal = require("../../model/department"); 
const deleteDepartment = async (req, res) => {
    try {
        const busId = req.params.id; 
        const deletedBus = await DepartmentModal.findByIdAndDelete(busId); 
        if (!deletedBus) {
            return res.status(404).json({ error: "department not found", status: 404 });
        }
        return res.status(200).json({
            message: "Department deleted successfully",
            status: 200,
        });
    } catch (error) {
        return res.status(500).json({ error: "Failed to delete department", status: 500 });
    }
};

module.exports = { deleteDepartment };
