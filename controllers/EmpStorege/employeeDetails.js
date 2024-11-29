const EmployeeModel = require("../../model/empStorage");

const employeeDetails = async (req, res) => {
    try {
        const { emp_code } = req.params;
        if (!emp_code) {
            return res.status(400).json({ error: "Employee code is required" });
        }
        const employee = await EmployeeModel.findOne({ emp_code });
        if (!employee) {
            return res.status(404).json({ error: "Please enter valid employee id!" });
        }
        return res.status(200).json({
            message: "Employee details retrieved successfully",
            employee,
        });
    } catch (error) {
        console.error("Error finding employee:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { employeeDetails };
