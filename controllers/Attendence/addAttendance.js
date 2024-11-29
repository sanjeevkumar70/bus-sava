const AttendenceModal = require('../../model/attendance');

const addAttendance = async (req, res) => {
    try {
        const {
            bus_name,
            bus_number,
            route_name,
            route_number,
            condoctore_name,
            condoctore_id,
            entry_type,
            emp_Name,
            emp_type,
            emp_code,
            purpose_name,
            busstop_name,
            department_name,
            emp_coupon_type,
            latitude,
            longlatitude,
            in_out_flag,
            create,
            online_record_date
        } = req.body;

        // Validate required fields
        if (
            !bus_name ||
            !bus_number ||
            !route_name ||
            !route_number ||
            !condoctore_name ||
            !condoctore_id ||
            !entry_type ||
            !emp_Name ||
            !emp_type ||
            !emp_code ||
            !purpose_name ||
            !busstop_name ||
            !department_name ||
            !emp_coupon_type ||
            !latitude ||
            !longlatitude ||
            !in_out_flag ||
            !create ||
            !online_record_date
        ) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const existingData = await AttendenceModal.findOne({ condoctore_id });
        if (existingData) {
            return res.status(400).json({ error: "Conductor already exists" });
        }

        // Create a new employee document
        const newEmployee = new AttendenceModal({
            bus_name,
            bus_number,
            route_name,
            route_number,
            condoctore_name,
            condoctore_id,
            entry_type,
            emp_Name,
            emp_type,
            emp_code,
            purpose_name,
            busstop_name,
            department_name,
            emp_coupon_type,
            latitude,
            longlatitude,
            in_out_flag,
            create,
            online_record_date
        });
        await newEmployee.save();

        return res.status(201).json({
            message: "Attendance added successfully",
            employee: newEmployee
        });
    } catch (error) {
        return res.status(500).json({ error: "Failed to add Attendance" });
    }
};
module.exports = { addAttendance }