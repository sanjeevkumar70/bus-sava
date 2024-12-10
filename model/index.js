const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://Bus:1234567890@cluster0.tsacw.mongodb.net/BusAttendence?retryWrites=true&w=majority&appName=Cluster0";


const dbConnection = async () => mongoose.connect(MONGO_URL).then(() => {
    console.log("mongoose connect");
}).catch((error) => {
    console.log("mongoose error");
});

module.exports = dbConnection;