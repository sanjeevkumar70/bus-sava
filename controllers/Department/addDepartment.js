const DepartmentModal = require('../../model/department');

const addDepartment = async (req, res) => {
    const { department_name } = req.body;
    if (!department_name) {
        return res.status(400).json({ error: "Department name are required!" });
    }
    const existingData=await DepartmentModal.findOne({department_name})
    if(existingData){
        return res.status(400).json({ error: "Department already exists!" });
    }
    const busData = new DepartmentModal({
        department_name: department_name
    });
    await busData.save();
    res.status(201).json({
        message: "Department added successfully!",
        bus: busData,
    });
};
module.exports = { addDepartment }