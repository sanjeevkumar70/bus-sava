const EmployeeModel = require('../../model/empStorage');

const resetEmployeePassword = async (req, res) => {
    try {
        const { emp_code, emp_password } = req.body;

        // Validate emp_code and emp_password
        if (!emp_code || !emp_password) {
            return res.status(400).json({ error: "Employee code and new password are required" });
        }

        const employee = await EmployeeModel.findOne({ emp_code });
        if (!employee) {
            return res.status(404).json({ error: "Employee not found" });
        }
        employee.emp_password = emp_password;
        await employee.save();

        return res.status(200).json({
            message: "Password reset successfully",
        });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { resetEmployeePassword };
