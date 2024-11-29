const EmployeeModel = require('../../model/empStorage');

const addEmpStorage = async (req, res) => {
    try {
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

        // Validate required fields
        if (!emp_Name) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const existingData=await EmployeeModel.findOne({emp_code})
        if(existingData){
            return res.status(400).json({ error: "Employee already exists" });
        }
        
        // Create a new employee document
        const newEmployee = new EmployeeModel({
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
        });
        // console.log("New employee to save:", newEmployee);
        console.log("Schema validation issues may occur. Check this document:", newEmployee.validateSync());

        await newEmployee.save();

        return res.status(201).json({
            message: "Employee added successfully",
            employee: newEmployee
        });
    } catch (error) {
        console.log(error,"jjjj")
        return res.status(500).json({ error: "Failed to add employee" });
    }
};
module.exports = { addEmpStorage }