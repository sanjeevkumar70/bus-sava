const DepartmentModal = require("../../model/department"); 

const editDepartment = async (req, res) => {
    try {
        const busId = req.params.id;
        const { department_name } = req.body;

        if (!department_name) {
            return res.status(400).json({ error: "Department are required", status: 400 });
        }
        const updatedBus = await DepartmentModal.findByIdAndUpdate(
            busId,
            { department_name },
            { new: true }
        );
        if (!updatedBus) {
            return res.status(404).json({ error: "Department not found", status: 404 });
        }
        return res.status(200).json({
            message: "Department updated successfully",
            status: 200,
            bus: updatedBus,
        });
    } catch (error) {
        return res.status(500).json({ error: "Failed to update department", status: 500 });
    }
};

module.exports = { editDepartment };
