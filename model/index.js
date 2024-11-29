const mongoose = require("mongoose");

const dbConnection = async () => mongoose.connect("mongodb+srv://Bus:1234567890@cluster0.tsacw.mongodb.net/BusAttendence?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("mongoose connect");
}).catch((error) => {
    console.log("mongoose error");
});

module.exports = dbConnection;