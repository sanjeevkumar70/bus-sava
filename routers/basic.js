const express = require("express");
const router = express.Router();
const ratesController = require("../controllers/Rates/rateController");
const buscontroller = require("../controllers/BusStorage/buscontrollers");
const purposeController = require("../controllers/Purpose/purposeController");
const busStopListController = require("../controllers/busStop/busStopController");
const attendanceController = require("../controllers/Attendence/attendanceController");
const empStorageController = require("../controllers/EmpStorege/empStorageController");
const routeStoreController = require("../controllers/RouteStore/routesStoreController");
const memberStoreController = require("../controllers/MemberStore/memberStoreController");
const departmentListController = require("../controllers/Department/departmentController");

//attendance api's
router.post('/attendance', attendanceController.addAttendance.addAttendance);
router.put('/attendance/:id', attendanceController.editAttendance.editAttendance);
router.post('/attendance-list', attendanceController.attendanceList.attendenceList);
router.delete('/attendance/:id', attendanceController.deleteAttendance.deleteAttendance);

//bus stop api's
router.get('/bus-stop', busStopListController.busStopList.busStopList);
router.post('/bus-stop', busStopListController.addBusStop.addBusStop);
router.put('/bus-stop/:id', busStopListController.editBusStop.editBusStop);
router.delete('/bus-stop/:id', busStopListController.deleteBusStop.deleteBusStop);

//bus storage api's
router.post('/bus-storage', buscontroller.addBus.addBus);
router.get('/bus-storage', buscontroller.busList.busList);
router.put('/bus-storage/:id', buscontroller.editBus.editBus);
router.delete('/bus-storage/:id', buscontroller.deleteBus.deleteBus);

//Department api's
router.post('/department', departmentListController.addDepartment.addDepartment);
router.get('/department', departmentListController.departmentList.departmentList);
router.put('/department/:id', departmentListController.editDepartment.editDepartment);
router.delete('/department/:id', departmentListController.deleteDepartment.deleteDepartment);

//Employee data api's
router.get('/employee-storage', empStorageController.empStorageList.empStorageList);
router.post('/employee-storage', empStorageController.addEmpStorage.addEmpStorage);
router.put('/employee-storage/:id', empStorageController.editEmployee.editEmployee);
router.delete('/employee-storage/:id', empStorageController.deleteEmployee.deleteEmployee);
router.get('/employee-details/:emp_code', empStorageController.employeeDetails.employeeDetails);
router.post('/reset-password', empStorageController.resetEmployeePassword.resetEmployeePassword);

//Member Data api's
router.post('/member-store', memberStoreController.addMember.addMember);
router.put('/member-store/:id', memberStoreController.editMember.editMember);
router.get('/member-store', memberStoreController.memberStoreList.memberStoreList);
router.delete('/member-store/:id', memberStoreController.deleteMember.deleteMember);

//Purpose api's
router.post('/purpose', purposeController.addPurpose.addPurpose);
router.get('/purpose', purposeController.purposeList.purposeList);
router.put('/purpose/:id', purposeController.editPurpose.editPurpose);
router.delete('/purpose/:id', purposeController.deletePurpose.deletePurpose);

//Rates api's
router.get('/rates', ratesController.rateList.rateList);
router.post('/rates', ratesController.addRates.addRates);
router.put('/rates/:id', ratesController.editRates.editRates);
router.delete('/rates/:id', ratesController.deleteRates.deleteRates);

//Route api's
router.post('/route', routeStoreController.addRoute.addRoute);
router.put('/route/:id', routeStoreController.editRoute.editRoute);
router.get('/route', routeStoreController.routeStoreList.routeStoreList);
router.delete('/route/:id', routeStoreController.deleteRoute.deleteRoute);


module.exports = router;
