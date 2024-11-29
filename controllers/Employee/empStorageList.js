const EmployeeModel = require("../../model/employee");

const empStorageList = async (req, res) => {
    try {
        const busData = await EmployeeModel.find();
        return res.status(200).json({ count: busData.length, status: 200, data: busData });
    } catch (error) {
        console.error("Error fetching bus list: ", error);
        return res.status(500).json({ error: "Failed to fetch bus list", status: 500 });
    }
};

module.exports = { empStorageList };
