const port = 5000;
const express = require("express");
const app = express();
const cors = require("cors"); 
const connectDb = require('./model/index');
const bodyParser = require('body-parser');
const basiRouter = require("./routers/route");

connectDb();
app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"],
}));

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/bus-seva", basiRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

module.exports = app;
