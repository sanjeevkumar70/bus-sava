const AttendenceModal = require("../../model/attendance");
const deleteAttendance = async (req, res) => {
    try {
        const busId = req.params.id;
        const deletedBus = await AttendenceModal.findByIdAndDelete(busId);
        if (!deletedBus) {
            return res.status(404).json({ error: " Attendence not found", status: 404 });
        }
        return res.status(200).json({
            message: " Attendence deleted successfully",
            status: 200,
        });
    } catch (error) {
        return res.status(500).json({ error: "Failed to delete  Attendence", status: 500 });
    }
};

module.exports = { deleteAttendance };
