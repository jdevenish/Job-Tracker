const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const cookieParser = require('cookie-parser');

app.use(parser.json());
app.use(cookieParser());
// // app.use(cors({credentials: true, origin: true}));
// app.use(cors({
//     'allowedHeaders': ['sessionId', 'Content-Type'],
//     'exposedHeaders': ['sessionId'],
//     'origin': "https://seirproj3jobtracker.netlify.app",
//     'methods': 'GET,PUT,POST,DELETE',
//     'credentials': true,
//     'preflightContinue': false
// }));
app.use(cors());

// Default Route
app.get("/", (req, res) => {
    // add redirect at some point
    res.status(200).json({
        "status": 200,
        "msg" : "server is up and running"
    })
});

const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

const resourceRoutes = require("./routes/resource");
app.use("/resource", resourceRoutes);


// Set the port and configure server to listen on that port
app.set('port', PORT);
app.listen(app.get('port'), () => console.log(`PORT: ${app.get("port")} 🌟`));