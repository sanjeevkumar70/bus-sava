const AttendenceModal = require("../../model/attendance");

const attendenceList = async (req, res) => {
    const { emp_Name, department_name, condoctore_name } = req.body;
    try {
        const filter = {};

        if (emp_Name) {
            filter.emp_Name = { $regex: emp_Name, $options: "i" };
        }
        if (department_name) {
            filter.department_name = { $regex: department_name, $options: "i" };
        }
        if (condoctore_name) {
            filter.condoctore_name = { $regex: condoctore_name, $options: "i" };
        }
        const busData = await AttendenceModal.find(filter);
        return res.status(200).json({ count: busData.length, status: 200, data: busData });
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch  Attendence list", status: 500 });
    }
};

module.exports = { attendenceList };
