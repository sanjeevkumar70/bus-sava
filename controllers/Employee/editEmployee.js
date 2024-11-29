const EmployeeModel = require("../../model/employee");

const editEmployee = async (req, res) => {
    try {
        const busId = req.params.id;
        const {
            emp_code,
            emp_Name,
            emp_email,
            emp_mobile,
            emp_type,
            emp_coupon_type,
            emp_active,
            imagestore,
            emp_from_date,
            emp_to_date,
            busstop_name,
            purpose_name,
            department_name,
            rates_code,
            rates_description,
            rates_price
        } = req.body;

        if (!emp_code || !emp_Name || !emp_email || !emp_mobile || !emp_type ||
            !emp_coupon_type || !emp_active || !imagestore || !emp_from_date ||
            !emp_to_date || !busstop_name || !purpose_name || !department_name ||
            !rates_code || !rates_description || !rates_price) {
            return res.status(400).json({ error: "All field required", status: 400 });
        }
        const updatedBus = await EmployeeModel.findByIdAndUpdate(
            busId,
            {
                emp_code,
                emp_Name,
                emp_email,
                emp_mobile,
                emp_type,
                emp_coupon_type,
                emp_active,
                imagestore,
                emp_from_date,
                emp_to_date,
                busstop_name,
                purpose_name,
                department_name,
                rates_code,
                rates_description,
                rates_price
            },
            { new: true }
        );
        if (!updatedBus) {
            return res.status(404).json({ error: "Bus not found", status: 404 });
        }
        return res.status(200).json({
            message: "Bus updated successfully",
            status: 200,
            bus: updatedBus,
        });
    } catch (error) {
        console.error("Error updating bus:", error);
        return res.status(500).json({ error: "Failed to update bus", status: 500 });
    }
};

module.exports = { editEmployee };
