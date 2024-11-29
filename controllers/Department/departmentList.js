const DepartmentModal = require("../../model/department"); 

const departmentList = async (req, res) => {
    try {
        const data = await DepartmentModal.find();
        return res.status(200).json({count:data.length, status: 200, data: data });
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch department list", status: 500 });
    }
};

module.exports = { departmentList };
