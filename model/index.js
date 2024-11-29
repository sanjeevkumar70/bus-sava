const mongoose = require("mongoose");

const dbConnection = async () => mongoose.connect("mongodb+srv://root:12345@cluster-1.ivcb7.mongodb.net/BusCompany?retryWrites=true&w=majority").then(() => {
    console.log("mongoose connect");
}).catch((error) => {
    console.log("mongoose error");
});

module.exports = dbConnection;