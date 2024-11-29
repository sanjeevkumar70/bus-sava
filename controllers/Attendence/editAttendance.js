const AttendenceModal = require("../../model/busStorage");

const editAttendance = async (req, res) => {
    try {
        const busId = req.params.id;
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
            return res.status(400).json({ error: "All field required", status: 400 });
        }
        const updatedBus = await AttendenceModal.findByIdAndUpdate(
            busId,
            {
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
            },
            { new: true }
        );
        if (!updatedBus) {
            return res.status(404).json({ error: "Attendance not found", status: 404 });
        }
        return res.status(200).json({
            message: "Attendance updated successfully",
            status: 200,
            Attendance: updatedBus,
        });
    } catch (error) {
        console.error("Error updating Attendance:", error);
        return res.status(500).json({ error: "Failed to update Attendance", status: 500 });
    }
};

module.exports = { editAttendance };
