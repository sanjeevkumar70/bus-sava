// const express = require("express");
// const basiRouter = require("./routers/basic");
// const app = express();
// const connectDb = require('./model/index');
// const bodyParser = require('body-parser');
// const port = 5000;

// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// connectDb();
// app.use("/bus-seva", basiRouter);

// app.listen(port, () => {
//     console.log(`server is running on ${port}`);
// })

// module.exports = app;

const express = require("express");
const cors = require("cors"); // Import cors middleware
const basiRouter = require("./routers/basic");
const connectDb = require('./model/index');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Connect to the database
connectDb();

// Enable CORS
app.use(cors({
    origin: "*", // Allow all origins (you can restrict to specific domains if needed)
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
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
